import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const checkPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^a-zA-Z\d]/.test(pwd)) strength++;

    const strengths = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
    const colors = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#10b981'];
    
    if (pwd.length > 0) {
      setPasswordStrength({ text: strengths[strength], color: colors[strength] });
    } else {
      setPasswordStrength('');
    }
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    checkPasswordStrength(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (username.length < 3) {
        setError('Username must be at least 3 characters');
        setLoading(false);
        return;
      }

      if (!isValidEmail(email)) {
        setError('Please enter a valid email address');
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        setLoading(false);
        return;
      }

      if (password !== confirmPass) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      if (!agreeTerms) {
        setError('Please agree to the Terms & Conditions');
        setLoading(false);
        return;
      }

      const users = JSON.parse(localStorage.getItem('users') || '{}');
      if (users[username]) {
        setError('Username already exists');
        setLoading(false);
        return;
      }

      users[username] = { password, email, name: username };
      localStorage.setItem('users', JSON.stringify(users));

      setLoading(false);
      alert('Account created successfully! Redirecting to login...');
      navigate('/login');
    }, 600);
  };

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <div className="auth-container">
          <div className="auth-header">
            <h1>🚀 Create Account</h1>
            <p>Join our student community and unlock your potential</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <div className={`error-message show`}>{error}</div>}

            <div className="form-group">
              <label htmlFor="regUser">Username</label>
              <input
                id="regUser"
                type="text"
                placeholder="Choose a unique username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength="3"
                required
                autoComplete="username"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="regEmail">Email Address</label>
              <input
                id="regEmail"
                type="email"
                placeholder="your.email@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="regPass">Password</label>
              <div className="password-input-wrapper">
                <input
                  id="regPass"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={handlePasswordChange}
                  minLength="6"
                  required
                  autoComplete="new-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  tabIndex="-1"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {passwordStrength && (
              <div 
                className="password-strength"
                style={{ borderLeftColor: passwordStrength.color }}
              >
                Strength: {passwordStrength.text}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="regConfirm">Confirm Password</label>
              <div className="password-input-wrapper">
                <input
                  id="regConfirm"
                  type={showConfirmPass ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  minLength="6"
                  required
                  autoComplete="new-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  disabled={loading}
                  tabIndex="-1"
                >
                  {showConfirmPass ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="terms-checkbox">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                disabled={loading}
              />
              <label htmlFor="agreeTerms">
                I agree to the{' '}
                <button
                  type="button"
                  onClick={() => alert('Terms & Conditions:\n\n1. You agree to use this platform responsibly\n2. All student data is confidential\n3. Academic integrity must be maintained\n4. Respect all university policies')}
                  style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Terms & Conditions
                </button>
              </label>
            </div>

            <button 
              type="submit" 
              className={`btn-submit ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="auth-links">
            <p>
              Already registered? <Link to="/login">Sign in to your account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
