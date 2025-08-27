# Job-Bridge

A React.js application built with Vite that serves as a job discovery platform. Job-Bridge aggregates job listings from various platforms and provides personalized job recommendations based on user profiles created either through manual forms or resume scanning.

## Purpose

Job-Bridge is designed exclusively for job seekers. We collect job seeker information through two methods:
1. **Manual Form** - Users fill out a detailed profile form
2. **Resume Upload** - Users upload their resume for automatic information extraction

Based on this information, we search and aggregate relevant job opportunities from multiple job platforms across the web.

## Features

### For Job Seekers
- **Smart Job Discovery** - Scan multiple job platforms to find matching opportunities
- **Profile-Based Matching** - Get personalized recommendations based on your profile
- **Real-Time Updates** - Stay updated with latest job postings from various platforms
- **Manual Profile Creation** - Fill detailed forms to specify your preferences
- **Resume Scanning** - Upload resume for automatic profile creation
- **Cross-Platform Search** - Find jobs from multiple sources in one place

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
job-bridge/
├── src/
│   ├── App.jsx          # Main application with navigation between pages
│   ├── App.css          # Application styles including form and upload designs
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## Technologies Used

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern layout techniques
- **React Hooks** - State management

## Future Enhancements

- **Resume Parsing Engine** - Implement AI-powered resume analysis
- **Job Platform APIs** - Integration with multiple job platforms
- **Advanced Filtering** - Location, salary, experience level filters
- **Job Alerts** - Email/SMS notifications for new matches
- **Application Tracking** - Track application status across platforms
- **Profile Dashboard** - Manage and update profile information
- **Job Bookmarking** - Save interesting job opportunities
- **Analytics Dashboard** - Job market insights and trends

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
