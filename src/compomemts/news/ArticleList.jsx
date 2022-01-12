import { useApiAxios } from 'api/base';
import DebugStates from 'compomemts/DebugStates';
import { useEffect } from 'react';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] = useApiAxios(
    '/news/api/articles/',
  );

  useEffect(() => {
    refetch();
  }, []);

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
