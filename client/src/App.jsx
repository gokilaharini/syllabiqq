import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import './App.css'

function Home() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <p>
        Go to the <Link to="/login">Login</Link> page, update your <Link to="/profile">Profile</Link>, or view the <Link to="/dashboard">Dashboard</Link>.
      </p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
