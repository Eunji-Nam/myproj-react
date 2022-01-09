import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ReviewForm() {
  const [fieldValues, setfieldValues] = useState({
    content: '',
    score: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    Axios.post(url, fieldValues)
      .then(() => navigate('/reviews/'))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setfieldValues({}));
  };

  return (
    <div className="rounded border-2 border-gray-300 p-3 my-3">
      <label className="block text-gray-700 text-sm font-bold mb-2 ">
        평점
      </label>

      <select
        onChange={handleChange}
        name="score"
        className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <label className="block text-gray-700 text-sm font-bold mb-2">리뷰</label>
      <input
        type="text"
        name="content"
        onChange={handleChange}
        style={{ marginTop: 0, marginBottom: 12, height: 65 }}
        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />

      <button
        onClick={handleSubmit}
        className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
      >
        저장하기
      </button>
    </div>
  );
}

export default ReviewForm;
