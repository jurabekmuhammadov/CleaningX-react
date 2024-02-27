import { Component } from "react";
import card1 from "../../assets/images/article/card-1.png";
import card2 from "../../assets/images/article/card-2.png";
import "./article.scss";

export class Article extends Component {
  render() {
    return (
      <section id="article">
        <div className="container article__container">
          <div className="line"></div>
          <div className="title">
            <h1>Articles & resources</h1>
            <div className="buttons">
              <button className="btn1">Get a free quote</button>
              <button className="btn2">Browse articles</button>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <img src={card1} alt="" />
              <div className="contents">
                <h3>
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="bottom">
                  <span>Jan 28, 2022</span>
                  <div className="rectangle"></div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={card2} alt="" />
              <div className="contents">
                <h3>
                  How to properly disinfect your phone and other electronics
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="bottom">
                  <span>Feb 1, 2022</span>
                  <div className="rectangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Article;
