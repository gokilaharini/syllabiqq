import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getStoredUser, setStoredUser } from '../utils/auth';
import '../styles/profile.css';

const initialLinks = {
  leetcode: '',
  hackerrank: '',
  codeforces: '',
  codechef: '',
  atcoder: '',
  geeksforgeeks: '',
  hackerearth: ''
};

const Profile = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const [links, setLinks] = useState(initialLinks);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const stored = getStoredUser();
    if (!stored?.id) {
      setLoading(false);
      return;
    }
    setAuthUser(stored);
    fetchLinks(stored.id);
  }, []);

  const fetchLinks = async (userId) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`http://localhost:5000/api/users/${userId}/links`);
      const data = response.data?.data;
      if (data) {
        const normalized = {
          leetcode: data.leetcode || '',
          hackerrank: data.hackerrank || '',
          codeforces: data.codeforces || '',
          codechef: data.codechef || '',
          atcoder: data.atcoder || '',
          geeksforgeeks: data.geeksforgeeks || '',
          hackerearth: data.hackerearth || ''
        };
        setLinks(normalized);
        setStoredUser({
          ...getStoredUser(),
          links: normalized
        });
      }
    } catch (err) {
      console.error('Error fetching links:', err);
      setError(err.response?.data?.message || 'Failed to load profile links');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLinks((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!authUser?.id) {
      setError('Please login to update your profile');
      return;
    }

    try {
      setSaving(true);
      setError('');
      setSuccess('');
      const response = await axios.put(`http://localhost:5000/api/users/${authUser.id}/links`, links);
      const updated = response.data?.data || links;
      setLinks({
        leetcode: updated.leetcode || '',
        hackerrank: updated.hackerrank || '',
        codeforces: updated.codeforces || '',
        codechef: updated.codechef || '',
        atcoder: updated.atcoder || '',
        geeksforgeeks: updated.geeksforgeeks || '',
        hackerearth: updated.hackerearth || ''
      });
      setStoredUser({
        ...getStoredUser(),
        links: updated
      });
      setSuccess('Profile links updated successfully');
    } catch (err) {
      console.error('Error updating links:', err);
      setError(err.response?.data?.message || 'Failed to update profile links');
    } finally {
      setSaving(false);
    }
  };

  if (!authUser && !loading) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Profile</h2>
          <p>Please login to manage your coding platform links.</p>
          <button type="button" onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Profile Links</h2>
        <p>Update your coding platform handles anytime.</p>

        {loading ? (
          <div className="profile-status">Loading profile...</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>LeetCode</label>
              <input
                type="text"
                name="leetcode"
                value={links.leetcode}
                onChange={handleChange}
                placeholder="leetcode username"
              />
            </div>
            <div className="input-group">
              <label>Codeforces</label>
              <input
                type="text"
                name="codeforces"
                value={links.codeforces}
                onChange={handleChange}
                placeholder="codeforces handle"
              />
            </div>
            <div className="input-group">
              <label>HackerRank</label>
              <input
                type="text"
                name="hackerrank"
                value={links.hackerrank}
                onChange={handleChange}
                placeholder="hackerrank username"
              />
            </div>
            <div className="input-group">
              <label>CodeChef</label>
              <input
                type="text"
                name="codechef"
                value={links.codechef}
                onChange={handleChange}
                placeholder="codechef username"
              />
            </div>
            <div className="input-group">
              <label>AtCoder</label>
              <input
                type="text"
                name="atcoder"
                value={links.atcoder}
                onChange={handleChange}
                placeholder="atcoder username"
              />
            </div>
            <div className="input-group">
              <label>GeeksforGeeks</label>
              <input
                type="text"
                name="geeksforgeeks"
                value={links.geeksforgeeks}
                onChange={handleChange}
                placeholder="geeksforgeeks profile"
              />
            </div>
            <div className="input-group">
              <label>HackerEarth</label>
              <input
                type="text"
                name="hackerearth"
                value={links.hackerearth}
                onChange={handleChange}
                placeholder="hackerearth username"
              />
            </div>

            {error && <div className="profile-status error">{error}</div>}
            {success && <div className="profile-status success">{success}</div>}

            <button type="submit" disabled={saving}>
              {saving ? 'Saving...' : 'Save Links'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
