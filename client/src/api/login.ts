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
  const loginRes = await fetchClient(`${BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(args)
  })

  return loginRes.ok ? 'success' : 'fail'
}

export const getCurrentUserInfo = async (): Promise<User | null> => {
  // TODO 3-2: GET, '/profile' 호출
  try {
    const userInfoRes = await fetchClient(`${ BASE_URL }/profile`, {
      method: 'GET'
    })

    return userInfoRes.ok ? userInfoRes.json() : null
  } catch (e) {
    console.error(e)
    return null
  }
}
