import React, { useCallback, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import { SidebarContent } from '../router'
import { getCurrentUserInfo } from '../api/login'
import { User } from '../types/user'
import { useRouter } from '../hooks/useRouter'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  const [userProfile, setUserProfile] = useState<User | null>(null)
  const {routeTo} = useRouter()

  const fetchUserProfile = useCallback(async () => {
    // TODO 3-2: 페이지 이동시 마다 로그인 여부를 확인하는 함수 구현
    // 로그인 여부 확인 ('/profile' 호출 성공여부 확인)
    // 로그인 성공시 userProfile 상태 업데이트
    // 로그인 실패시 로그인 페이지로 이동 ('/login')
  }, [])

  useEffect(() => {
    // TODO 3-2: 페이지 이동시 마다 로그인 여부를 확인하는 함수 실행
    console.log('page changed!')
  }, [children])

  if(!userProfile) return (<div>loading...</div>)

  return (<div className="general-layout">
    <Sidebar sidebarContent={SidebarContent} userProfile={userProfile } />
    <div className="general-layout__body">
      { children }
    </div>
  </div>)
}

export default GeneralLayout
