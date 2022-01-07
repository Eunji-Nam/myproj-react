import Axios from 'axios';
import { useEffect, useState } from 'react';
import DebugStates from 'compomemts/DebugStates';

function ReviewList() {
  const [reviewList, setReviewList] = useState([]);
  // useEffect의 첫번째 인자는 함수, 두번째 인자는 배열
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    // Promise 객체
    Axios.get(url)
      .then(({ data }) => {
        console.group('정상 응답');
        console.log(data);
        console.groupEnd();
        setReviewList(data);
      })
      .catch((error) => {
        console.group('에러 응답');
        console.log(error);
        console.groupEnd();
      });
  };

  return (
    <div>
      <h2>Review List</h2>
      <hr />
      <DebugStates reviewList={reviewList} />
    </div>
  );
}

export default ReviewList;
