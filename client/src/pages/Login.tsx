import React from 'react';
import { getCurrentUserInfo, login } from '../api/login'
import { useRouter } from '../hooks/useRouter'

// TODO 3-2.: 이미 로그인된 유저인지 판별
const isLoggedIn = async (): Promise<boolean> => {
  return false
}

const Login = () => {
  const { routeTo } = useRouter()
  const loginSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // FormData를 이용해서 로그인 시도
    const formData = new FormData(event.currentTarget)

    const loginResult = await login({
      username: formData.get('username') as string,
      password: formData.get('password') as string
    })

    // TODO 3-1.: 로그인 실패시 함수 종료. 로그인 성공시 '/page-a'로 이동
  }

  // TODO 3-2.: 이미 로그인된 상태라면 page-a로 라우팅
  // if (isLoggedIn()) {
  //   routeTo('/page-a')
  // } 같은 코드 작성(실제로는 async라서 동작하지 않음)

  return (<div className="non-logged-in-body">
    <h1>
      로그인 페이지
    </h1>
    <p>
      로그인 성공시 Page A로 이동합니다.<br/>
      실패시 alert를 띄웁니다.
    </p>
    <form onSubmit={loginSubmitHandler}>
      <label>
        Username:
        <input type="text" name="username"/>
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit" value="Submit">submit</button>
    </form>
  </div>)
}

export default Login
