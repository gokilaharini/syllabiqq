import '../styles/statsoverview.css';

function StatsOverview({ data }) {
  const { combinedMetrics, profiles } = data;

  return (
    <div className="stats-overview">
      <div className="stat-card total-card">
        <div className="stat-icon">🎯</div>
        <div className="stat-content">
          <h3>Total Problems Solved</h3>
          <div className="stat-number">{combinedMetrics.combinedTotal}</div>
          <div className="stat-breakdown">
            <span>LeetCode: {combinedMetrics.totalSolvedLeetCode}</span>
            <span>•</span>
            <span>Codeforces: {combinedMetrics.totalSolvedCodeforces}</span>
          </div>
        </div>
      </div>

      {profiles.leetcode && (
        <div className="stat-card leetcode-card">
          <div className="stat-icon">💻</div>
          <div className="stat-content">
            <h3>LeetCode</h3>
            <div className="stat-number">{profiles.leetcode.totalSolved}</div>
            <div className="stat-details">
              <div className="detail-item">
                <span className="detail-label">Easy</span>
                <span className="detail-value">{profiles.leetcode.difficultyBreakdown.easy}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Medium</span>
                <span className="detail-value">{profiles.leetcode.difficultyBreakdown.medium}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Hard</span>
                <span className="detail-value">{profiles.leetcode.difficultyBreakdown.hard}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {profiles.codeforces && (
        <div className="stat-card codeforces-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <h3>Codeforces</h3>
            <div className="stat-number">{profiles.codeforces.totalSolved}</div>
            <div className="stat-details">
              <div className="detail-item">
                <span className="detail-label">Rating</span>
                <span className="detail-value rating-badge">
                  {profiles.codeforces.profile.rating || 'Unrated'}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Max Rating</span>
                <span className="detail-value">{profiles.codeforces.profile.maxRating || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Rank</span>
                <span className="detail-value">{profiles.codeforces.profile.rank}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StatsOverview;
