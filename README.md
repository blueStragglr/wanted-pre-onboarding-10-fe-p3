# Wanted Pre-onboarding 10월 FE 코스 3일차 실습

> 3일차 실습을 위한 스켈레톤 코드 및 샘플 서버입니다. 강의를 듣고 설명에 따라 실습을 진행해보세요!

## 서버 실행 방법
예제 서버에는 세션 로그인 기능이 구현되어 있습니다.
서버를 직접 수정하거나 할 필요는 없지만, 실습 진행을 위해 각자 로컬 환경에 서버를 실행하여야 합니다.
```shell
  # 패키지매니저를 변경하려면 yarn.lock을 삭제 후 npm install 등을 실행합니다.
  
  # 처음 한 번만 실행. 서버/클라이언트 의존성 설치가 동시에 이루어집니다.
  $ yarn initialize 

  # 서버 실행
  $ yarn server
```

이 때, CORS 이슈를 방지하기 위해 아래의 방법을 이용해 브라우저를 실행합니다.

```
# MacOS terminal

$ open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

```
# Windows PowerShell

$ "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp -–allow-file-access-from-files
```

서버는 4000번 포트를 사용합니다. 서버가 정상적으로 실행되었다면 브라우저를 통해 `localhost:4000`에 접근하였을 때 'Hello World!'가 출력됩니다.

서버에서는 다음과 같은 API를 제공합니다.

1. 로그인 (POST /auth/login)
    - body에 username과 password를 담아 전송합니다. 즉, 다음과 같이 호출합니다.
      ```tsx
        const args = {
          username: 'blue',
          password: '1234!@#$' 
        }
       
        const loginRes = await fetch(`${ BASE_URL }/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            credentials: 'include' // <- 중요! 세션 방식 로그인을 위해 꼭 설정해 주세요. 
          },
            body: JSON.stringify(args)
          })
      ```
    - 로그인 성공시 세션에 유저 정보를 저장합니다.
    - 성공 시 세션이 생성되며, 이후 별도 인증 없이 접근 가능한 `/profile`을 통해 유저 정보를 가져올 수 있습니다.
    - 계정 정보는 다음과 같습니다.
      - username: blue, password: 1234!@#$
      - username: white, password: 1234!@#$
      - username: red, password: 1234!@#$ 

2. 유저 정보 가져오기 (GET `/profile`)
    - 세션에 저장된 유저 정보를 반환합니다.
    - credentials: 'include' 옵션을 활성화 하는 경우 별도 개발 없이도 자동으로 로그인 여부를 검증하므로, 유저 정보 수신 성공여부만 확인하면 됩니다.
    - 반환되는 데이터 타입은 다음과 같습니다.
      ```tsx
        interface User {
          userId: number
          username: string
          userInfo: {
            name :blueStragglr
          }
        }
      ```


