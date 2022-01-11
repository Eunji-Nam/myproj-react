import ReviewList from 'pages/reviews/ReviewList';
import Profile from 'pages/accounts/Profile';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'pages/accounts/Login';
import TopNav from 'compomemts/TopNav';
import Components from 'pages/examples/Components';
import PageReviewForm from 'pages/reviews/pageReviewForm';
import PagePost from 'pages/blog/PagePost';
import PagePostDetail from 'pages/blog/PagePostDetail';
import PagePostForm from 'pages/blog/PagePostForm';
import Clock from 'pages/examples/Clock';
import useWindowWidth from 'pages/examples/useWindowWidth';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/reviews/" />} />
          <Route path="/accounts/login/" element={<Login />} />
          <Route path="/accounts/profile/" element={<Profile />} />
          <Route path="/blog/" element={<PagePost />} />
          <Route path="/blog/new/" element={<PagePostForm />} />
          <Route path="/blog/:postId/" element={<PagePostDetail />} />
          <Route path="/blog/:postId/edit/" element={<PagePostForm />} />
          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<PageReviewForm />} />
          <Route path="reviews/:reviewId/edit/" element={<PageReviewForm />} />
          <Route path="/examples/components/" element={<Components />} />
        </Routes>
        <hr />
        윈도우 가로크기 : {windowWidth}px
      </div>
      <Routes>
        <Route path="/examples/clock/" element={<Clock />} />
      </Routes>
    </>
  );
}

export default App;
