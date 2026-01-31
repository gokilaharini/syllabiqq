import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    switch(item) {
      case 'home':
        navigate('/codedashboard');
        break;
      case 'profile':
        navigate('/profiledashboard');
        break;
      case 'notes':
        navigate('/notes');
        break;
      case 'marks':
        // Not implemented yet
        break;
      default:
        break;
    }
  };

  return (
    <nav className="navbar">
      <span onClick={() => handleNavClick('home')}>home</span>
      <span onClick={() => handleNavClick('profile')}>profile</span>
      <span onClick={() => handleNavClick('marks')}>marks</span>
      <span onClick={() => handleNavClick('notes')}>notes</span>
    </nav>
  );
}