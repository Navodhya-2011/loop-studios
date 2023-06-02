import './App.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__overlay onlyMobile"></div>
        <div className="header__container container">
          <nav className="header__nav">
            <a href="#" className="header__logo">
              <img src="./images/logo.svg" alt="logo" />
            </a>

            <a href="#" id="header__menu" className="header__menu onlyMobile">
              <span></span>
              <span></span>
              <span></span>
            </a>

            <div className="header__links">
              <ul className="header__links-box">
                <li className="header__links-item">
                  <a href="#">About</a>
                </li>
                <li className="header__links-item">
                  <a href="#">Careers</a>
                </li>
                <li className="header__links-item">
                  <a href="#">Events</a>
                </li>
                <li className="header__links-item">
                  <a href="#">Products</a>
                </li>
                <li className="header__links-item">
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header__hero">
            <h1 className="header__hero-text">
              Immersive experiences that deliver
            </h1>
          </div>
        </div>
      </header>

      <section className="feature">
        <div className="feature__container container container--middle">
          <div className="feature__image"></div>
          <div className="feature__description">
            <h3 className="feature__description__title">
              The leader in interactive VR
            </h3>
            <p className="feature__description__text">
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      <section className="creations">
        <div className="creations__container container container--middle">
          <div className="creations__header">
            <h2 className="creations__title">our creations</h2>
            <button className="onlyDesktop">see all</button>
          </div>

          <div className="creations__grid">
            <div className="creations__grid__item deep-earth">
              <h3 className="creations__grid__item__title">
                deep earth
              </h3>
            </div>

            <div className="creations__grid__item night-arcade">
              <h3 className="creations__grid__item__title">
                night arcade
              </h3>
            </div>

            <div className="creations__grid__item soccer-team">
              <h3 className="creations__grid__item__title">
                soccer team vr
              </h3>
            </div>

            <div className="creations__grid__item grid">
              <h3 className="creations__grid__item__title">
                the<br/>grid
              </h3>
            </div>

            <div className="creations__grid__item from-above">
              <h3 className="creations__grid__item__title">
                from up above vr
              </h3>
            </div>

            <div className="creations__grid__item pocket-borealis">
              <h3 className="creations__grid__item__title">
                pocket borealis
              </h3>
            </div>

            <div className="creations__grid__item curiosity">
              <h3 className="creations__grid__item__title">
                the curiosity
              </h3>
            </div>

            <div className="creations__grid__item fisheye">
              <h3 className="creations__grid__item__title">
                make it<br/>fisheye
              </h3>
            </div>
          </div>

          <div className="creations__footer">
            <button className="onlyMobile">see all</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container container container--middle">
          <div className="footer__container__group">
            <img src="./images/logo.svg" className="footer__logo" alt="logo" />

            <div className="footer__links">
              <ul className="footer__links__box">
                <li className="footer__links__item">
                  <a href="#">About</a>
                </li>
                <li className="footer__links__item">
                  <a href="#">Careers</a>
                </li>
                <li className="footer__links__item">
                  <a href="#">Events</a>
                </li>
                <li className="footer__links__item">
                  <a href="#">Products</a>
                </li>
                <li className="footer__links__item">
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__container__group">
            <div className="footer__social">
              <a href="#" className="footer__social__item">
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>

              <a href="#" className="footer__social__item">
                <i className="fab fa-twitter fa-2x"></i>
              </a>

              <a href="#" className="footer__social__item">
                <i className="fab fa-pinterest fa-2x"></i>
              </a>

              <a href="#" className="footer__social__item">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>

            <p className="footer__copy">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <script type="text/javascript" src="dist/js/index.js"></script>
      <script src="https://kit.fontawesome.com/16ca357d44.js" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;
