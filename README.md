# Course Feedback Management System

A React web app where students register, enroll in courses, watch module videos and submit feedback. Admins track registered users, course enrolments and feedback reviews from a dashboard.

Built during my internship (2024).

**Live Demo:** [feedback-management-systems.netlify.app](https://feedback-management-systems.netlify.app/)

## Features

- Course catalogue with course detail pages
- Registration and login with live form validation
- Smart enrol flow:
  - Logged-in user clicks **Enroll Now** and goes straight to the course videos
  - New visitor gets a modal to **Register** or **Login** first
- Duplicate email check, wrong password and "not registered" messages
- Video learning module with Previous / Next navigation
- Emoji-based feedback form (Worst / Better / Best), 10 questions
- Admin dashboard: registered users, feedback reviews, course enrolment count
- Data saved in the browser with localStorage (stays after refresh)

## Tech Stack

| Area     | Tools                                                      |
| -------- | ---------------------------------------------------------- |
| Frontend | React (Create React App), JavaScript                       |
| Routing  | React Router v6                                            |
| State    | Redux (users, login, enrolments), Context API (feedback)   |
| UI       | React-Bootstrap, Bootstrap, Material UI, Font Awesome, CSS |

## Getting Started

```bash
git clone https://github.com/<your-username>/Course-Feedback-Management-System.git
cd Course-Feedback-Management-System
npm install
npm start
```

Runs at `http://localhost:3000`.

If a package is missing:

```bash
npm i react-router-dom react-redux redux react-bootstrap bootstrap @mui/material @mui/icons-material @emotion/react @emotion/styled @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-free react-modal
```

Production build:

```bash
npm run build
```

## Demo Login

| Role    | Email                             | Password          |
| ------- | --------------------------------- | ----------------- |
| Admin   | joel@admin.in                     | Admin1234         |
| Student | Register a new account in the app | your own password |

## Folder Structure

```
Course-Feedback-Management-System/
├── public/
│   └── _redirects              # Netlify: fixes 404 on page refresh
├── src/
│   ├── Image/                  # Logos, course and profile images
│   ├── Videos/                 # Module videos
│   │
│   ├── index.js                # Entry point (Redux + Context providers)
│   ├── App.js                  # All routes
│   │
│   ├── New.js                  # Home page: header, about, feedback cards, footer
│   ├── Header_Course.js        # Navbar + login modal
│   ├── Card.js                 # Course cards
│   ├── Course.js               # Course details + Enroll Now
│   ├── Register.js             # Registration form
│   ├── LoginForm.js            # Login form (used in enrol modal)
│   ├── Module.js               # Video learning module
│   ├── Student_Feedback.js     # Feedback form
│   ├── questions.js            # Feedback questions
│   │
│   ├── Admin.js                # Admin dashboard
│   ├── StaticFeedbackReviews.js# Feedback reviews table (admin)
│   │
│   ├── store.js                # Redux store (saved to localStorage)
│   ├── actions.js              # Redux actions
│   ├── userReducer.js          # Redux reducer
│   ├── FeedbackContext.js      # Context API for feedback
│   │
│   ├── User.css, Course.css, index.css, StudentFeedback.css
│   └── reportWebVitals.js, setupTests.js, App.test.js   # CRA defaults
└── package.json
```

## How It Works

1. Register: user is saved in Redux and localStorage
2. Login: email and password are checked against saved users
3. Enroll Now: logged-in goes to `/module`, otherwise Register/Login modal opens
4. After the module, the student submits feedback
5. Admin logs in and sees users, enrolments and feedback

## Known Limitations

- Frontend-only: no backend or database, data lives in localStorage
- Login is demo level (checked on the client, passwords not encrypted)
- Not fully optimised for mobile screens
- All course pages show the Python course content

## Future Improvements

- Backend with Node.js, Express and MongoDB
- Secure authentication (JWT + password hashing)
- Responsive design
- Separate content for each course
- Feedback charts in the admin dashboard

## Author

Joel Franklin J
