import MenuHeader from "../layout/MenuHeader";

const CodeHealth = () => {
  return (
    <>
      <MenuHeader></MenuHeader>
      <p class="d-inline-flex gap-1">
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#class"
          role="button"
          aria-expanded="false"
          aria-controls="class"
        >
          Class
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#con"
          role="button"
          aria-expanded="false"
          aria-controls="con"
        >
          Controller
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#ser"
          role="button"
          aria-expanded="false"
          aria-controls="ser"
        >
          Service
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#rep"
          role="button"
          aria-expanded="false"
          aria-controls="rep"
        >
          Repository
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#err"
          role="button"
          aria-expanded="false"
          aria-controls="err"
        >
          ErrorCode
        </a>
        <a class="btn btn-primary" href="https://github.com/HyounjinKim/FBProject.git" target='blank' role="button">깃허브</a>
      </p>
      <div class="collapse" id="class">
        <h2>클래스</h2>
        <p>1. User Entity</p>
        <img
          src="/images/health/class1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/health/class2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. UserDto</p>
        <img
          src="/images/health/class3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/health/class4.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/health/class5.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="con">
        <h2>컨트롤러</h2>
        <p>1. 로그인 함수입니다.</p>
        <img
          src="/images/health/controller1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. 아이디 중복체크 함수입니다.</p>
        <img
          src="/images/health/controller2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p></p>
        <p>3. 회원가입 함수입니다.</p>
        <img
          src="/images/health/controller3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p></p>
        <p>4. 아이디/비밀번호 찾기 함수입니다.</p>
        <img
          src="/images/health/controller4.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p></p>
        <p>5. 비밀번호 수정 함수입니다.</p>
        <img
          src="/images/health/controller5.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="ser">
        <h2>서비스</h2>
        <p>1. 사용자가 있는지 확인하는 함수입니다.</p>
        <img
          src="/images/health/service1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. 회원가입 유효성 검사 후 저장하는 함수입니다.</p>
        <img
          src="/images/health/service2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/health/service3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>3. 아이디/비밀번호 찾는 함수입니다.</p>
        <img
          src="/images/health/service4.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>4. 아이디로 사용자 검색 후 비밀번호 수정하는 함수입니다.</p>
        <img
          src="/images/health/service5.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="rep">
        <h2>레파지토리</h2>
        <p>1. JPA를 사용했습니다.</p>
        <img
          src="/images/health/repository.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="err">
        <h2>에러코드</h2>
        <img
          src="/images/health/errorcode.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
    </>
  );
};

export default CodeHealth;
