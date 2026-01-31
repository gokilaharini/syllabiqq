# Competitive Programming Dashboard

## Overview

An interactive, visually stunning dashboard that displays comprehensive competitive programming analytics by combining data from LeetCode and Codeforces platforms.

## Features

### 📊 **Stats Overview**
- **Total Problems Solved**: Aggregate count across all platforms
- **Platform-wise Breakdown**: Individual statistics for LeetCode and Codeforces
- **Difficulty Analysis**: Visual breakdown of Easy/Medium/Hard problems (LeetCode)
- **Rating Information**: Current rating, max rating, and rank (Codeforces)

### 🌐 **Platform Distribution**
- Interactive **Pie Chart** showing problem distribution across platforms
- Percentage breakdown with visual indicators
- Platform-specific icons and color coding

### 📈 **Contest Rating History**
- **Line Charts** displaying rating progression over time
- Separate charts for LeetCode and Codeforces contests
- Recent contest performance with rank and rating changes
- Visual indicators for positive/negative rating changes

### 🎓 **Topic Analysis**
- **Bar Chart**: Top 10 topics by problem count
- **Pie Chart**: Topic distribution visualization
- **Topic Badges**: Grid view of top 15 skills with counts
- Hover effects and animations for better UX

### 📅 **Activity Calendar**
- GitHub-style contribution calendar
- **Color-coded intensity** based on daily submission count
- Last 365 days of activity
- Statistics:
  - Total active days
  - Total submissions
  - Max daily submissions
  - Average daily submissions
- Recent 7-day activity with bar graphs

## Tech Stack

### Frontend
- **React 19** with functional components and hooks
- **React Router v6** for navigation
- **Recharts** for beautiful, responsive charts
- **Axios** for API calls
- **CSS3** with modern animations and gradients

### Backend Integration
- Connects to `/api/platform/combined` endpoint
- Fetches unified analytics from LeetCode and Codeforces
- Handles loading states and error scenarios gracefully

## Components

### 1. **Dashboard.jsx** (Main Container)
- Fetches combined analytics data
- Manages loading and error states
- Orchestrates all sub-components
- Displays header with user badges

### 2. **StatsOverview.jsx**
- Displays total and platform-specific problem counts
- Shows difficulty breakdown for LeetCode
- Displays rating and rank for Codeforces
- Animated stat cards with icons

### 3. **PlatformBreakdown.jsx**
- Pie chart showing platform distribution
- Side-by-side platform statistics
- Percentage calculations
- Custom tooltips

### 4. **RatingChart.jsx**
- Line charts for contest rating history
- Separate visualizations for each platform
- Contest performance list with rank and rating changes
- Color-coded positive/negative changes

### 5. **TopicAnalysis.jsx**
- Bar chart of top 10 topics
- Pie chart of topic distribution
- Grid of topic badges with counts
- Hover animations and effects

### 6. **ActivityCalendar.jsx**
- GitHub-style contribution calendar
- Color intensity based on submission count
- Calendar statistics
- Recent 7-day activity bars
- Interactive hover tooltips

## Design Features

### 🎨 **Visual Design**
- **Dark Theme**: Gradient background (purple to blue)
- **Glassmorphism**: Frosted glass effect on cards
- **Neon Accents**: Cyan (#0ff) highlights throughout
- **Smooth Animations**: Fade-in, slide-up, hover effects
- **Responsive Layout**: Works on desktop, tablet, and mobile

### 🌈 **Color Scheme**
- **Background**: Dark gradient (purple/blue tones)
- **Primary Accent**: Cyan (#0ff)
- **LeetCode**: Orange (#ffa116)
- **Codeforces**: Blue (#1f8acb)
- **Success**: Green gradients
- **Warning**: Orange gradients
- **Error**: Red gradients

### ✨ **Animations**
- **Fade In Up**: Cards and sections
- **Slide In**: Topic badges with staggered delays
- **Progress Fill**: Animated progress bars
- **Count Up**: Animated number transitions
- **Hover Effects**: Scale, translate, glow effects

## File Structure

```
client/src/
├── pages/
│   └── Dashboard.jsx          # Main dashboard page
├── components/
│   ├── StatsOverview.jsx      # Overall statistics
│   ├── PlatformBreakdown.jsx  # Platform pie chart
│   ├── RatingChart.jsx        # Contest rating history
│   ├── TopicAnalysis.jsx      # Topic charts and badges
│   └── ActivityCalendar.jsx   # Activity heatmap
├── styles/
│   ├── dashboard.css          # Main dashboard styles
│   ├── statsoverview.css      # Stats card styles
│   ├── platformbreakdown.css  # Platform chart styles
│   ├── ratingchart.css        # Rating chart styles
│   ├── topicanalysis.css      # Topic analysis styles
│   └── activitycalendar.css   # Calendar styles
└── App.jsx                    # Router configuration
```

## Usage

### 1. Start Backend Server
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

### 2. Start Frontend Development Server
```bash
cd client
npm run dev
# Client runs on http://localhost:5174
```

### 3. Access Dashboard
Navigate to: `http://localhost:5174/dashboard`

## API Integration

### Endpoint Used
```
GET http://localhost:5000/api/platform/combined?leetcode={username}&codeforces={handle}
```

### Response Data Structure
```javascript
{
  profiles: {
    leetcode: { username, totalSolved, difficultyBreakdown },
    codeforces: { handle, profile, totalSolved }
  },
  combinedMetrics: {
    totalSolvedLeetCode,
    totalSolvedCodeforces,
    combinedTotal
  },
  activityCalendar: { "YYYY-MM-DD": count },
  topicAnalysis: { topic: count },
  contestData: {
    leetcode: { attendedContests, recentContests[] },
    codeforces: { attendedContests, recentContests[] }
  },
  summary: {
    platformsCovered,
    lastUpdated,
    topSkills: []
  }
}
```

## Customization

### Update User Handles
Edit `Dashboard.jsx`:
```javascript
const userHandles = {
  leetcode: 'your_leetcode_username',
  codeforces: 'your_codeforces_handle'
};
```

### Modify Colors
Edit respective CSS files to change color schemes:
- Primary accent: Search for `#0ff` (cyan)
- LeetCode: Search for `#ffa116` (orange)
- Codeforces: Search for `#1f8acb` (blue)

### Adjust Chart Sizes
In component files, modify `ResponsiveContainer` height:
```javascript
<ResponsiveContainer width="100%" height={350}>
```

## Responsive Breakpoints

- **Desktop**: > 1024px (full layout)
- **Tablet**: 768px - 1024px (adjusted grid)
- **Mobile**: < 768px (single column)

## Performance Optimizations

1. **Lazy Loading**: Components load as needed
2. **Memoization**: React hooks for expensive calculations
3. **CSS Animations**: Hardware-accelerated transforms
4. **Efficient Re-renders**: Proper state management
5. **Chart Optimization**: Responsive containers, limited data points

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

1. **User Authentication**: Login integration
2. **Database Integration**: Store user handles in MongoDB
3. **Real-time Updates**: WebSocket for live data
4. **Export Features**: Download reports as PDF
5. **Comparison Mode**: Compare with other users
6. **Historical Trends**: Long-term progress tracking
7. **Mobile App**: React Native version
8. **Dark/Light Theme Toggle**: User preference
9. **Customizable Dashboard**: Drag-and-drop widgets
10. **Social Features**: Share achievements

## Troubleshooting

### Charts Not Displaying
- Ensure `recharts` is installed: `npm install recharts`
- Check browser console for errors
- Verify API data structure matches expected format

### API Connection Issues
- Ensure backend server is running on port 5000
- Check CORS configuration
- Verify user handles are correct

### Styling Issues
- Clear browser cache
- Check that all CSS files are imported
- Verify CSS file paths

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

This project is part of the Codeothon platform.

---

**Built with ❤️ for competitive programmers**
