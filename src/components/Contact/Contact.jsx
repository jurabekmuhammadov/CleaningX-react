import { Component } from "react";
import tel from "../../assets/icons/tel.svg";
import "./contact.scss";

export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container contact__container">
          <div className="contents">
            <div className="top">
              <h2>Contact Us</h2>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
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
            <div className="bottom">
              <h3>Not convinced yet?</h3>
              <p>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <button>Browse our packages</button>
            </div>
          </div>
          <form>
            <div className="fullname">
              <label htmlFor="fullname">Full name</label>
              <input id="fullname" type="text" />
            </div>
            <div className="phonenumber">
              <label htmlFor="phonenumber">Phone number</label>
              <input id="phonenumber" type="text" />
            </div>
            <div className="address">
              <label htmlFor="address">Address</label>
              <input id="address" type="text" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" />
            </div>
            <div className="requested">
              <label htmlFor="requested">Requested service</label>
              <input id="requested" type="text" />
            </div>
            <div className="day">
              <label htmlFor="day">Day of service</label>
              <input id="day" type="text" />
            </div>
            <div className="textarea">
              <label htmlFor="text">Add a note</label>
              <textarea id="text" type="text" cols={30} rows={4} />
            </div>
            <button type="submit">Submit message</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
