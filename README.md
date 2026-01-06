# Student Portal - React Application

A modern, fully functional Student Portal built with React and React Router. This application provides students with a comprehensive dashboard to manage their academic activities.

## Features

- **Authentication System**
  - Login with demo account (username: `student`, password: `123456`)
  - User registration with validation
  - Password strength indicator
  - Remember me functionality
  - Persistent session storage

- **Dashboard Features**
  - Dashboard overview with key statistics
  - Attendance tracking
  - Marks and grades management
  - Timetable/Schedule
  - Events calendar
  - Assignment management
  - Student achievements
  - Notices and announcements
  - Faculty directory
  - User profile management
  - GPA calculator

- **Design**
  - Modern, responsive UI
  - Beautiful gradient backgrounds
  - Mobile-friendly layout
  - Smooth animations and transitions
  - Dark theme sidebar with orange accent

## Project Structure

```
src/
├── components/
│   ├── ProtectedRoute.js      # Route protection for authenticated users
│   ├── Sidebar.js              # Navigation sidebar
│   └── Header.js               # Page header with user info
├── pages/
│   ├── LoginPage.js            # Login page
│   ├── RegisterPage.js         # Registration page
│   ├── Dashboard.js            # Main dashboard layout
│   └── dashboard/
│       ├── Home.js             # Dashboard home
│       ├── Attendance.js       # Attendance records
│       ├── Grades.js           # Grades/Marks
│       ├── Courses.js          # Timetable
│       ├── Events.js           # Events
│       ├── Assignments.js      # Assignments
│       ├── Achievements.js     # Achievements
│       ├── Notices.js          # Notices
│       ├── Faculty.js          # Faculty directory
│       ├── Profile.js          # User profile
│       └── GPA.js              # GPA calculator
├── styles/
│   ├── Auth.css                # Authentication page styles
│   ├── Dashboard.css           # Dashboard styles
│   ├── Header.css              # Header styles
│   └── Sidebar.css             # Sidebar styles
├── App.js                      # Main application component
├── App.css                     # Global app styles
└── index.js                    # React entry point
```

## Installation

1. Navigate to the project directory:
```bash
cd "f:\M.TECH SEM-1\PROJECT"
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000` in your default browser.

## Login Credentials

**Demo Account:**
- Username: `student`
- Password: `123456`

## Building for Production

Create an optimized production build:
```bash
npm build
```

## Technologies Used

- **React 18.2.0** - UI library
- **React Router DOM 6.14.0** - Client-side routing
- **React Scripts 5.0.1** - Build tooling
- **CSS3** - Styling with CSS variables and Grid/Flexbox

## Features Breakdown

### Authentication
- Register new accounts with validation
- Login with existing accounts
- Password visibility toggle
- Password strength indicator
- Remember me functionality
- Session management with localStorage

### Dashboard Navigation
- Sidebar navigation with 11 menu items
- Active state indication
- Responsive mobile menu
- User profile access
- Logout functionality

### Pages

1. **Home** - Quick statistics overview
2. **Attendance** - Course-wise attendance tracking
3. **Marks** - Grade and performance display
4. **Timetable** - Weekly class schedule
5. **Events** - Campus events calendar
6. **Assignments** - Assignment tracking with due dates
7. **Achievements** - Student accomplishments
8. **Notices** - Announcements and notifications
9. **Faculty** - Faculty contact directory
10. **Profile** - Editable user profile
11. **GPA Calculator** - Grade and GPA computation

## Future Enhancements

- Backend API integration
- Real database for user data
- Advanced filtering and search
- File uploads for assignments
- Notifications system
- Calendar integration
- Export grades to PDF
- Mobile app version

## License

This project is created for educational purposes.
