import PostForm from 'compomemts/blog/PostForm';
import { useNavigate, useParams } from 'react-router-dom';

function PagePostForm({ handleDidSave }) {
  const navigate = useNavigate();
  const { postId } = useParams();

  // const handleSubmit = async () => {
  //   setErrorMessages({});
  //   const url = !postId ? `/blog/api/posts/` : `/blog/api/posts/${postId}/`;
  //   try {
  //     if (!postId) {
  //       await axiosInstance.post(url, fieldValues);
  //     } else {
  //       await axiosInstance.patch(url, fieldValues);
  //     }
  //     navigate('/blog/');
  //   } catch (e) {
  //     setError(e);

  //     setErrorMessages(e.response.data);
  //   }
  // };

  return (
    <div>
      {/* {postId ? '수정' : '생성'} */}
      <PostForm
        postId={postId}
        handleDidSave={(savedPost) => navigate(`/blog/${savedPost.id}/`)}
      />
    </div>
  );
}

export default PagePostForm;
