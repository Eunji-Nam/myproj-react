import usdAxios from 'axios-hooks';
import DebugStates from 'compomemts/DebugStates';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] = usdAxios(
    'http://localhost:8000/news/api/articles/',
  );

  return (
    <div>
      <h2>뉴스 기사 목록</h2>
      {loading && 'Loading...'}
      {error && 'error 발생!'}
      {articleList &&
        articleList.map((article) => <ArticleSummary article={article} />)}
      <DebugStates data={articleList} loading={loading} error={error} />
    </div>
  );
}

export default ArticleList;
