import Axios from 'axios';
import { useEffect, useState } from 'react';
import DebugStates from 'compomemts/DebugStates';
import Review from 'compomemts/Review';

function ReviewList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  // useEffect의 첫번째 인자는 함수, 두번째 인자는 배열
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    // Promise 객체
    Axios.get(url)
      .then(({ data }) => {
        setReviewList(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Review List</h2>

      {loading && <div>Loading ...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-400"
      >
        새로고침
      </button>

      <div className="">
        {reviewList.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>

      <hr />
      <DebugStates laoding={loading} error={error} reviewList={reviewList} />
    </div>
  );
}

export default ReviewList;
