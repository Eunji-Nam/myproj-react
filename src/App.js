import ReviewList from 'pages/reviews/ReviewList';
import Profile from 'pages/accounts/Profile';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from 'pages/accounts/Login';
import TopNav from 'compomemts/TopNav';

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/accounts/reviews/" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
