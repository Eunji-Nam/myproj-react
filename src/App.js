import ReviewList from 'pages/reviews/ReviewList';
import PageProfile from 'pages/accounts/PageProfile';
import './App.css';
import { Routes, Route, Navigate, Router } from 'react-router-dom';
import PageLogin from 'pages/accounts/PageLogin';
import TopNav from 'compomemts/TopNav';
import Components from 'pages/examples/Components';
import PageReviewForm from 'pages/reviews/pageReviewForm';
import PagePost from 'pages/blog/PagePost';
import PagePostDetail from 'pages/blog/PagePostDetail';
import PagePostForm from 'pages/blog/PagePostForm';
import Clock from 'pages/examples/Clock';
import useWindowWidth from 'pages/examples/useWindowWidth';
import CssModule from 'pages/examples/CssModule';
import CssInJs from 'pages/examples/CssInJs';
import ContextApiSample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2';
import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleDetail from 'pages/news/PageNewsArticleDetail';
import PageNewsArticleForm from 'pages/news/PageNewsArticleForm';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/login/" element={<PageLogin />} />
          <Route path="/accounts/profile/" element={<PageProfile />} />
          <Route path="/blog/" element={<PagePost />} />
          <Route path="/blog/new/" element={<PagePostForm />} />
          <Route path="/blog/:postId/" element={<PagePostDetail />} />
          <Route path="/blog/:postId/edit/" element={<PagePostForm />} />
          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/new/" element={<PageNewsArticleForm />} />
          <Route path="/news/:articleId/" element={<PageNewsArticleDetail />} />
          <Route
            path="/news/:articleId/edit/"
            element={<PageNewsArticleForm />}
          />
          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<PageReviewForm />} />
          <Route path="reviews/:reviewId/edit/" element={<PageReviewForm />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/examples/css-module/" element={<CssModule />} />
          <Route path="/examples/css-in-js/" element={<CssInJs />} />
          <Route path="/examples/context-api/" element={<ContextApiSample />} />
          <Route
            path="/examples/context-api-2/"
            element={<ContextApiSample2 />}
          />
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
