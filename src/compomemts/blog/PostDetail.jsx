import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosInstance } from 'api/base';

function PostDetail() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const url = `/blog/api/posts/${postId}`; // 배열이 아닌 하나의 obj로 옴
    axiosInstance
      .get(url)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((e) => e);
  }, [postId]);

  return <div className="my-5">{post && <Post post={post} />}</div>;
}

function Post({ post }) {
  return (
    <div>
      <span key={post.id} className="font-bold text-lg">
        <h1>{post.title}</h1>
      </span>
      <img src="https://placeimg.com/640/480/animals" alt={post.title} />
      <div className="text-sm">
        {/* 정규표현식: split(/[\r\n]+/) => \r\n 가 나올 때 마다 split 됨 */}
        {post.content.split(/[\r\n]+/).map((line, index) => (
          <p key={index} className="indent-2 py-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PostDetail;
