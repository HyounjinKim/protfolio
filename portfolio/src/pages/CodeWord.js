import MenuHeader from "../layout/MenuHeader";

const CodeWord = () => {
  return (
    <>
      <MenuHeader></MenuHeader>
      <p class="d-inline-flex gap-1">
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
          href="#quiz"
          role="button"
          aria-expanded="false"
          aria-controls="quiz"
        >
          QuizClass
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#quizdb"
          role="button"
          aria-expanded="false"
          aria-controls="quizdb"
        >
          QuizDBClass
        </a>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#flow"
          role="button"
          aria-expanded="false"
          aria-controls="flow"
        >
          실행순서
        </a>
        <a class="btn btn-primary" href="https://github.com/JjungEeunAae/green_mini.git" target='blank' role="button">깃허브</a>
      </p>
      <div class="collapse" id="main">
        <h2>메인클래스</h2>
        <img
          src="/images/word/wordmain.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="quiz">
        <h2>퀴즈클래스</h2>
        <p>1. 게임 실행과 점수 계산 함수입니다.</p>
        <img
          src="/images/word/wordquiz1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <img
          src="/images/word/wordquiz2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <img
          src="/images/word/wordquiz3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="quizdb">
        <h2>퀴즈DB클래스</h2>
        <p>1. 주제의 단어를 가져오는 함수입니다.</p>
        <img
          src="/images/word/wordquizdb1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. 단어의 힌트를 가져오는 함수입니다</p>
        <img
          src="/images/word/wordquizdb2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>3. 정답을 확인하는 함수입니다</p>
        <img
          src="/images/word/wordquizdb3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>4. 랭킹을 등록하는 함수입니다</p>
        <img
          src="/images/word/wordquizdb4.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
      <div class="collapse" id="flow">
        <h2>실행순서</h2>
        <p>1. 퀴즈클래스의 game함수로 갑니다.</p>
        <img
          src="/images/word/wordmain.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>2. 퀴즈DB클래스의 wordList함수로 갑니다.</p>
        <img
          src="/images/word/wordquiz1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>
          3. 퀴즈DB클래스의 wordList함수로 가서 해당 주제의 단어를 셔플해서
          리턴합니다.
        </p>
        <img
          src="/images/word/wordquizdb1.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>
          4. 퀴즈DB클래스의 hintList함수에서 해당 단어의 힌트를 셔플해서
          리턴합니다.
        </p>
        <img
          src="/images/word/wordquizdb2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>
          5. 받아온 힌트로 문제를 내고 퀴즈DB클래스의 wordGame함수로 정답 확인을
          합니다.
        </p>
        <img
          src="/images/word/wordquiz2.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>6. 정답이면 1을 리턴합니다.</p>
        <img
          src="/images/word/wordquizdb3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>
          7. 정답이면 score함수로 계산하고 점수를 알려준뒤 퀴즈DB클래스의
          rankInsert함수로 갑니다.
        </p>
        <img
          src="/images/word/wordquiz3.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
        <p>8. 랭킹 등록을 합니다.</p>
        <img
          src="/images/word/wordquizdb4.png"
          class="card-img-top"
          alt="..."
          style={{ width: "60%" }}
        />
        <p></p>
      </div>
    </>
  );
};

export default CodeWord;
