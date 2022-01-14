import { Link } from 'react-router-dom';

function ArticleSummary({ article }) {
  return (
    <div>
      <img
        src={article.photo}
        alt={article.title}
        className="w-5 h-5 mr-1 rounded inline"
      />
      <Link to={`/news/${article.id}/`}>{article.title}</Link>
    </div>
  );
}

export default ArticleSummary;
