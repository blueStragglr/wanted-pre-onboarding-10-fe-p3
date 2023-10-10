import { User } from '../types/user'
import { BASE_URL } from './const'

type LoginResult = 'success' | 'fail'

export interface LoginRequest {
  username: string
  password: string
}

/* options 예시:
const option: RequestInit = {
  method: 'POST',
  body: JSON.stringify({ username, password })
} */

const fetchClient = async (url: string, options: RequestInit) => {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    ...options
  })
}

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  // TODO 3-1: POST, '/auth/login' 호출
  // body에는 { username, password }가 들어가야 함
  // fetchClient를 사용하여 API 호출하거나, 직접 headers 작성
  // header가 올바르게 추가된 경우 쿠키는 자동으로 함께 전송됨

  return 'fail'
}

export const getCurrentUserInfo = async (): Promise<User | null> => {
  // TODO 3-2: GET, '/profile' 호출
  // 호출 성공시 유저 정보 반환
  // fetchClient를 사용하여 API 호출하거나, 직접 headers 작성
  // header가 올바르게 추가된 경우 쿠키는 자동으로 함께 전송됨

  return null
}
