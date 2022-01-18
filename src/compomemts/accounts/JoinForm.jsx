import { useApiAxios } from 'api/base';
import DebugStates from 'compomemts/DebugStates';
import useFieldValues from 'hook/usefieldValues';
import { useNavigate } from 'react-router-dom';

const INIT_FIELD_VALUES = { username: '', password: '', password2: '' };

function JoinForm() {
  const navigate = useNavigate();

  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FIELD_VALUES);

  const [{ loading, error, errorMessages }, requestMember] = useApiAxios(
    {
      url: '/accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    requestMember({ data: fieldValues }).then((response) => {
      const { username, password, password2 } = response.data;
      navigate('/accounts/login/');
    });
  };

  return (
    <div>
      <h2>Join</h2>

      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            className="placeholder:italic placeholder:text-slate-400 border border-gray-300 rounded w-3/4 mb-1 mx-2 p-2"
            placeholder="아이디를 입력해주세요."
          />
          {errorMessages.username?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            className="placeholder:italic placeholder:text-slate-400 border border-gray-300 rounded w-3/4 my-1 mx-2 p-2"
            placeholder="비밀번호를 입력해주세요."
          />
          {errorMessages.password?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div>
          <input
            type="password"
            name="password2"
            value={fieldValues.password2}
            onChange={handleFieldChange}
            className="placeholder:italic placeholder:text-slate-400 border border-gray-300 rounded w-3/4 my-1 mx-2 p-2"
            placeholder="비밀번호를 한 번 더 입력해주세요."
          />
          {errorMessages.non_field_errors?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="bg-yellow-200 hover:bg-yellow-100 text-center rounded w-3/4 m-2 p-2">
          <button>회원가입</button>
        </div>
      </form>

      <DebugStates non_field_errors={errorMessages} fieldValues={fieldValues} />
    </div>
  );
}

export default JoinForm;
