import { Component } from "react";
import card1 from "../../assets/images/services/card-1.png";
import card2 from "../../assets/images/services/card-2.png";
import card3 from "../../assets/images/services/card-3.png";
import banner from "../../assets/images/services/banner.png";
import tel from "../../assets/icons/tel.svg";
import "./services.scss";

export class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="container services__container">
          <div className="title">
            <h1>Our Services</h1>
            <button>Explore services</button>
          </div>
          <div className="cards">
            <div className="card card1">
              <div className="top">
                <img src={card1} alt="" />
              </div>
              <div className="content">
                <h4>House cleaning</h4>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
            <div className="card card2">
              <div className="top">
                <img style={{}} src={card2} alt="" />
              </div>
              <div className="content">
                <h4>Office cleaning</h4>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
            <div className="card card3">
              <div className="top">
                <img src={card3} alt="" />
              </div>
              <div className="content">
                <h4>Industrial cleaning</h4>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="banner__pic">
              <img src={banner} alt="" />
            </div>
            <div className="banner__content">
              <h4>Covid-19 sanitization</h4>
              <h1>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h1>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="info">
                <button>Get a free quote</button>
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
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
