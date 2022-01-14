import { useApiAxios } from 'api/base';
import useFieldValues from 'hook/usefieldValues';

const INIT_FIELD_VALUES = { title: '', content: '' };

function PostForm({ postId, handleDidSave }) {
  const [{ data, loading, error }] = useApiAxios(`/blog/api/posts/${postId}/`, {
    manual: !postId,
  });

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !postId ? `/blog/api/posts/` : `/blog/api/posts/${postId}/`,
      method: !postId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } = useFieldValues(
    data || INIT_FIELD_VALUES,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    saveRequest({
      data: fieldValues,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };

  return (
    <div className="rounded border-2 border-blue-300 mb-2 p-2">
      {saveLoading && '저장 중...'}
      {saveError &&
        `저장 중 에러가 발생했습니다. (${saveError.response.status} ${saveError.response.statusText})`}

      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 font-bold">title</label>
        <div>
          {saveErrorMessages.title?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
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
          {saveErrorMessages.content?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
          <textarea
            onChange={handleFieldChange}
            name="content"
            value={fieldValues.content}
            className="border border-blue-500 shodow leading-tight h-80 w-full py-2 px-3 mb-3 "
          />
        </div>

        <button className="bg-blue-200 hover:bg-blue-400 p-1 m-2 rounded text-sm cursor-point">
          등록하기
        </button>
      </form>
    </div>
  );
}

export default PostForm;
