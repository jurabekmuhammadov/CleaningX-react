import { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import AboutSection from "../components/About/AboutSection";
import Services from "../components/Services/Services";
import Article from "../components/Article/Article";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutSection />
      <Services />
      <Article />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
