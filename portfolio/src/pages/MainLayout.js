import MenuHeader from "../layout/MenuHeader";
import React, { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    alert(
      `배운 시간이 길지는 않지만 여러 공부 많이 했습니다. \n다른 거 익히라고 하시면 익힐 준비 돼있습니다. 감사합니다.`
    );
  }, []);

  return (
    <>
      <MenuHeader></MenuHeader>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <a
            href="/ppt/mini.pdf"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div class="card" className="card">
              <img src="/images/wordgame.png" class="card-img-top" alt="..." />
              <button type="button" class="btn btn-info" className="ppt">
                PPT보기
              </button>
              <div class="card-body">
                <h5 class="card-title">콘솔 단어게임</h5>
                <p class="card-text">
                  첫번째 미니프로젝트. 자바로 만든 콘솔 단어게임 입니다.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="col">
          <a
            href="/ppt/kiosk.pdf"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <iframe
                class="card-img-top"
                height="395"
                src="https://www.youtube.com/embed/T4Q1MCM5Kyc?autoplay=1&mute=1"
                title="키오스크 녹화"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <button type="button" class="btn btn-info" className="ppt">
                PPT보기
              </button>
              <div class="card-body">
                <h5 class="card-title">영화관 키오스크</h5>
                <p class="card-text">
                  두번째 미니프로젝트. C#으로 만든 영화관 키오스크입니다.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="col">
          <a
            href="/ppt/health.pdf"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <img src="/images/health.png" class="card-img-top" alt="..." />
              <button type="button" class="btn btn-info" className="ppt">
                PPT보기
              </button>
              <div class="card-body">
                <h5 class="card-title">운동,식사 기록 서비스</h5>
                <p class="card-text">
                  첫번째 정규프로젝트. 프론트측이 협업을 하지 못하는 상황이라
                  스웨거 위주의 ppt입니다.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="col">
          <a
            href="/ppt/alcohol.pdf"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <iframe
                class="card-img-top"
                height="395"
                src="https://www.youtube.com/embed/uQVyiqXUuS8?autoplay=1&mute=1"
                title="알콜프리"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <button type="button" class="btn btn-info" className="ppt">
                PPT보기
              </button>
              <div class="card-body">
                <h5 class="card-title">알콜 쇼핑몰</h5>
                <p class="card-text">
                  세번째 프로젝트까지 이어지는 두번째 정규프로젝트. 처음
                  프론트와 협업한 프로젝트입니다.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
