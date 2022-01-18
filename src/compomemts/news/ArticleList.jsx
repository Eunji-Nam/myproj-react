import { useApiAxios } from 'api/base';
import DebugStates from 'compomemts/DebugStates';
import useAuth from 'hook/useAuth';
import { useEffect } from 'react';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  const [auth] = useAuth();

  const [{ data: articleList, loading, error }, refetch] = useApiAxios(
    {
      url: '/news/api/articles/',
      method: 'GET',
      headers: { Authorization: `Bearer ${auth.access}` },
    },
    { manual: true },
  );

  useEffect(() => {
    // if (auth.isLoggedIn) {}
    // 방법 1)
    //   refetch({
    //     headers: {
    //       Authorization: `Bearer ${auth.access}`,
    //     },
    //   });
    // }, [auth]);
    refetch();
  }, [auth]);

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
              <p className="mb-3">by. {article.author.username}</p>
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
