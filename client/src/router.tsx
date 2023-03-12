import { SidebarElement } from './types/sidebar'
import { createBrowserRouter } from 'react-router-dom'
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import Home from './pages/Home'
import GeneralLayout from './layout/GeneralLayout'
import Login from './pages/Login'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'

interface RouterElement {
  id: number // 페이지 아이디 (반복문용 고유값)
  path: string // 페이지 경로
  label: string // 사이드바에 표시할 페이지 이름
  element: React.ReactNode // 페이지 엘리먼트
  withAuth?: boolean // 인증이 필요한 페이지 여부
}

const routerData: RouterElement[] = [
  // TODO 3-1: 로그인 페이지 라우터 등록하기 ('login', withAuth: false)
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: <Home/>,
    withAuth: false
  },
  {
    id: 1,
    path: '/login',
    label: '로그인',
    element: <Login/>,
    withAuth: false
  },
  // TODO 3-2: page a, b, c 등록하기
  {
    id: 2,
    path: '/page-a',
    label: '페이지 A',
    element: <PageA/>,
    withAuth: true
  },
  {
    id: 3,
    path: '/page-b',
    label: '페이지 B',
    element: <PageB/>,
    withAuth: true
  },
  {
    id: 4,
    path: '/page-c',
    label: '페이지 C',
    element: <PageC/>,
    withAuth: true
  }
]

export const routers: RemixRouter = createBrowserRouter(
  // TODO 3-1: 인증이 필요한 페이지는 GeneralLayout 으로 감싸기
  // GeneralLayout 에는 페이지 컴포넌트를 children 으로 전달
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <GeneralLayout>{ router.element }</GeneralLayout>
      }
    } else {
      return {
        path: router.path,
        element: router.element
      }
    }
  })
)

export const SidebarContent: SidebarElement[] = routerData.reduce((prev, router) => {
  // TODO 3-2: 인증이 필요한 페이지만 사이드바에 표시하기
  if (!router.withAuth) return prev

  return [
    ...prev,
    {
      id: router.id,
      path: router.path,
      label: router.label
    }
  ]
}, [] as SidebarElement[])
