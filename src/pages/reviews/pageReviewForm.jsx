import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DebugStates from 'compomemts/DebugStates';
import useFieldValues from 'hook/usefieldValues';
import ReviewForm from 'compomemts/ReviewForm';
import { axiosInstance } from 'api/base';

function PageReviewForm() {
  // 상탯값 정의. 훅 호출
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { reviewId } = useParams();
  const { fieldValues, handleFieldChange, clearFieldValues, setFieldValues } =
    useFieldValues({
      content: '',
      score: 5,
    });

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
    const url = !reviewId
      ? `/shop/api/reviews/`
      : `/shop/api/reviews/${reviewId}/`;
    try {
      await axiosInstance.post(url, fieldValues);
      if (!reviewId) {
        await axiosInstance.post(url, fieldValues);
      } else {
        await axiosInstance.put(url, fieldValues);
      }
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
  //   const fetchReview = async () => {
  //     setLoading(true);
  //     setError(null);

  //     const url = `http://localhost:8000/shop/api/reviews/${reviewId}/`;
  //     try {
  //       const response = await Axios.get(url);
  //       setFieldValues(response.data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //     setLoading(false);

  //     // Axios.get(url)
  //     //   .then((response) => setFieldValues(response.data))
  //     //   .catch((error) => setError(error))
  //     //   .finally(() => {
  //     //     setLoading(false);
  //     //   });
  //   };
  //   if (reviewId) fetchReview();
  //   else clearFieldValues();
  // }, [reviewId]); // [reviewId]가 변경될 때마다 함수 호출

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
