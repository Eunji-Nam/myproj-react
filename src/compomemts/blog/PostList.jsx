import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostList() {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = () => {
      const url = 'http://127.0.0.1:8000/blog/api/posts/';
      Axios.get(url)
        .then(({ data }) => {
          setPostList(data);
        })
        .catch((e) => e);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <h2>Post List</h2>

      {postList.map((post) => (
        <div className="bg-green-100 border-2 border-green-400 my-2 p-1">
          <ul
            onClick={() => {
              navigate(`/blog/${post.id}/`);
            }}
            className="font-bold hover:text-green-700"
          >
            {post.title}
          </ul>
          <div className="flex justify-end">
            <button className="hover:text-blue-400 cursor-pointer mr-1">
              수정
            </button>
            <button className="hover:text-red-400 cursor-pointer">삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
