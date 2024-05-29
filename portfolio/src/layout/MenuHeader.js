const MenuHeader = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" className='container-fluid'>
          <a class="navbar-brand" href="/" className='navbar-brand'>
            김형진
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="https://cherry-beak-8a7.notion.site/b3357e53ccfc4530abe0bc214d0f0467?pvs=4" target='blank'>
                  노션
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="https://github.com/HyounjinKim" target='blank'>
                  깃허브
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Code
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/code/word">
                      단어게임
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/code/kiosk">
                      키오스크
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/code/health">
                      살빼조
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/code/alcohol">
                      알콜프리
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuHeader;
