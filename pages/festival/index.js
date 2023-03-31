import { Breadcrumb, Layout, Menu, theme, Button, Modal, Avatar, List } from 'antd';
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid";
import events from "../../components/events"
import noticeListData from "../../components/notice"
import { collection, query, where, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
// collection : 
// getDoc : 하나만 가지고올때
// getDocs : 여러개 한번에 가지고 올때 
// addDoc : 데이터 추가하기 
// updateDoc : 데이터 수정
// doc : 도큐먼트 정보 (데이터 수정시 필요)s
// deleteDoc : 데이터 삭제 
import { firebaseObj } from '../../components/firebaseObject';

const { Header, Content, Footer } = Layout;

function FestivalHome() {

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [mTitle, setMTitle] = useState("미정...")
  const [eventNum, setventNum] = useState(0)
  const [modalText, setModalText] = useState("useState에 있는 아래에 내용이 나옵니다.");


  // 모달안에 렌더링 함수
  const showModal = (e) => {
    console.log(events[e.event._def.groupId].contents)
    setMTitle(e.event._def.title)
    setventNum(e.event._def.groupId)
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    // setTimeout(() => {
    setOpen(false);
    setConfirmLoading(false);
    // }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  // events컬렉션에 모든 데이터 가져오기
  // async function getCities(db) {
  //   const citiesCol = collection(db, 'events');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   return cityList;
  // }

  // 쿼리로 데이터 가져오기
  async function getQuery(db) {
    // const q = query(collection(db, "events"), where("one", "==", "one"))

    // const queryShot = await getDocs(q)

    // 단일 데이터 가져오기
    const unitData = doc(db, 'events', 'rallao');
    console.log("단일 데이터 :::::", unitData)

    // queryShot.forEach((doc) => {
    //   console.log("333333333333333", doc.id, " => ", doc.data());
    // });
  }

  // const firData = {
  //   color: "#23423423424234",
  //   end: "2023-03-28",
  //   id: 0,
  //   start: "2023-03-28",
  //   title: "연세대학교",
  // }

  // 쿼리로 데이터 추가하기
  // async function addDocToData(db) {
  //   const rrrDo = await addDoc(collection(db, "events"), firData)
  //   console.log("55555555555555 :::", rrrDo)
  // }

  // 데이터 수정하기
  // async function updateDocData(db) {
  //   const docRef = doc(db, "events", "firstshow");
  //   updateDoc(docRef, { word: "yeeeeeesss" });
  // }

  // 데이터 삭제하기
  // async function deleteDocData(db) {
  //   const docRef = doc(db, "events", "ddr");

  //   deleteDoc(docRef);
  // }

  // 컬렉션안의 컬렉션 조회하기
  // async function collectionInCollection(db) {
  //   const alovelaceDocumentRef = doc(db, 'events', 'alovelace');
  // }

  useEffect(() => {

    async function aaaaaaa() {
      // 전체 데이터 가져오기
      // const getFbDate = await getCities(firebaseObj)
      // console.log("222222222 firebase에서 데이터를 가져왔습니다.", getFbDate)

      // 검색을 위한 함수 실행
      const getQueryData = await getQuery(firebaseObj)

      // 데이터 추가하기
      // const addDocData = await addDocToData(firebaseObj)
      // console.log("666666666666666666 :::: ", addDocData)

      // 데이터 수정하기
      // const updateDocDateResult = await updateDocData(firebaseObj)

      // 데이터 삭제하기
      // const deleteDocDataResult = await deleteDocData(firebaseObj)

    }
    aaaaaaa()
  }, [])

  // 모달창에 들어갈 컨텐츠
  const display = <div>
    <div>{events[eventNum].title}</div>
    <div>{events[eventNum].description}</div>
    <div>{events[eventNum].place}</div>
    <div>
      {
        events[eventNum].contents?.map((i) => {
          return (
            <div key={i.day}>
              <div style={{ fontWeight: "bold" }}>{i.day}</div>
              <div>{i.content}</div>
            </div>
          )
        })
      }
    </div>
  </div>


  return (
    <div>
      <Layout>
        <Header
          style={{
            top: 0,
            zIndex: 1,
            width: '100%',
            height: "80px",
            opacity: "0.6",
            backgroundImage: "url(/cherry_blowsom.jpg)"
          }}
        >
          <div style={{ float: "left", width: "100%", margin: '0', color: "white", fontWeight: "bold", fontSize: "2rem" }}>
            우리들의 축제 일정
          </div>
          <Menu
            // theme="dark"
            mode="horizontal"
          />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: '0 50px',
            backgroundColor: "white"
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item style={{ fontSize: "1.6rem", fontWeight: "bold", }}>우리들의 축제 달력</Breadcrumb.Item>
          </Breadcrumb>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            // dateClick={showModal}
            eventClick={showModal}
            // eventContent={knowForHandle}
            locale="ko" // 2023년 3월
          />
          <div style={{ margin: "3% 0 3% 0" }}>
            <List
              itemLayout="horizontal"
              dataSource={noticeListData}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} style={{ marginTop: "46%" }} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: "black",
            color: "white",
            fontWeight: 500
          }}
        >
          <div style={{ marginTop: "10px" }}>학교축제 알림 사이트</div>
          <div style={{ marginTop: "10px" }}>e-mail : hanyt1995@gmail.com</div>
          <div style={{ marginTop: "10px" }}>작성자 : 한영탁</div>
        </Footer>
      </Layout>
      <Modal
        title={mTitle}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          {
            display
          }
        </div>
      </Modal>
    </div>
  );
}

export default FestivalHome


// https://fullcalendar.io/docs/react
// https://www.newline.co/@dmitryrogozhny/how-to-add-month,-week,-or-day-calendar-in-react-with-fullcalendar--7e10e8cf
// https://nowonbun.tistory.com/368
// https://fullcalendar.io/docs/web-component
// https://www.newline.co/fullstack-react
// https://velog.io/@conda/fullcalendar