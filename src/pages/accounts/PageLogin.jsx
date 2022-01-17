// input[type=text]         name=username
// input[type=password]     name=password
// useFieldValues 훅 사용
// PageLogin 컴포넌트 내에서 fieldValues 상탯값 노출

import { useApiAxios } from 'api/base';
import DebugStates from 'compomemts/DebugStates';
import useFieldValues from 'hook/usefieldValues';
import { useNavigate } from 'react-router-dom';

const INIT_FIELD_VALUES = { username: '', password: '' };

function PageLogin() {
  const navigate = useNavigate();

  const [{ loading, error }, requestToken] = useApiAxios(
    {
      url: '/accounts/api/token/',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    requestToken({ data: fieldValues }).then((response) => {
      const { access, refresh } = response.data;
      // TODO: access/refresh token을 브라우저 어딘가에 저장
      // 저장해서 페이지 새로고침이 발생하더라도 그 token이 유실되지 않아야 함
      console.log('access :', access);
      console.log('refresh :', refresh);

      // 인증 후, 이동할 주소
      navigate('/');
    });
  };

  return (
    <div>
      <h2>Login</h2>

      {error?.response?.status === 401 && (
        <div className="text-red-400">로그인에 실패했습니다.</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            className="placeholder:italic placeholder:text-slate-400 border border-gray-300 rounded w-3/4 my-1 mx-2 p-2"
            placeholder="username"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            className="placeholder:italic placeholder:text-slate-400 border border-gray-300 rounded w-3/4 my-1 mx-2 p-2"
            placeholder="password"
          />
        </div>

        <div className="bg-yellow-200 hover:bg-yellow-100 text-center rounded w-3/4 m-2 p-2">
          <button>로그인</button>
        </div>
      </form>

      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}

export default PageLogin;
