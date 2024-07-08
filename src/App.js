import React from 'react';
import { BrowserRouter as Router,
   Route, Routes,
    Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import UserDetail from './components/UserDetails';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<UserDetail />} />
    </Routes>
  </Router>
);

export default App;