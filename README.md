# 네이버 키워드 연령별 트렌드 조회 사이트 구현

## 1. 배포사이트
https://keyword-trend-view.vercel.app/

## 2. 사용기술
React, Redux-toolkit, TypeScript, Antd

## 3. 개발기간
2023.07.09 ~ 2023.07.11 (+ 리팩토링 3일)

## 3. 구현사항
- react-hot-toast라이브러리를 사용하여 api응답결과를 alert으로 띄움.
- recharts.js를 활용하여 조회 결과 데이터를 그래프로 보여줌.
- Antd Select의 multiple을 활용하여 연령별 트렌드 조회의 파라미터 ages를 다중 선택 할 수 있도록 구현함.
- **Redux-Toolkit**에서 효율적으로 객체 값을 일부 수정하기 위해 [리팩토링 진행](https://velog.io/@saiani1/redux-toolkit%EC%9D%84-%EC%A0%81%EC%A0%88%ED%95%98%EA%B2%8C-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0)
- 비즈니스 로직에서 비동기 로직을 분리하기 위해 API호출 로직을 [커스텀 훅으로 분리](https://velog.io/@saiani1/%EA%B8%B0%EC%97%85%EA%B3%BC%EC%A0%9C-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81-React-Query%EB%8F%84%EC%9E%85%EA%B8%B0-2-useMutation%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0)
- 새로고침 시 파라미터 유지를 위해 **Redux-Persist**를 활용하여 데이터 저장
