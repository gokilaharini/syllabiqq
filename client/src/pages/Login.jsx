import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setStoredUser } from '../utils/auth';
import '../styles/login.css';

const initialRegister = {
  name: '',
  email: '',
  password: '',
  rollNumber: '',
  leetcode: '',
  codeforces: '',
  hackerrank: '',
  codechef: '',
  atcoder: '',
  geeksforgeeks: '',
  hackerearth: ''
};

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState(initialRegister);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError('');
      const response = await axios.post('http://localhost:5000/api/auth/login', loginForm);
      const data = response.data?.data;
      if (data?.user) {
        setStoredUser({
          ...data.user,
          links: data.links || {}
        });
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError('');
      const response = await axios.post('http://localhost:5000/api/auth/register', registerForm);
      const data = response.data?.data;
      if (data?.user) {
        setStoredUser({
          ...data.user,
          links: data.links || {}
        });
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Register error:', err);
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="auth-toggle">
          <button
            type="button"
            className={mode === 'login' ? 'active' : ''}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            type="button"
            className={mode === 'register' ? 'active' : ''}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>

        {mode === 'login' ? (
          <>
            <h2>Welcome Back 👋</h2>
            <p>Please login to continue</p>
            <form onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>

              {error && <div className="auth-error">{error}</div>}

              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2>Create Account ✨</h2>
            <p>Add your platform handles during signup</p>
            <form onSubmit={handleRegisterSubmit}>
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={registerForm.name}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Minimum 6 characters"
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Roll Number</label>
                <input
                  type="text"
                  name="rollNumber"
                  placeholder="Your roll number"
                  value={registerForm.rollNumber}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>LeetCode</label>
                <input
                  type="text"
                  name="leetcode"
                  placeholder="leetcode username"
                  value={registerForm.leetcode}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="input-group">
                <label>Codeforces</label>
                <input
                  type="text"
                  name="codeforces"
                  placeholder="codeforces handle"
                  value={registerForm.codeforces}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="input-group">
                <label>HackerRank</label>
                <input
                  type="text"
                  name="hackerrank"
                  placeholder="hackerrank username"
                  value={registerForm.hackerrank}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="input-group">
                <label>CodeChef</label>
                <input
                  type="text"
                  name="codechef"
                  placeholder="codechef username"
                  value={registerForm.codechef}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="input-group">
                <label>AtCoder</label>
                <input
                  type="text"
                  name="atcoder"
                  placeholder="atcoder username"
                  value={registerForm.atcoder}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="input-group">
                <label>GeeksforGeeks</label>
                <input
                  type="text"
                  name="geeksforgeeks"
                  placeholder="geeksforgeeks profile"
                  value={registerForm.geeksforgeeks}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="input-group">
                <label>HackerEarth</label>
                <input
                  type="text"
                  name="hackerearth"
                  placeholder="hackerearth username"
                  value={registerForm.hackerearth}
                  onChange={handleRegisterChange}
                />
              </div>

              {error && <div className="auth-error">{error}</div>}

              <button type="submit" disabled={loading}>
                {loading ? 'Creating account...' : 'Register'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
