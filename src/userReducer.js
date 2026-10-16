import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  ENROLL_COURSE,
} from "./actions";

const initialState = { users: [], currentUser: null };

// supports old data that had a single "course" field
const getCourses = (u) =>
  u.courses || (u.course && u.course !== "Not selected" ? [u.course] : []);

const addCourse = (u, course) => {
  const courses = getCourses(u);
  return {
    ...u,
    courses: courses.includes(course) ? courses : [...courses, course],
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, users: [...state.users, action.payload] };
    case LOGIN_USER:
      return { ...state, currentUser: action.payload };
    case LOGOUT_USER:
      return { ...state, currentUser: null };
    case ENROLL_COURSE: {
      const { email, course } = action.payload;
      return {
        ...state,
        users: state.users.map((u) =>
          u.email === email ? addCourse(u, course) : u,
        ),
        currentUser:
          state.currentUser && state.currentUser.email === email
            ? addCourse(state.currentUser, course)
            : state.currentUser,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
