import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ClassesPage from './pages/ClassesPage';
import LoginPage from './pages/LoginPage';
import AboutUsPage from './pages/AboutUsPage';
import AdminPage from './pages/AdminPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import CalendarPage from './pages/CalendarPage';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/classes" element={<ClassesPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/profile" element={<ProfilePage />} />

            </Routes>
        </Router>
    );
}

export default App;





// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
