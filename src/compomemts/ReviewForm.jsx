// fieldValues : 현재의 필드값 내역
// handleFieldChange : 각 필드 값이 변화 시에 호출
// handleSubmit: 인자없는 함수. submit 시에 호출

function ReviewForm({ fieldValues, handleFieldChange, handleSubmit }) {
  const handleClickedSubmitButton = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      console.warn('handleSubmit 속성값을 지정해주세요');
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <label className="block text-gray-700 text-sm font-bold mb-2 ">
        평점
      </label>

      <select
        name="score"
        value={fieldValues.score}
        onChange={handleFieldChange}
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
      <textarea
        name="content"
        value={fieldValues.content}
        onChange={handleFieldChange}
        style={{ marginTop: 0, marginBottom: 12, height: 65 }}
        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />

      <button
        onClick={() => handleClickedSubmitButton()}
        className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
      >
        저장하기
      </button>
    </div>
  );
}

export default ReviewForm;
