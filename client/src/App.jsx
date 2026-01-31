import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CodeDashboard from './pages/CodeDashboard'
import Auth from './pages/Auth'
import ProfileDashboard from './pages/ProfileDashboard'
import CodeDashboard from './pages/CodeDashboard'
import EditProfile from './pages/EditProfile'
import Profile from './pages/Profile'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileDashboard />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/codeDashboard" element={<CodeDashboard />} />
        <Route path="/profileDashboard" element={<ProfileDashboard />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  )
}

export default App
