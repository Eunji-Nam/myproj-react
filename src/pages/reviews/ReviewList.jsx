import Axios from 'axios';
import { useEffect } from 'react';

function ReviewList() {
  // useEffect의 첫번째 인자는 함수, 두번째 인자는 배열
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    // Promise 객체
    Axios.get(url)
      .then((response) => {
        console.group('정상 응답');
        console.log(response);
        console.groupEnd();
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
    </div>
  );
}

export default ReviewList;
