import logo from "../../assets/icons/logo.svg";
import style from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={`container ${style.header__container}`}>
        <div className={style.left}>
          <div className={style.logo}>
            <a className="logo__link" href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <nav className={style.navbar}>
            <ul className={style.nav__menu}>
              <li className={style.nav__item}>
                <a href="#">Home</a>
              </li>
              <li className={style.nav__item}>
                <a href="#">About</a>
              </li>
              <li className={style.nav__item}>
                <a href="#">Services</a>
              </li>
              <li className={style.nav__item}>
                <a href="#">Articles</a>
              </li>
              <li className={style.nav__item}>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.right}>
          <div className={style.cart}>
            <span>Cart (0)</span>
          </div>
          <button className={style.quote__btn}>Get a free quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
