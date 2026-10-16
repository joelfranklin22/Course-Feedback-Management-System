# Fluid Fusion – Course Feedback Management System

A React web app where students register for courses, watch module videos and submit feedback, while the admin tracks registered users, course enrolments and feedback reviews from a dashboard.

Built during my internship (2024).

**Live Demo:** [Add your Netlify link here]

## Features

- Course catalogue with course detail pages
- Registration and login with form validation
- Video-based learning module with Previous / Next navigation
- Emoji-based feedback form (Worst / Better / Best) with 10 questions
- Admin dashboard with:
  - Registered users
  - Feedback reviews (view each student's answers)
  - Course enrolment count
- Data saved in the browser using localStorage

## Tech Stack

| Area             | Tools                                           |
| ---------------- | ----------------------------------------------- |
| Frontend         | React, JavaScript                               |
| Routing          | React Router                                    |
| State management | Redux, Context API                              |
| UI               | React-Bootstrap, Material UI, Font Awesome, CSS |
| Deployment       | Netlify                                         |

## Demo Login

| Role    | Email                               | Password            |
| ------- | ----------------------------------- | ------------------- |
| Admin   | joel@admin.in                       | Admin1234           |
| Student | Register a new account from the app | (your own password) |

## Project Structure

```
src/
├── App.js                      # Routes
├── index.js                    # Entry point (Redux + Context providers)
├── New.js                      # Home page sections (header, feedback cards, footer)
├── Card.js                     # Course cards
├── Course.js                   # Course details page
├── Register.js                 # Registration form
├── Header_Course.js            # Navbar + login modal
├── Module.js                   # Video learning module
├── Student_Feedback.js         # Feedback form
├── Admin.js                    # Admin dashboard
├── StaticFeedbackReviews.js    # Feedback reviews table (admin)
├── FeedbackContext.js          # Context API for feedback
├── store.js, actions.js, userReducer.js   # Redux setup
└── questions.js                # Feedback questions
```

## Known Limitations

- Frontend-only project: data is stored in localStorage, not in a database
- Login is a demo (checked on the client side, not secure for real use)
- Not fully optimised for mobile screens

## Future Improvements

- Backend with Node.js, Express and MongoDB
- Secure authentication (JWT + password hashing)
- Responsive design for mobile
- Separate content for each course
- Charts for feedback analytics in the admin dashboard

## Author

**Joel**
