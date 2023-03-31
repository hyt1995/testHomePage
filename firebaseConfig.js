// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDHAB50Xesf_TLTdXIpm8GoqO_GfXKMBaY",
//     authDomain: "festivaldb-bb932.firebaseapp.com",
//     projectId: "festivaldb-bb932",
//     storageBucket: "festivaldb-bb932.appspot.com",
//     messagingSenderId: "796443855898",
//     appId: "1:796443855898:web:24ec72c7f8dd455af5d5a3",
//     measurementId: "G-QCTB1KYY3C"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'events');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }

// console.log("11111111111111", getCities(db))

// // // !getApps().length 확인은 Next.js가 어플리케이션을 리로드 할 때 실수로 SDK를 다시 초기화 하는 것을 방지할 수 있다.
// // // https://velog.io/@sanglee/Next.js-Firebase%EB%A1%9C-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0\