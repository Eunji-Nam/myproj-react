import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PostDetail() {
  const [postList, setPostList] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    const url = `http://127.0.0.1:8000/blog/api/posts/${postId}`;
    Axios.get(url)
      .then(({ data }) => {
        setPostList(data);
      })
      .catch((e) => e);
  }, [postId]);

  return (
    <div className="my-5">
      <span key={postList.id} className="font-bold">
        <h1>{postList.title}</h1>
      </span>
      <img src="https://placeimg.com/640/480/animals" />
      <p className="text-sm">{postList.content}</p>
    </div>
  );
}

export default PostDetail;
