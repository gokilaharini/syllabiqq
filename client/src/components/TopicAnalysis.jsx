import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import '../styles/topicanalysis.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ffc658', '#ff7c7c'];

function TopicAnalysis({ data }) {
  const { topicAnalysis, summary } = data;

  // Prepare data for bar chart (top 10 topics)
  const barChartData = summary.topSkills.slice(0, 10).map(topic => ({
    topic: topic.length > 15 ? topic.substring(0, 15) + '...' : topic,
    fullTopic: topic,
    count: topicAnalysis[topic]
  }));

  // Prepare data for pie chart (top 8 topics)
  const pieChartData = summary.topSkills.slice(0, 8).map(topic => ({
    name: topic,
    value: topicAnalysis[topic]
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{payload[0].payload.fullTopic || payload[0].name}</p>
          <p className="tooltip-value">Problems: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="topic-analysis-section">
      <div className="card">
        <h2>🎓 Your Strongest Topics</h2>
        <p className="section-subtitle">Based on combined analysis from both platforms</p>

        <div className="charts-container">
          {/* Bar Chart */}
          <div className="chart-wrapper">
            <h3>Top 10 Topics by Problem Count</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis 
                  dataKey="topic" 
                  angle={-45} 
                  textAnchor="end" 
                  height={100}
                  stroke="#fff"
                  tick={{ fill: '#fff' }}
                />
                <YAxis stroke="#fff" tick={{ fill: '#fff' }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#8884d8" radius={[8, 8, 0, 0]}>
                  {barChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="chart-wrapper">
            <h3>Topic Distribution</h3>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Topic Grid */}
        <div className="topics-grid">
          {summary.topSkills.slice(0, 15).map((topic, index) => (
            <div key={topic} className="topic-badge" style={{ animationDelay: `${index * 0.05}s` }}>
              <span className="topic-name">{topic}</span>
              <span className="topic-count">{topicAnalysis[topic]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicAnalysis;
