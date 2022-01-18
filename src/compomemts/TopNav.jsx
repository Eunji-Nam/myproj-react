import useAuth from 'hook/useAuth';
import { NavLink } from 'react-router-dom';

function TopNav() {
  const [auth, , , logout] = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="my-3">
      <ul className="flex gap-4">
        <MyLink to="/blog/">블로그</MyLink>
        <MyLink to="/news/">뉴스룸</MyLink>
        {!auth.isLoggedIn && (
          <>
            <MyLink to="/accounts/login/">로그인</MyLink>
            <MyLink to="/accounts/join/">회원가입</MyLink>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            <MyLink to="/accounts/profile/">프로필</MyLink>
            <button onClick={handleLogout} className={baseClassName}>
              로그아웃
            </button>
          </>
        )}

        {/* <li>
          <MyLink to="/reviews/">리뷰</MyLink>
        </li>
        <li>
          <MyLink to="examples/components/">예시</MyLink>
        </li>
        <li>
          <MyLink to="examples/clock/">시계</MyLink>
        </li>
        <li>
          <MyLink to="examples/css-module/">CssModule</MyLink>
        </li>
        <li>
          <MyLink to="examples/css-in-js/">CssInJs</MyLink>
        </li>
        <li>
          <MyLink to="examples/context-api/">ContextApiSample</MyLink>
        </li>
        <li>
          <MyLink to="examples/context-api-2/">ContextApiSample2</MyLink>
        </li> */}
      </ul>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        baseClassName + ' ' + (isActive ? 'border-b-4 border-red-400' : '')
      }
    >
      {children}
    </NavLink>
  );
}

const baseClassName =
  'px-4 pt-3 pb-2 font-semibold hover:bg-red-200 hover:text-red-500 hover:text-white';

export default TopNav;
