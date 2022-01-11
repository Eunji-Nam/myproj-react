import { axiosInstance } from 'api/base';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostList() {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = () => {
      const url = `/blog/api/posts/`;
      axiosInstance
        .get(url)
        .then(({ data }) => {
          setPostList(data);
        })
        .catch((e) => e);
    };
    fetchPost();
  }, []);

  const handlePostDelete = (deletingPost) => {
    const { id: deletingPostId } = deletingPost;
    const url = `/blog/api/posts/${deletingPostId}/`;

    axiosInstance
      .delete(url)
      .then(() => {
        setPostList((prevPostList) =>
          prevPostList.filter((post) => post.id !== deletingPostId),
        );
      })
      .catch((error) => error);
  };

  return (
    <div>
      <h2>Post List</h2>
      <button
        onClick={() => navigate('/blog/new/')}
        className="bg-orange-200 hover:bg-orange-400 p-1 rounded text-sm cursor-point"
      >
        New Post
      </button>

      {postList.map((post) => (
        <div
          key={post.id}
          className="bg-green-100 border-2 border-green-400 my-2 p-1"
        >
          <ul
            onClick={() => {
              navigate(`/blog/${post.id}/`);
            }}
            className="font-bold hover:text-green-700 cursor-pointer"
          >
            {post.title}
          </ul>
          <div className="flex justify-end">
            <button
              onClick={() => navigate(`/blog/${post.id}/edit/`)}
              className="hover:text-blue-400 cursor-pointer mr-1"
            >
              수정
            </button>
            <button
              onClick={() => handlePostDelete(post)}
              className="hover:text-red-400 cursor-pointer"
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
