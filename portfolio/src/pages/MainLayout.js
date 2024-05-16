import MenuHeader from "../layout/MenuHeader";
import React, { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    alert(`배운 시간이 길지는 않지만 여러 공부 많이 했습니다. \n다른 거 익히라고 하시면 익힐 준비 돼있습니다. 감사합니다.`)
  }, []);

  return (
    <>
      <MenuHeader></MenuHeader>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <a
            href="https://docs.google.com/presentation/d/1hhuQeSyYPJJyufvI9oBnJg7CHuC3jIXNDlKBl_AzY-4/edit?usp=sharing"
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
            href="https://www.canva.com/design/DAGD88aoI2o/qKP_fMt1sBowIevOI0IGRw/edit?utm_content=DAGD88aoI2o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <img src="/images/kiosk.png" class="card-img-top" alt="..." />
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
            href="https://www.canva.com/design/DAGBI5xv7Yo/JkNumkXW0Ovke96fGUI7tA/edit?utm_content=DAGBI5xv7Yo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
            href="https://www.canva.com/design/DAGD8y4IzzQ/_XwF-FIRqfo3TQGuYwRUKw/edit?utm_content=DAGD8y4IzzQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <img src="/images/alcohol.png" class="card-img-top" alt="..." />
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
