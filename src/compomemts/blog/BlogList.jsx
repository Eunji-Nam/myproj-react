import Axios from 'axios';
import { useEffect, useState } from 'react';

function BlogList() {
  const [postList, setPostList] = useState([]);

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
          <span className="font-bold">{post.title}</span>
          <p className="text-sm">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
