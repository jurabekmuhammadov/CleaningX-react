import { Component } from "react";
import heroImg from "../../assets/images/hero/hero-img.png";
import tel from "../../assets/icons/tel.svg";
import "./hero-section.scss";

export class HeroSection extends Component {
  render() {
    return (
      <section id="hero">
        <div className="container hero__container">
          <div className="hero__content">
            <h1>Quality cleaning for your home</h1>
            <p>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="info">
              <button className="hero__btn">Get a free quote</button>
              <div className="call">
                <button className="tel-icon">
                  <img src={tel} alt="" />
                </button>
                <div className="callUsNow">
                  <p>Call us now</p>
                  <span>(414) 567 - 2109</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__pic">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
