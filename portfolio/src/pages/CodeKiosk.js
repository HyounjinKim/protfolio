import MenuHeader from "../layout/MenuHeader";

const CodeKiosk = () => {
  return (
    <>
      <MenuHeader></MenuHeader>
      <p class="d-inline-flex gap-1">
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#design"
          role="button"
          aria-expanded="false"
          aria-controls="design"
        >
          TimeTableDesign
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#info"
          role="button"
          aria-expanded="false"
          aria-controls="info"
        >
          TimeTableInfoClass
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#main"
          role="button"
          aria-expanded="false"
          aria-controls="main"
        >
          MainClass
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#tabledb"
          role="button"
          aria-expanded="false"
          aria-controls="tabledb"
        >
          TimetableDBClass
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#flow"
          role="button"
          aria-expanded="false"
          aria-controls="flow"
        >
          실행영상
        </a>
        <a
          class="btn btn-primary"
          href="https://github.com/HyounjinKim/MovieKiosk.git"
          target="blank"
          role="button"
        >
          깃허브
        </a>
      </p>
      <div class="collapse" id="design">
        <h2>디자인</h2>
        <img
          src="/images/kiosk/tabledesign.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="info">
        <h2>시간표 클래스</h2>
        <img
          src="/images/kiosk/timetableclass.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="main">
        <h2>메인 클래스</h2>
        <p>1.DB의 시간표와 상영관 테이블을 가져오는 함수입니다.</p>
        <img
          src="/images/kiosk/createtable1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2.시간표, 상영관 테이블을 보여주는 버튼 함수입니다.</p>
        <img
          src="/images/kiosk/createtable2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p></p>
        <p>3. 시간표가 만들어져 있는지 확인하는 함수입니다.</p>
        <img
          src="/images/kiosk/createtable3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p></p>
        <p>4. 시간표를 만드는 함수입니다.</p>
        <img
          src="/images/kiosk/createtable4.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/kiosk/createtable5.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/kiosk/createtable6.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/kiosk/createtable7.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/kiosk/createtable8.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/kiosk/createtable9.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/kiosk/createtable10.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/kiosk/createtable11.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>5. 만들어진 시간표마다 좌석을 생성하는 함수입니다.</p>
        <img
          src="/images/kiosk/createtable12.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="tabledb">
        <h2>시간표 클래스</h2>
        <p>1. 해당 날짜의 시간표 유무를 확인하는 함수입니다.</p>
        <img
          src="/images/kiosk/timetabledb1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. 전체 시간표를 조회하는 함수입니다.</p>
        <img
          src="/images/kiosk/timetabledb2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p></p>
        <p>3. 전체 상영관을 조회하는 함수입니다.</p>
        <img
          src="/images/kiosk/timetabledb3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p></p>
        <p>4. 랜덤한 순서로 영화목록을 가져오는 함수입니다.</p>
        <img
          src="/images/kiosk/timetabledb4.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="flow">
        <h2>실행영상</h2>
        <video muted autoPlay loop>
            <source src="/images/kiosk/play.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default CodeKiosk;
