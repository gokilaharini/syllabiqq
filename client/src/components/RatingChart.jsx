import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/ratingchart.css';

function RatingChart({ data }) {
  const { contestData } = data;

  // Prepare LeetCode rating data
  const leetcodeData = contestData.leetcode?.recentContests?.map((contest, index) => ({
    contest: index + 1,
    rating: contest.newRating || contest.rating || 0,
    name: contest.contestName
  })) || [];

  // Prepare Codeforces rating data
  const codeforcesData = contestData.codeforces?.recentContests?.map((contest, index) => ({
    contest: index + 1,
    rating: contest.newRating || 0,
    name: contest.contestName
  })) || [];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{payload[0].payload.name}</p>
          <p className="tooltip-value">Rating: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rating-charts-section">
      <h2>📈 Contest Rating History</h2>
      <p className="section-subtitle">Track your competitive programming journey</p>

      <div className="charts-grid">
        {/* LeetCode Rating Chart */}
        {leetcodeData.length > 0 && (
          <div className="card chart-card">
            <h3>💻 LeetCode Contest Rating</h3>
            <div className="contest-stats">
              <div className="stat-item">
                <span className="stat-label">Contests Attended</span>
                <span className="stat-value">{contestData.leetcode.attendedContests || 0}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Recent Contests</span>
                <span className="stat-value">{leetcodeData.length}</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={leetcodeData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis 
                  dataKey="contest" 
                  label={{ value: 'Contest Number', position: 'insideBottom', offset: -5, fill: '#fff' }}
                  stroke="#fff"
                  tick={{ fill: '#fff' }}
                />
                <YAxis 
                  label={{ value: 'Rating', angle: -90, position: 'insideLeft', fill: '#fff' }}
                  stroke="#fff"
                  tick={{ fill: '#fff' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="rating" 
                  stroke="#ffa116" 
                  strokeWidth={3}
                  dot={{ fill: '#ffa116', r: 6 }}
                  activeDot={{ r: 8 }}
                  name="LeetCode Rating"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Codeforces Rating Chart */}
        {codeforcesData.length > 0 && (
          <div className="card chart-card">
            <h3>🏆 Codeforces Contest Rating</h3>
            <div className="contest-stats">
              <div className="stat-item">
                <span className="stat-label">Contests Attended</span>
                <span className="stat-value">{contestData.codeforces.attendedContests || 0}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Recent Contests</span>
                <span className="stat-value">{codeforcesData.length}</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={codeforcesData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis 
                  dataKey="contest" 
                  label={{ value: 'Contest Number', position: 'insideBottom', offset: -5, fill: '#fff' }}
                  stroke="#fff"
                  tick={{ fill: '#fff' }}
                />
                <YAxis 
                  label={{ value: 'Rating', angle: -90, position: 'insideLeft', fill: '#fff' }}
                  stroke="#fff"
                  tick={{ fill: '#fff' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="rating" 
                  stroke="#1f8acb" 
                  strokeWidth={3}
                  dot={{ fill: '#1f8acb', r: 6 }}
                  activeDot={{ r: 8 }}
                  name="Codeforces Rating"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Recent Contests List */}
      {(contestData.leetcode?.recentContests?.length > 0 || contestData.codeforces?.recentContests?.length > 0) && (
        <div className="recent-contests">
          <h3>Recent Contest Performance</h3>
          <div className="contests-list-grid">
            {contestData.leetcode?.recentContests?.length > 0 && (
              <div className="contests-list">
                <h4>💻 LeetCode</h4>
                {contestData.leetcode.recentContests.slice(0, 5).map((contest, index) => (
                  <div key={index} className="contest-item leetcode-item">
                    <div className="contest-name">{contest.contestName}</div>
                    <div className="contest-details">
                      <span className="rank">Rank: {contest.rank || 'N/A'}</span>
                      <span className={`rating-change ${contest.ratingChange >= 0 ? 'positive' : 'negative'}`}>
                        {contest.ratingChange >= 0 ? '+' : ''}{contest.ratingChange || 0}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {contestData.codeforces?.recentContests?.length > 0 && (
              <div className="contests-list">
                <h4>🏆 Codeforces</h4>
                {contestData.codeforces.recentContests.slice(0, 5).map((contest, index) => (
                  <div key={index} className="contest-item codeforces-item">
                    <div className="contest-name">{contest.contestName}</div>
                    <div className="contest-details">
                      <span className="rank">Rank: {contest.rank}</span>
                      <span className={`rating-change ${(contest.newRating - contest.oldRating) >= 0 ? 'positive' : 'negative'}`}>
                        {(contest.newRating - contest.oldRating) >= 0 ? '+' : ''}
                        {contest.newRating - contest.oldRating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RatingChart;
