import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DebugStates from 'compomemts/DebugStates';
import useFieldValues from 'hook/usefieldValues';
import ReviewForm from 'compomemts/ReviewForm';

function PageReviewForm() {
  // 상탯값 정의. 훅 호출
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { reviewId } = useParams();
  const [review, setReview] = useState(null);
  const { fieldValues, handleFieldChange } = useFieldValues({
    content: '',
    score: 5,
  });
  // const [fieldValues, setfieldValues] = useState({
  //   content: '',
  //   score: 0,
  // });

  // 다양함 함수를 정의

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setfieldValues((prevFieldValues) => ({
  //     ...prevFieldValues,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    try {
      // const response =
      await Axios.post(url, fieldValues);
      // console.group('saveReview');
      // console.log(response.data);
      // console.groupEnd();
      navigate('/reviews/');
    } catch (e) {
      setError(e);
      console.error(e);
    }
    setLoading(false);

    // .then(() => navigate('/reviews/'))
    // .catch((error) => {
    //   console.error(error);
    // })
    // .finally(() => setfieldValues({}));
  };

  // useEffect(() => {
  //   if (reviewId) {
  //     const url = `http://localhost:8000/shop/api/reviews/${reviewId}/`;
  //     Axios.get(url)
  //       .then(({ data }) => setReview(data))
  //       .catch((error) => setError(error));
  //   } else {
  //     setReview(null);
  //   }
  // }, [reviewId]);

  // 표현 by jsx
  return (
    <div className="rounded border-2 border-gray-300 p-3 my-3">
      {reviewId ? '수정' : '생성'}
      <ReviewForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <DebugStates reviewId={reviewId} fieldValues={fieldValues} />
    </div>
  );
}

export default PageReviewForm;
