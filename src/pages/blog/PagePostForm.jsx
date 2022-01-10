import Axios from 'axios';
import PostForm from 'compomemts/blog/PostForm';
import useFieldValues from 'hook/usefieldValues';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PagePostForm() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { postId } = useParams();
  const { fieldValues, handleFieldChange, clearFieldValues, setFieldValues } =
    useFieldValues({ title: '', content: '' });

  useEffect(() => {
    const url = `http://127.0.0.1:8000/blog/api/posts/${postId}/`;

    const getData = () => {
      Axios.get(url)
        .then(({ data }) => {
          setFieldValues(data);
        })
        .catch((error) => error);
    };
    !postId ? clearFieldValues() : getData();
  }, [postId]);

  const handleSubmit = async () => {
    const url = !postId
      ? 'http://127.0.0.1:8000/blog/api/posts/'
      : `http://127.0.0.1:8000/blog/api/posts/${postId}/`;
    try {
      await Axios.post(url, fieldValues);
      if (!postId) {
        await Axios.post(url, fieldValues);
      } else {
        await Axios.put(url, fieldValues);
      }
      navigate('/blog/');
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div>
      {postId ? '수정' : '생성'}
      <PostForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default PagePostForm;
