import { axiosInstance } from 'api/base';
import PostForm from 'compomemts/blog/PostForm';
import useFieldValues from 'hook/usefieldValues';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PagePostForm() {
  const [error, setError] = useState(null);
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();
  const { postId } = useParams();
  const { fieldValues, handleFieldChange, clearFieldValues, setFieldValues } =
    useFieldValues({ title: '', content: '' });

  useEffect(() => {
    const url = `/blog/api/posts/${postId}/`;

    const getData = () => {
      axiosInstance
        .get(url)
        .then(({ data }) => {
          setFieldValues(data);
        })
        .catch((error) => error);
    };
    !postId ? clearFieldValues() : getData();
  }, [postId]);

  const handleSubmit = async () => {
    setErrorMessages({});
    const url = !postId ? `/blog/api/posts/` : `/blog/api/posts/${postId}/`;
    try {
      if (!postId) {
        await axiosInstance.post(url, fieldValues);
      } else {
        await axiosInstance.patch(url, fieldValues);
      }
      navigate('/blog/');
    } catch (e) {
      setError(e);

      setErrorMessages(e.response.data);
    }
  };

  return (
    <div>
      {postId ? '수정' : '생성'}
      <PostForm
        errorMessages={errorMessages}
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default PagePostForm;
