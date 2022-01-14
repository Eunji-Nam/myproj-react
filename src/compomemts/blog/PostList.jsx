import { useApiAxios } from 'api/base';
import LoadingIndicator from 'compomemts/LoadingIndicator';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PostList({ postId }) {
  const navigate = useNavigate();
  const [{ data, loading, error }, refetch] = useApiAxios(`/blog/api/posts/`);

  const [{ loading: deleteLoading, error: deleteError }, deletePost] =
    useApiAxios(
      { url: `/blog/api/posts/${postId}/`, method: 'DELETE' },
      { manual: true },
    );

  const handlePostDelete = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      deletePost().then(() => navigate('/blog/'));
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h2>Post 목록</h2>
      <button
        onClick={() => navigate('/blog/new/')}
        className="bg-orange-200 hover:bg-orange-400 p-1 rounded text-sm cursor-point"
      >
        New Post
      </button>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중...</LoadingIndicator>}
      {error &&
        `로딩 중 에러가 발생 했습니다. (${error.response.status} ${error.response.statusText})`}
      {deleteError &&
        `삭제 중 에러가 발생 했습니다. (${deleteError.response.status} ${deleteError.response.statusText})`}

      <div>
        {data &&
          data.map((post, index) => (
            <div
              key={index}
              className="bg-green-100 border-2 border-green-400 my-2 p-1"
            >
              <div className="font-bold hover:text-green-700 cursor-pointer">
                <img
                  src="https://placeimg.com/160/120/animals"
                  alt={post.title}
                />
                <Link to={`/blog/${post.id}/`}>{post.title}</Link>
              </div>
              <div className="flex justify-end">
                <Link
                  to={`/blog/${post.id}/edit/`}
                  className="text-xs hover:text-blue-400 cursor-pointer mr-1"
                >
                  수정
                </Link>
                <button
                  disabled={deleteLoading}
                  onClick={handlePostDelete}
                  className="text-xs hover:text-red-400 cursor-pointer"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PostList;
