const events = [
  {
    groupId: "0",
    title: "연세대학교",
    description: "누구나 오고 싶어하지만 누구나 오지 못하는 축제",
    contents: [
      {
        day: "2023-03-21",
        content: `뉴진스(21일) / 이하이(21일) / 사이언 도미닉(21일) / 우원재(21일) / 로꼬(21일) / 쿠기(21일) 각종 주점`
      },
      {
        day: "2023-03-22",
        content: `박재범(22일) / 홀리뱅(22일) / MVP(22일) 각종 주점`
      }
    ],
    place: "신촌의 대표 연세대 학교 운동장",
    color: '#135200',
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10")
  },
  {
    groupId: "1",
    title: "단국대학교",
    description: "누구나 오고 싶어하지만 누구나 오지 못하는 축제",
    contents: [
      {
        day: "2023-03-21",
        content: `뉴진스(21일) / 이하이(21일) / 사이언 도미닉(21일) / 우원재(21일) / 로꼬(21일) / 쿠기(21일) 각종 주점`
      },
      {
        day: "2023-03-22",
        content: `박재범(22일) / 홀리뱅(22일) / MVP(22일) 각종 주점`
      }
    ],
    place: "신촌의 대표 연세대 학교 운동장",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10")
  },
  {
    groupId: "2",
    title: "서울숲",
    description: "sns에서 유명한 바람의 언덕에서 찍는 사진이 예쁘다고 함 벚꽃뿐만 아니라 개나리, 튤립과 같은 봄꽃과 매화와 목련, 산수유 나무들도 있음",
    contents: [],
    place: "서울특별시 성동구 뚝섬로 273",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  {
    groupId: "3",
    title: "석촌호수",
    description: "유명한 석촌호수 벚꽃축제 다양한 문화예술공연, 전통예술공연, 음악회 등 다양한 볼거리 존재 ",
    contents: [
      {
        content: `롯데월드몰, 롯데월드, 송리단길, 방이동 먹자골목`
      }
    ],
    place: "서울특별시 송파구 송파나루길 206",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  {
    groupId: "4",
    title: "여의도 한강공원",
    description: "국회 둘레길을 따라 산책을 하는 코스, 밤에 야경과도 어우려져 낮부터 밤까지 있기에 좋은 서울 벚꽃 명소이다.",
    contents: [],
    place: "서울특별시 영등포구 여의동로 330",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  {
    groupId: "5",
    title: "남산",
    description: "길이 예쁘고 산책로가 잘 되어있어 사랑받는 벚꽃명소, 경사가 완만해 걷기가 편하다, 남산도서관부터 걸으면 멋진 벚꽃길을 만날 수 있다.",
    contents: [],
    place: "서울특별시 용산구 남산공원길 105",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  {
    groupId: "6",
    title: "서울 어린이대공원",
    description: "가족단위로 놀러가기 좋은 곳, 동물원, 놀이동산 등 다양한 놀거리와 볼거리가 많아 아이들을 데리고 가기 좋은 곳이다.",
    contents: [],
    place: "서울특별시 광진구 능동로 216",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  {
    groupId: "7",
    title: "정독도서관",
    description: "정독도서관 입구부터 벚꽃터널처럼 꾸며져 있어 사진 찍기에도 너무나 좋은 곳이라고 함, 산책이나 나들이에 좋은 곳이라고 함",
    contents: [],
    place: "서울특별시 종로구 북촌로5길 48",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  {
    groupId: "8",
    title: "창경궁 / 창덕궁",
    description: "사계절 내내 항상 아름다운 곳이지만 벚꽃과 함께할때도 역시 아름답다 건축물과 어우러지기에 색다른 볼거리를 제공한다.",
    contents: [],
    place: "서울특별시 종로구 창경궁로 185 창경궁 / 서울특별시 종로구 율곡로 99 창덕궁",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  {
    groupId: "9",
    title: "안양천",
    description: "목동교에서부터 안양천 길을 따라 가면 화려한 포토존이 있다. 긴 산책로를 따라 벚꽃이 펼쳐져있다.",
    contents: [],
    place: "영등포구 국회대로22길 20 인근 안양천",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  {
    groupId: "10",
    title: "보라매공원",
    description: "산책로가 잘꾸며져있어 산책하며 벚꽃을 구경하기에 좋은 서울 벚꽃명소",
    contents: [],
    place: "서울특별시 동작구 여의대방로20길 33",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  {
    groupId: "11",
    title: "경희대 서울캠퍼스",
    description: "입장제한이 있지 않아 방문하기 편하고, 규모도 크며 고풍스러운 캠퍼스 건물에 벚꽃이 피어있어 사진 찍기에 좋다",
    contents: [],
    place: "서울특별시 동대문구 경희대로 26",
    color: "#ffadd2",
    start: getDate("2023-03-28"),
    end: getDate("2023-03-28")
  },
  // 창원
  {
    groupId: "12",
    title: "창원 진해군항제",
    description: `3월 25일부터 4월 3일까지 열흘간 개최된다. 로망스다리로 알려진 여좌천은 1.5km구간으로 낭만 그자체라고 한다.
    경화역 철길 따라 늘어선 아름드리 벚나무에서 나풀나풀 흩날리는 새하얀 꽃비는 낭만 그자체라고 한다. 안민고개의 십리벚꽃실은 드라이브 코스로 일품이라고 하며
    제황산 공원에 올라 진해탑에서 시가지를 내려다보면 벚꽃 군락이 어우러진 평온한 도시 풍경을 내려다볼 수 있다.`,
    contents: [],
    place: "경상남도 창원시 진해구 장천동 175-1",
    color: "#ffadd2",
    start: getDate("2023-03-25"),
    end: getDate("2023-04-03")
  },
  // 전라도 경산도를 경계
  {
    groupId: "13",
    title: "하동 화개장터벚꽃축제",
    description: `일정 미확정! 전라도와 경상도를 경계로 하는 화개에서 벚꽃이 십리까지 화사하게 날린다고 한다.
    사랑하는 청춘남녀가 두 손을 꼭 잡고 걸으면 백년해로 한다고 하여 일명 혼례길이라고도 한다. 
    뿐만 아니라 화사한 볼거리와 다채로운 문화행사도 펼쳐진다고 한다.`,
    contents: [],
    place: "경상남도 하동군 화개면 119지역대 일대",
    color: "#ffadd2",
    start: getDate("2023-03-22"),
    end: getDate("2023-03-22")
  },
  // 경상도
  {
    groupId: "14",
    title: "부산 강서낙동강30리 벚꽃축제",
    description: `일정 미확정! 
    낙동강변 30리 벚꽃길, 대저생태공원 등 아름다운 자연과 어우러진 지역 대표축제로서 
    낙동강변을 따라 열리는 생태문화예술 축제이다.
    하얀 벚꽃 터널과 함께 전국 최대의 유채꽃을 함께 즐길 수 있다.`,
    contents: [],
    place: "부산광역시 도시철도 강서구청역 1번출구 대저생태공원-명지회센터 입구",
    color: "#ffadd2",
    start: getDate("2023-03-24"),
    end: getDate("2023-03-24")
  },
  {
    groupId: "15",
    title: "대구 이월드 블라썸 피크닉",
    description: `83타워와 이월드 전역을 무대로 여의도 윤중로보다 3배 많은 벚꽃나무들을 볼 수 있으며 
    전국에서 가장 빠른 벚꽃이며 최대 야간 벚꽃을 즐길 수 있다.
    축제기간동안 빨간 2층 버스, 회전목마, 전망대에서 보는 벚꽃스카이뷰 등 수백개의 포토존들이 가득하다.`,
    contents: [],
    place: "대구광역시 달서구 두류공원로 200",
    color: "#ffadd2",
    start: getDate("2023-03-18"),
    end: getDate("2023-04-09")
  },
  {
    groupId: "16",
    title: "경주 벚꽃축제",
    description: `벚꽃이 흩날리는 경주에서 2023 경주벚꽃축제가 3월 31일부터 4월 2일까지 대릉원 돌담길에서 개최됩니다.
    벚꽃과 어울리는 다양한 콘텐츠로 경주벚꽃축제를 즐기는 관광객들에게 즐거움을 선사합니다.`,
    contents: [
      {
        day: "홈페이지에서 확인하기",
        content: "https://garts.kr/index.do?menuId=00000151&ym=202303&searchEvtKindId=&searchStDy=&searchEnDy=&searchKeywd=&pageIndex=1&pageSize=12&mode=detl&evtId=EVT_10260&schedId=SCH_0010830"
      }
    ],
    place: "사이트에서 확인해주세요",
    color: "#ffadd2",
    start: getDate("2023-03-31"),
    end: getDate("2023-04-02")
  },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

const adbice = [
  "https://kr.trip.com/blog/collection-of-seoul-cherry-blossom-landmarks/",
  "https://kr.trip.com/blog/korea-cherry-blossom-flowering-period/",
  "https://ecosmarter.tistory.com/entry/2023-%EC%A0%84%EA%B5%AD-%EB%B2%9A%EA%BD%83-%EA%B0%9C%ED%99%94%EC%8B%9C%EA%B8%B0%EB%A7%8C%EA%B0%9C-%EC%8B%9C%EA%B8%B0-%EC%A0%84%EA%B5%AD-%EB%B2%9A%EA%BD%83-%EC%B6%95%EC%A0%9C-%EC%9D%BC%EC%A0%95-%EB%B2%9A%EA%BD%83-%EB%AA%85%EC%86%8C"
]

export default events;

// return (
//   <div>
//     <div>{i.day}</div>
//     <div>{i.content}</div>
//   </div>
// )