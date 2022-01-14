import { useApiAxios } from 'api/base';
import LoadingIndicator from 'compomemts/LoadingIndicator';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ArticleDetail({ articleId }) {
  const navigate = useNavigate();
  const [{ data: article, loading, error }, refetch] = useApiAxios(
    `/news/api/articles/${articleId}/`,
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteArticle] =
    useApiAxios(
      {
        url: `/news/api/articles/${articleId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      deleteArticle().then(() => navigate('/news/'));
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중...</LoadingIndicator>}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다. (${deleteError.response.status} ${deleteError.response.statusText})`}
      {article && (
        <>
          <h3 className="text-2xl my-5">{article.title}</h3>
          <div>
            {article.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/news/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link to={`/news/${articleId}/edit/`} className="hover:text-red-400">
          수정하기
        </Link>
        <button
          disabled={deleteLoading}
          onClick={handleDelete}
          className="hover:text-red-400"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default ArticleDetail;