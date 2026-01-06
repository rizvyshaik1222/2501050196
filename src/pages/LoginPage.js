import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate network delay
    setTimeout(() => {
      if (!username || !password) {
        setError('Please enter both username and password');
        setLoading(false);
        return;
      }

      const users = JSON.parse(localStorage.getItem('users') || '{}');

      if (users[username] && users[username].password === password) {
        localStorage.setItem('currentUser', username);
        if (rememberMe) {
          localStorage.setItem('rememberUser', username);
        }
        setLoading(false);
        navigate('/dashboard');
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <div className="auth-container">
          <div className="auth-header">
            <h1>🎓 Welcome Back</h1>
            <p>Access your student portal to manage academic activities</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <div className={`error-message show`}>{error}</div>}

            <div className="form-group">
              <label htmlFor="loginUser">Username</label>
              <input
                id="loginUser"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="loginPass">Password</label>
              <div className="password-input-wrapper">
                <input
                  id="loginPass"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
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

            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loading}
              />
              <label htmlFor="rememberMe">Keep me logged in</label>
            </div>

            <button 
              type="submit" 
              className={`btn-submit ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="auth-links">
            <p>
              Don't have an account? <Link to="/register">Create one now</Link>
            </p>
            <p>
              <button 
                type="button"
                onClick={() => alert('Password recovery feature coming soon!')}
                style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit' }}
              >
                Forgot your password?
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
