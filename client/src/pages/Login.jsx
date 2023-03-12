import React from 'react';
import { login } from '../api/login.js'
import { useRouter } from '../hooks/useRouter.js'

// TODO 3-2.: 이미 로그인된 유저인지 판별
const isLoggedIn = async () => {
  return false
}

const Login = () => {
  const { routeTo } = useRouter()

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    // FormData를 이용해서 로그인 시도
    const formData = new FormData(event.currentTarget)

    // TODO 3-2.: 이미 로그인된 상태라면 page-a로 라우팅

    const loginResult = await login({
      username: formData.get('username'),
      password: formData.get('password')
    })

    // TODO 3-1.: 로그인 실패시 함수 종료. 로그인 성공시 '/page-a'로 이동
  }

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
