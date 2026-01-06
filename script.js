// Initialize demo account
function initializeDemoAccount() {
  if (!localStorage.getItem('users')) {
    const users = {
      'student': { password: '123456', email: 'student@example.com', name: 'Student' }
    };
    localStorage.setItem('users', JSON.stringify(users));
  }
}

// Toggle password visibility
function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  const button = event.target;
  
  if (input.type === 'password') {
    input.type = 'text';
    button.textContent = '🙈';
  } else {
    input.type = 'password';
    button.textContent = '👁️';
  }
}

// Validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Check password strength
function checkPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z\d]/.test(password)) strength++;
  
  const strengthDiv = document.getElementById('passwordStrength');
  if (strengthDiv) {
    const strengths = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
    const colors = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#10b981'];
    strengthDiv.textContent = 'Strength: ' + strengths[strength];
    strengthDiv.style.color = colors[strength];
  }
}

// Register function with validation
function register(event) {
  event.preventDefault();
  const username = document.getElementById('regUser').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPass').value;
  const confirmPass = document.getElementById('regConfirm').value;
  const agreeTerms = document.getElementById('agreeTerms');
  const errorDiv = document.getElementById('registerError');
  
  errorDiv.textContent = '';
  
  // Validation
  if (username.length < 3) {
    errorDiv.textContent = '❌ Username must be at least 3 characters';
    return;
  }
  
  if (!isValidEmail(email)) {
    errorDiv.textContent = '❌ Please enter a valid email';
    return;
  }
  
  if (password.length < 6) {
    errorDiv.textContent = '❌ Password must be at least 6 characters';
    return;
  }
  
  if (password !== confirmPass) {
    errorDiv.textContent = '❌ Passwords do not match';
    return;
  }
  
  if (agreeTerms && !agreeTerms.checked) {
    errorDiv.textContent = '❌ Please agree to the Terms & Conditions';
    return;
  }
  
  // Check if user already exists
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username]) {
    errorDiv.textContent = '❌ Username already exists';
    return;
  }
  
  // Register user
  users[username] = { password, email, name: username };
  localStorage.setItem('users', JSON.stringify(users));
  
  alert('✅ Registration successful! Redirecting to login...');
  window.location = 'index.html';
}

// Login function with validation
function login(event) {
  event.preventDefault();
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value;
  const errorDiv = document.getElementById('loginError');
  
  errorDiv.textContent = '';
  
  if (!username || !password) {
    errorDiv.textContent = '❌ Please enter both username and password';
    return;
  }
  
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  
  if (users[username] && users[username].password === password) {
    // Set current user
    localStorage.setItem('currentUser', username);
    
    // Remember me functionality
    if (document.getElementById('rememberMe').checked) {
      localStorage.setItem('rememberUser', username);
    }
    
    window.location = 'dashboard.html';
  } else {
    errorDiv.textContent = '❌ Invalid username or password';
  }
}

// Logout function
function logout() {
  localStorage.removeItem('currentUser');
  alert('You have been logged out.');
  window.location = 'index.html';
}

// Toggle mobile menu
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  if (menu) {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  }
}

// Toggle sidebar collapse/expand (desktop)
function toggleSidebarCollapse() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.toggle('collapsed');
  }
}

// Close menu when navigating
function closeMenuOnNavigate() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  if (menu && menu.classList.contains('active')) {
    menu.classList.remove('active');
    overlay.classList.remove('active');
  }
}

// Load page content dynamically
function loadPage(page) {
  event.preventDefault();
  closeMenuOnNavigate();
  const content = document.getElementById('contentArea');
  
  const pageContent = {
    'home': `
      <div class="welcome-section">
        <h1>Welcome! 👋</h1>
        <p>Here's an overview of your student activities</p>
      </div>
      <h1>📊 Dashboard Overview</h1>
      <div class="stats-grid">
        <div class="stat-card"><h3>Attendance</h3><p class="stat-value">92%</p></div>
        <div class="stat-card"><h3>GPA</h3><p class="stat-value">3.8</p></div>
        <div class="stat-card"><h3>Courses</h3><p class="stat-value">5</p></div>
        <div class="stat-card"><h3>Assignments</h3><p class="stat-value">3</p></div>
      </div>
      <p class="dashboard-hint">Select an option from the menu to explore more details.</p>
    `,
    'attendance': `
      <h1>📋 Attendance Record</h1>
      <div class="table-container">
        <table class="data-table">
          <tr><th>Course</th><th>Present</th><th>Total Classes</th><th>Percentage</th><th>Status</th></tr>
          <tr><td>Mathematics</td><td>32</td><td>35</td><td>91%</td><td><span class="badge active">Good</span></td></tr>
          <tr><td>Physics </td><td>28</td><td>30</td><td>93%</td><td><span class="badge active">Good</span></td></tr>
          <tr><td>Chemistry</td><td>30</td><td>33</td><td>91%</td><td><span class="badge active">Good</span></td></tr>
          <tr><td>English Literature</td><td>34</td><td>36</td><td>94%</td><td><span class="badge active">Excellent</span></td></tr>
          <tr><td>Data Structures</td><td>29</td><td>32</td><td>91%</td><td><span class="badge active">Good</span></td></tr>
        </table>
      </div>
    `,
    'grades': `
      <h1>📊 Academic Grades</h1>
      <div class="table-container">
        <table class="data-table">
          <tr><th>Course</th><th>Mid Term</th><th>Final</th><th>Overall Grade</th></tr>
          <tr><td>Mathematics</td><td>85</td><td>88</td><td>A</td></tr>
          <tr><td>Physics </td><td>82</td><td>86</td><td>A-</td></tr>
          <tr><td>Chemistry </td><td>90</td><td>92</td><td>A+</td></tr>
          <tr><td>English Literature</td><td>88</td><td>90</td><td>A</td></tr>
          <tr><td>Data Structures</td><td>87</td><td>89</td><td>A</td></tr>
        </table>
      </div>
    `,
    'courses': `
      <h1>📖 Enrolled Courses</h1>
      <div class="courses-grid">
        <div class="course-card">
          <h3>Mathematics</h3>
          <p><strong>Instructor:</strong> Dr. Jay</p>
          <p><strong>Credit Hours:</strong> 3</p>
          <p><strong>Status:</strong> <span class="badge active">Active</span></p>
        </div>
        <div class="course-card">
          <h3>Physics</h3>
          <p><strong>Instructor:</strong> Prof. Radha</p>
          <p><strong>Credit Hours:</strong> 2</p>
          <p><strong>Status:</strong> <span class="badge active">Active</span></p>
        </div>
        <div class="course-card">
          <h3>Chemistry</h3>
          <p><strong>Instructor:</strong> Dr. Krishna</p>
          <p><strong>Credit Hours:</strong> 3</p>
          <p><strong>Status:</strong> <span class="badge active">Active</span></p>
        </div>
        <div class="course-card">
          <h3>English Literature</h3>
          <p><strong>Instructor:</strong> Prof.Sita</p>
          <p><strong>Credit Hours:</strong> 3</p>
          <p><strong>Status:</strong> <span class="badge active">Active</span></p>
        </div>
        <div class="course-card">
          <h3>Data Structures</h3>
          <p><strong>Instructor:</strong> Dr. Ram</p>
          <p><strong>Credit Hours:</strong> 4</p>
          <p><strong>Status:</strong> <span class="badge active">Active</span></p>
        </div>
      </div>
    `,
    'assignments': `
      <h1 style="color: #ffffff;">✏️ Assignments</h1>
      <div class="assignments-list">
        <div class="assignment-item pending">
          <h3 style="color: #ffffff;">Mathematics Problem Set</h3>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Due:</strong> Dec 15, 2025</p>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Status:</strong> <span class="badge pending">Pending</span></p>
        </div>
        <div class="assignment-item submitted">
          <h3 style="color: #ffffff;">Physics Lab Report</h3>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Submitted:</strong> Dec 8, 2025</p>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Status:</strong> <span class="badge submitted">Submitted</span></p>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Grade:</strong> A (90/100)</p>
        </div>
        <div class="assignment-item pending">
          <h3 style="color: #ffffff;">Chemistry Experiment Analysis</h3>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Due:</strong> Dec 20, 2025</p>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Status:</strong> <span class="badge pending">Pending</span></p>
        </div>
      </div>
    `,
    'achievements': `
      <h1 style="color: #ffffff;">🏆 Achievements & Certificates</h1>
      <div class="achievements-grid">
        <div class="achievement-badge">🎓 Perfect Attendance - Semester 1</div>
        <div class="achievement-badge">📚 Excellence in Mathematics</div>
        <div class="achievement-badge">🏅 Science Fair Winner</div>
        <div class="achievement-badge">💻 Coding Challenge Top 10</div>
        <div class="achievement-badge">🎓 Graduation with Honors</div>
      </div>
    `,
    'events': `
      <h1 style="color: #ffffff;">📅 Upcoming Events</h1>
      <div class="events-list">
        <div class="event-item">
          <h3 style="color: #ffffff;">🎓 Graduation Ceremony</h3>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Date:</strong> December 20, 2025</p>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Location:</strong> Main Auditorium</p>
          <p style="color: rgba(255, 255, 255, 0.9);">Join us for the annual graduation celebration.</p>
        </div>
        <div class="event-item">
          <h3 style="color: #ffffff;">🏆 Annual Awards Night</h3>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Date:</strong> December 28, 2025</p>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Location:</strong> Grand Hall</p>
          <p style="color: rgba(255, 255, 255, 0.9);">Celebrate student achievements and excellence.</p>
        </div>
        <div class="event-item">
          <h3 style="color: #ffffff;">🎉 New Year Orientation</h3>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Date:</strong> January 10, 2026</p>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Location:</strong> All Campuses</p>
          <p style="color: rgba(255, 255, 255, 0.9);">Get ready for the new academic year.</p>
        </div>
      </div>
    `,
    'notices': `
      <h1 style="color: #ffffff;">📢 Announcements & Notices</h1>
      <div class="notices-list">
        <div class="notice-item">
          <h3 style="color: #ffffff;">📌 Final Exam Schedule Released</h3>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Date:</strong> Dec 5, 2025</p>
          <p style="color: rgba(255, 255, 255, 0.9);">The final exam schedule is now released. Please prepare accordingly.</p>
        </div>
        <div class="notice-item">
          <h3 style="color: #ffffff;">📌 Library Extended Hours</h3>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Date:</strong> Dec 4, 2025</p>
          <p style="color: rgba(255, 255, 255, 0.9);">The library will have extended hours during exam season: Mon-Fri 7 AM - 10 PM, Sat 9 AM - 8 PM.</p>
        </div>
        <div class="notice-item">
          <h3 style="color: #ffffff;">📌 Scholarship Applications Open</h3>
          <p style="color: rgba(255, 255, 255, 0.9);"><strong>Date:</strong> Dec 1, 2025</p>
          <p style="color: rgba(255, 255, 255, 0.9);">Applications for merit-based scholarships are now open. Deadline: December 31, 2025.</p>
        </div>
      </div>
    `,
    'fees': `
      <h1>💰 Fee Details & Payment</h1>
      <div class="fees-container">
        <div class="fee-item">
          <h3>Tuition Fee</h3>
          <p class="fee-amount">₹2,15,000</p>
          <p><strong>Status:</strong> <span class="badge paid">Paid</span></p>
        </div>
        <div class="fee-item">
          <h3>Library Fee</h3>
          <p class="fee-amount">₹2,450</p>
          <p><strong>Status:</strong> <span class="badge paid">Paid</span></p>
        </div>
        <div class="fee-item">
          <h3>Laboratory Fee</h3>
          <p class="fee-amount">₹10,600</p>
          <p><strong>Status:</strong> <span class="badge pending">Due: Jan 15</span></p>
        </div>
        <div class="fee-item">
          <h3>Student Activity Fee</h3>
          <p class="fee-amount">₹6,225</p>
          <p><strong>Status:</strong> <span class="badge paid">Paid</span></p>
        </div>
      </div>
    `,
    'faculty': `
      <h1>👨‍🏫 Faculty Directory</h1>
      <div class="faculty-grid">
        <div class="faculty-card">
          <div class="faculty-avatar">👨‍🏫</div>
          <h3>Dr. Jay Sharma</h3>
          <p class="faculty-dept">Mathematics Department</p>
          <p><strong>Email:</strong> jay.sharma@university.edu</p>
          <p><strong>Office:</strong> Room 301, Block A</p>
          <p><strong>Office Hours:</strong> Mon-Fri, 2-4 PM</p>
        </div>
        <div class="faculty-card">
          <div class="faculty-avatar">👩‍🏫</div>
          <h3>Prof. Radha Patel</h3>
          <p class="faculty-dept">Physics Department</p>
          <p><strong>Email:</strong> radha.patel@university.edu</p>
          <p><strong>Office:</strong> Room 205, Block B</p>
          <p><strong>Office Hours:</strong> Tue-Thu, 3-5 PM</p>
        </div>
        <div class="faculty-card">
          <div class="faculty-avatar">👨‍🏫</div>
          <h3>Dr. Krishna Kumar</h3>
          <p class="faculty-dept">Chemistry Department</p>
          <p><strong>Email:</strong> krishna.kumar@university.edu</p>
          <p><strong>Office:</strong> Room 401, Block C</p>
          <p><strong>Office Hours:</strong> Mon-Wed, 10-12 PM</p>
        </div>
        <div class="faculty-card">
          <div class="faculty-avatar">👩‍🏫</div>
          <h3>Prof. Sita Reddy</h3>
          <p class="faculty-dept">English Literature</p>
          <p><strong>Email:</strong> sita.reddy@university.edu</p>
          <p><strong>Office:</strong> Room 102, Block D</p>
          <p><strong>Office Hours:</strong> Wed-Fri, 1-3 PM</p>
        </div>
        <div class="faculty-card">
          <div class="faculty-avatar">👨‍🏫</div>
          <h3>Dr. Ram Verma</h3>
          <p class="faculty-dept">Computer Science</p>
          <p><strong>Email:</strong> ram.verma@university.edu</p>
          <p><strong>Office:</strong> Room 501, Block E</p>
          <p><strong>Office Hours:</strong> Mon-Fri, 11-1 PM</p>
        </div>
      </div>
    `,
    'gpa': `
      <h1>🧮 GPA Calculator</h1>
      <div class="gpa-calculator">
        <div class="calculator-section">
          <h3>Current Semester GPA: <span id="semesterGPA">0.00</span></h3>
          <h3>Cumulative GPA: <span id="cumulativeGPA">3.80</span></h3>
        </div>
        <div class="calculator-section">
          <h3>Add Course Grades</h3>
          <div class="gpa-form">
            <input type="text" id="courseName" placeholder="Course Name" class="gpa-input" />
            <input type="number" id="credits" placeholder="Credits" min="1" max="6" class="gpa-input" />
            <select id="grade" class="gpa-input">
              <option value="">Select Grade</option>
              <option value="10">A+ (10.0)</option>
              <option value="9">A (9.0)</option>
              <option value="8">B+ (8.0)</option>
              <option value="7">B (7.0)</option>
              <option value="6">C+ (6.0)</option>
              <option value="5">C (5.0)</option>
              <option value="4">D (4.0)</option>
              <option value="0">F (0.0)</option>
            </select>
            <button onclick="addCourse()" class="btn-primary">Add Course</button>
          </div>
        </div>
        <div class="calculator-section">
          <h3>Courses Added</h3>
          <div id="coursesList" class="courses-list-gpa">
            <p class="empty-state">No courses added yet. Add courses above to calculate your GPA.</p>
          </div>
        </div>
      </div>
    `,
    'profile': `
      <h1>👤 Student Profile</h1>
      <div class="profile-container">
        <div class="profile-info" id="profileView">
          <p><strong>Name:</strong> <span id="profileName">Student</span></p>
          <p><strong>Student ID:</strong> STU-2025-001</p>
          <p><strong>Email:</strong> <span id="profileEmail">student@example.com</span></p>
          <p><strong>Phone:</strong> <span id="profilePhone">987654321</span></p>
          <p><strong>Program:</strong> Bachelor of Technology</p>
          <p><strong>Enrollment Date:</strong> September 2025</p>
          <p><strong>GPA:</strong> 8.9</p>
        </div>
        <div class="profile-form" id="profileForm" style="display: none;">
          <div class="form-group">
            <label for="editName">Name:</label>
            <input type="text" id="editName" placeholder="Enter your name" />
          </div>
          <div class="form-group">
            <label for="editEmail">Email:</label>
            <input type="email" id="editEmail" placeholder="Enter your email" />
          </div>
          <div class="form-group">
            <label for="editPhone">Phone Number:</label>
            <input type="tel" id="editPhone" placeholder="Enter your phone number" />
          </div>
        </div>
        <div class="profile-actions" id="viewActions">
          <button onclick="toggleEditProfile()" class="btn-primary">Edit Profile</button>
          <button onclick="changePassword()" class="btn-secondary">Change Password</button>
        </div>
        <div class="profile-actions" id="editActions" style="display: none;">
          <button onclick="saveProfile()" class="btn-primary">Save Changes</button>
          <button onclick="cancelEditProfile()" class="btn-secondary">Cancel</button>
        </div>
      </div>
    `
  };
  
  content.innerHTML = pageContent[page] || `<h1>${page.toUpperCase()}</h1><p>Content coming soon...</p>`;
  
  // Set active navigation
  setActiveNav(page);
  
  // Load profile data
  if (page === 'profile') {
    const currentUser = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (currentUser && users[currentUser]) {
      const user = users[currentUser];
      document.getElementById('profileName').textContent = user.name || currentUser;
      document.getElementById('profileEmail').textContent = user.email;
      document.getElementById('profilePhone').textContent = user.phone || '+1 (555) 123-4567';
      
      // Set edit form values
      document.getElementById('editName').value = user.name || '';
      document.getElementById('editEmail').value = user.email || '';
      document.getElementById('editPhone').value = user.phone || '';
    }
  }
}

// Toggle edit profile form
function toggleEditProfile() {
  document.getElementById('profileView').style.display = 'none';
  document.getElementById('profileForm').style.display = 'block';
  document.getElementById('viewActions').style.display = 'none';
  document.getElementById('editActions').style.display = 'flex';
}

// Cancel edit profile
function cancelEditProfile() {
  document.getElementById('profileForm').style.display = 'none';
  document.getElementById('profileView').style.display = 'block';
  document.getElementById('editActions').style.display = 'none';
  document.getElementById('viewActions').style.display = 'flex';
}

// Save profile changes
function saveProfile() {
  const currentUser = localStorage.getItem('currentUser');
  const name = document.getElementById('editName').value.trim();
  const email = document.getElementById('editEmail').value.trim();
  const phone = document.getElementById('editPhone').value.trim();
  
  if (!name || !email || !phone) {
    alert('❌ All fields are required!');
    return;
  }
  
  if (!email.includes('@')) {
    alert('❌ Please enter a valid email!');
    return;
  }
  
  if (phone.length < 10) {
    alert('❌ Please enter a valid phone number!');
    return;
  }
  
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  users[currentUser].name = name;
  users[currentUser].email = email;
  users[currentUser].phone = phone;
  localStorage.setItem('users', JSON.stringify(users));
  
  // Update display
  document.getElementById('profileName').textContent = name;
  document.getElementById('profileEmail').textContent = email;
  document.getElementById('profilePhone').textContent = phone;
  
  // Switch back to view mode
  document.getElementById('profileForm').style.display = 'none';
  document.getElementById('profileView').style.display = 'block';
  document.getElementById('editActions').style.display = 'none';
  document.getElementById('viewActions').style.display = 'flex';
  
  alert('✅ Profile updated successfully!');
}

// Edit profile function (legacy - kept for compatibility)
function editProfile() {
  toggleEditProfile();
}

// Change password function
function changePassword() {
  const currentUser = localStorage.getItem('currentUser');
  const currentPass = prompt('Enter current password:');
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  
  if (users[currentUser].password !== currentPass) {
    alert('❌ Current password is incorrect');
    return;
  }
  
  const newPass = prompt('Enter new password:');
  if (newPass && newPass.length >= 6) {
    users[currentUser].password = newPass;
    localStorage.setItem('users', JSON.stringify(users));
    alert('✅ Password changed successfully!');
  } else {
    alert('❌ Password must be at least 6 characters');
  }
}

// Display user info in topbar and sidebar
function displayUserInfo() {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userName = users[currentUser].name || currentUser;
    
    // Display welcome message on dashboard
    const welcomeTitle = document.getElementById('welcomeTitle');
    if (welcomeTitle) {
      welcomeTitle.textContent = 'Welcome, ' + userName + '! 👋';
    }

    const headerUserName = document.getElementById('headerUserName');
    if (headerUserName) {
      headerUserName.textContent = userName;
    }
  }
}

// Auto-login if remembered
function checkRememberedUser() {
  const rememberedUser = localStorage.getItem('rememberUser');
  if (rememberedUser) {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      document.getElementById('loginUser').value = rememberedUser;
      document.getElementById('rememberMe').checked = true;
    }
  }
}

// GPA Calculator functions
let coursesList = [];

function addCourse() {
  const courseName = document.getElementById('courseName').value.trim();
  const credits = parseInt(document.getElementById('credits').value);
  const grade = parseFloat(document.getElementById('grade').value);
  
  if (!courseName || !credits || grade === '') {
    alert('Please fill all fields');
    return;
  }
  
  coursesList.push({ courseName, credits, grade });
  
  // Clear inputs
  document.getElementById('courseName').value = '';
  document.getElementById('credits').value = '';
  document.getElementById('grade').value = '';
  
  updateGPADisplay();
}

function removeCourse(index) {
  coursesList.splice(index, 1);
  updateGPADisplay();
}

function updateGPADisplay() {
  const coursesListDiv = document.getElementById('coursesList');
  
  if (coursesList.length === 0) {
    coursesListDiv.innerHTML = '<p class="empty-state">No courses added yet. Add courses above to calculate your GPA.</p>';
    document.getElementById('semesterGPA').textContent = '0.00';
    return;
  }
  
  let totalCredits = 0;
  let totalPoints = 0;
  let html = '<table class="data-table"><tr><th>Course</th><th>Credits</th><th>Grade</th><th>Action</th></tr>';
  
  coursesList.forEach((course, index) => {
    const gradePoints = course.grade * course.credits;
    totalCredits += course.credits;
    totalPoints += gradePoints;
    
    const gradeText = ['F', 'F', 'F', 'F', 'D', 'C', 'C+', 'B', 'B+', 'A', 'A+'][Math.round(course.grade)];
    
    html += `<tr>
      <td>${course.courseName}</td>
      <td>${course.credits}</td>
      <td>${gradeText} (${course.grade.toFixed(1)})</td>
      <td><button onclick="removeCourse(${index})" class="btn-danger">Remove</button></td>
    </tr>`;
  });
  
  html += '</table>';
  coursesListDiv.innerHTML = html;
  
  const gpa = totalPoints / totalCredits;
  document.getElementById('semesterGPA').textContent = gpa.toFixed(2);
}

// Navigation active state handler
function setActiveNav(page) {
  const navItems = document.querySelectorAll('.campus-nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('onclick');
    if (href && href.includes(`'${page}'`)) {
      item.classList.add('active');
    }
  });
}

// Add password strength checker to register form
document.addEventListener('DOMContentLoaded', function() {
  initializeDemoAccount();
  
  const regPassInput = document.getElementById('regPass');
  if (regPassInput) {
    regPassInput.addEventListener('input', function() {
      checkPasswordStrength(this.value);
    });
  }
  
  checkRememberedUser();
  displayUserInfo();
});

