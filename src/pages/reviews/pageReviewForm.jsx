import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DebugStates from 'compomemts/DebugStates';
import useFieldValues from 'hook/usefieldValues';
import ReviewForm from 'compomemts/Review/ReviewForm';
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
  const [errorMessages, setErrorMessages] = useState({});

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
    setErrorMessages({});

    const url = !reviewId
      ? `/shop/api/reviews/`
      : `/shop/api/reviews/${reviewId}/`;
    try {
      if (!reviewId) {
        await axiosInstance.post(url, fieldValues);
      } else {
        await axiosInstance.patch(url, fieldValues);
      }
      navigate('/reviews/');
    } catch (e) {
      setError(e);
      console.error(e);

      setErrorMessages(e.response.data);
    }
    setLoading(false);

    // .then(() => navigate('/reviews/'))
    // .catch((error) => {
    //   console.error(error);
    // })
    // .finally(() => setfieldValues({}));
  };

  useEffect(() => {
    const url = `/shop/api/reviews/${reviewId}/`;
    axiosInstance
      .get(url)
      .then(({ data }) => {
        setFieldValues(data);
      })
      .catch((error) => {
        setError(error);
      });

    setLoading(false);

    //     // Axios.get(url)
    //     //   .then((response) => setFieldValues(response.data))
    //     //   .catch((error) => setError(error))
    //     //   .finally(() => {
    //     //     setLoading(false);
    //     //   });
    //   };
    //   if (reviewId) fetchReview();
    //   else clearFieldValues();
  }, [reviewId]); // [reviewId]가 변경될 때마다 함수 호출

  // 표현 by jsx
  return (
    <div className="rounded border-2 border-gray-300 p-3 my-3">
      {reviewId ? '수정' : '생성'}
      <ReviewForm
        fieldValues={fieldValues}
        errorMessages={errorMessages}
        handleFieldChange={handleFieldChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <DebugStates
        reviewId={reviewId}
        fieldValues={fieldValues}
        errorMessages={errorMessages}
      />
    </div>
  );
}

export default PageReviewForm;
