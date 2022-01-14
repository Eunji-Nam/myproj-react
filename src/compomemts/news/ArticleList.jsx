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
    <div className="my-5">
      {loading && 'Loading...'}
      {error && 'error 발생!'}
      {articleList && (
        <div className="flex flex-wrap">
          {articleList.map((article) => (
            <div
              key={article.id}
              className="w-full md:w-1/2 xl:w-1/3 px-4 transition-transform duration-300 hover:-translate-y-5"
            >
              <ArticleSummary article={article} />
            </div>
          ))}
        </div>
      )}
      <DebugStates data={articleList} loading={loading} error={error} />
    </div>
  );
}

export default ArticleList;
