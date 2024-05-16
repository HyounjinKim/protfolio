import MenuHeader from "../layout/MenuHeader";

const CodeAlcohol = () => {
  return (
    <>
      <MenuHeader></MenuHeader>
      <p class="d-inline-flex gap-1">
      <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#conf"
          role="button"
          aria-expanded="false"
          aria-controls="conf"
        >
          Config
        </a>
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
          href="#yml"
          role="button"
          aria-expanded="false"
          aria-controls="yml"
        >
          yml
        </a>
        <a class="btn btn-primary" href="https://github.com/joungyw/alcoholshopping.git" target='blank' role="button">깃허브</a>
      </p>
      <div class="collapse" id="conf">
        <h2>Config</h2>
        <p>1. Cors에러 설정입니다.</p>
        <img
          src="/images/alcohol/conf1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. Jasypt 암호화 설정입니다.</p>
        <img
          src="/images/alcohol/conf2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>3. Jwt토큰 설정입니다.</p>
        <img
          src="/images/alcohol/conf3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/alcohol/conf4.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/alcohol/conf5.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>3. csrf에러 처리, 시큐리티 접근 허락, DB에 들어갈 사용자 비밀번호 암호화 설정입니다.</p>
        <img
          src="/images/alcohol/conf6.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="class">
        <h2>클래스</h2>
        <p>1. User Entity</p>
        <img
          src="/images/alcohol/class1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/alcohol/class2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. UserDto</p>
        <img
          src="/images/alcohol/class3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/alcohol/class4.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>3. 로그인 클래스</p>
        <img
          src="/images/alcohol/class5.png"
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
          src="/images/alcohol/controller1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. 회원가입 함수입니다.</p>
        <img
          src="/images/alcohol/controller2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p></p>
        <p>3. 카카오로그인 함수입니다.</p>
        <img
          src="/images/alcohol/controller3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="ser">
        <h2>서비스</h2>
        <p>1. 유효성 검사 후 회원가입하는 함수입니다.</p>
        <img
          src="/images/alcohol/service1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <img
          src="/images/alcohol/service2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. 프론트에서 받은 인가코드로 액세스토큰/리프레쉬토큰을 받아오는 함수입니다.</p>
        <p>JSON 디펜던시를 사용했습니다.</p>
        <img
          src="/images/alcohol/service3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="yml">
        <h2>yml</h2>
        <p>yml 파일을 개발/운영 환경으로 분리했습니다.</p>
        <p>1. application.yml</p>
        <img
          src="/images/alcohol/yml1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. application-dev.yml</p>
        <img
          src="/images/alcohol/yml2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p></p>
        <p>3. application-prod.yml</p>
        <img
          src="/images/alcohol/yml3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
    </>
  );
};

export default CodeAlcohol;
