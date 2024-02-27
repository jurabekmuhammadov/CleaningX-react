import { Component } from "react";
import card1 from "../../assets/images/about/card-1.png";
import card2 from "../../assets/images/about/card-2.png";
import card3 from "../../assets/images/about/card-3.png";
import "./about.scss";

export class AboutSection extends Component {
  render() {
    return (
      <section id="about">
        <div className="container about__container">
          <div className="title">
            <h1>About Us</h1>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>
          <div className="cards">
            <div className="card card1">
              <div className="top">
                <img src={card1} alt="" />
              </div>
              <div className="content">
                <h4>1. Schedule online</h4>
                <p>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
            </div>
            <div className="card card2">
              <div className="top">
                <img src={card2} alt="" />
              </div>
              <div className="content">
                <h4>2. Pay online easily</h4>
                <p>
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
            </div>
            <div className="card card3">
              <div className="top">
                <img src={card3} alt="" />
              </div>
              <div className="content">
                <h4>3. Get your house cleaned</h4>
                <p>
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="btn1">Get a free quote</button>
            <button className="btn2">Explore services</button>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
