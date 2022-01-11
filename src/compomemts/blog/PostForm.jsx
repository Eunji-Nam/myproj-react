function PostForm({
  fieldValues,
  errorMessages,
  handleFieldChange,
  handleSubmit,
}) {
  const handlePostSubmit = () => {
    if (handleSubmit) {
      handleSubmit();
    }
  };

  return (
    <div className="rounded border-2 border-blue-300 mb-2 p-2">
      <label className="block text-gray-700 font-bold">title</label>
      <div>
        <div className="text-red-400 text-xs">{errorMessages.title}</div>
        <input
          onChange={handleFieldChange}
          type="text"
          name="title"
          value={fieldValues.title}
          className="border border-blue-500 shodow leading-tight w-full py-2 px-3 mb-3"
        />
      </div>

      <label className="block text-gray-700 font-bold">content</label>
      <div>
        <div className="text-red-400 text-xs">{errorMessages.content}</div>
        <textarea
          onChange={handleFieldChange}
          name="content"
          value={fieldValues.content}
          className="border border-blue-500 shodow leading-tight w-full py-2 px-3 mb-3 "
        />
      </div>

      <button
        onClick={() => handlePostSubmit()}
        className="bg-blue-200 hover:bg-blue-400 p-1 m-2 rounded text-sm cursor-point"
      >
        등록하기
      </button>
    </div>
  );
}

export default PostForm;
