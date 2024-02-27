import style from "./footer.module.css";
import logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className={`container ${style.footer__container}`}>
        <div className={style.footer__top}>
          <div className={style.card1}>
            <h3>Quality cleaning for your home</h3>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <div className={style.recs}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={style.card2}>
            <h4>Contact us</h4>
            <ul>
              <li>
                <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
              </li>
              <li>
                <p>(414) 567 - 2109</p>
              </li>
              <li>
                <p>contact@cleaning.com</p>
              </li>
            </ul>
          </div>
          <div className={style.card4}>
            <h4>Get a free estimate</h4>
            <span>(414) 567 - 2109</span>
            <p>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <button>Request a free quote</button>
          </div>
        </div>
        <div className={style.footer__bottom}>
          <a href="#" className={style.logo__link}>
            <img src={logo} alt="" />
          </a>
          <p>
            Copyright © Cleaning X | Designed by <a href="#">BRIX Templates</a>-
            Powered by <a href="#">Webflow</a> - <a href="#">Licenses</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
