# TechLabs Coding Test\_최민정

## 1. 배포 주소
https://tech-labs-coding-test.vercel.app/

## 2. 프로젝트 설명

### 1) 기술스택
React, Redux-toolkit, TypeScript, Antd

### 2) 구현사항
- react-hot-toast라이브러리를 사용하여 api응답결과를 alert으로 띄움.
- recharts.js를 활용하여 조회 결과 데이터를 그래프로 보여줌.
- Antd Select의 multiple을 활용하여 연령별 트렌드 조회의 파라미터 ages를 다중 선택 할 수 있도록 구현함.

## 3. 선택 구현 사항 체크
- [x] Antd를 활용하여 화면을 꾸민다. (디자인은 자유)
- [ ] Redux-Persist를 활용하여 새로고침 시, 연령별 트렌드 조회의 파라미터가 유지되도록 구성한다.
- [x] Custom Hook에서 비즈니스 로직, 상태관리, 비동기처리를 따로 처리한다. (비즈니스 로직을 util폴더에 따로 빼서 처리함)

## 4. CORS 이슈 해결방법
'키워드 연령별 트렌드 조회API'는 원래 **백엔드에서 사용하는 API**로
프론트 환경에서 API요청을 하게 되면 정식 API요청 전에 preflight를 보내게 되는데
이 preflight는 http method를 OPTIONS로 보내기 때문에 405에러(허용되지 않은 Method)가 뜨게됨.
네이버 Developers사이트의 FAQ를 보고 proxy를 사용해야한다는 사실을 알았고
**package.json에 proxy주소를 입력하여 해결**하였음.

<img width="685" alt="스크린샷 2023-07-10 오후 9 38 01" src="https://github.com/saiani1/TechLabsCodingTest/assets/68591616/2e29afc3-d173-4ef5-a117-4e08ed53ab92">
