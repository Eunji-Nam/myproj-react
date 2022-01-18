// input[type=text]         name=username
// input[type=password]     name=password
// useFieldValues 훅 사용
// PageLogin 컴포넌트 내에서 fieldValues 상탯값 노출

import LoginForm from 'compomemts/accounts/LoginForm';

function PageLogin() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default PageLogin;
