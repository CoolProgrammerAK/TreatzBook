import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

import HeroLogo from "../../assets/svgs/hero-doctors.svg";
import CompanyLogo from "../../assets/images/ca.png";
import Footer from "./Footer";
import ServiceItem from "./ServiceItem";

import ServicesData from "../../seeds/ServicesData";
const Landing = () => {
  const [navbar, setNavbar] = useState(false);

  // change background of navbar on scroll
  useEffect(() => {
    scrollTop();
    window.addEventListener("scroll", scrollTop);
    return () => {
      scrollTop();
    };
  }, []);

  const scrollTop = () => {
    setNavbar(window.scrollY >= 40);
  };

  return (
    <div>
      <div id="top"></div>
      <div className="center-content">
        <Navbar />

        {/* Hero section */}
        <div className="hero">
          {/* heading */}
          <div className="hero__main">
            <p className="hero__main--head-1">Appointments Made Easy</p>
            <p className="hero__main--head-2">
              Medical Care Services on your finger tips. <br></br>
              <span className="highlight">Find Doctors nearby</span>
            </p>
            <Link to="/login">
              <button className="button button--primary button--primary--small u-margin-top-medium">
                Make appointments
              </button>
            </Link>
          </div>
          {/* image */}
          <div className="hero__image">
            <img src={HeroLogo} alt="hero" />
          </div>
        </div>
      </div>

      <div id="about"></div>
      {/* About Section */}
      <div className="about">
        <h1 className="heading heading--primary center-content">
          <span className="highlight">About</span>
        </h1>
        <div className="about__main center-content">
          <div className="about__main-content">
            This is a project that is built as a part of curriculum for the {" "}
            <b>Software Engineering </b>
            course with aim of Transforming Healthcare through
            technology innovation. The submission is made by students of
           Concordia University, Montreal, Quebec <br />
            With TreatzBook, patients may schedule doctor's appointment online in real time, all from 
the comfort of their own homes. 
Medical professionals should be in close proximity to persons in need of treatment since 
they have the ability to save lives. As the number of individuals requiring medical 
attention rises, physicians must ensure that their services are easily accessible to patients. 
We must make use of the digital tools and channels available to us in this day and age to 
facilitate convenient appointment scheduling, as everything is accessible online.
          </div>
          <div className="about__main-logo">
            <img src={CompanyLogo} width={"100%"} height={"100%"} alt="company logo" />
          </div>
        </div>
      </div>

      <div id="services"></div>
      {/* Services */}
      <div className="services">
        <h1 className="heading heading--primary center-content">
          <span className="highlight">Services</span>
        </h1>
        <div className="services__main">
          {ServicesData &&
            ServicesData.map((service) => {
              return (
                <ServiceItem
                  key={service.index}
                  index={service.index}
                  name={service.name}
                  description={service.description}
                />
              );
            })}
        </div>
      </div>


      <div id="contact"></div>
      {/* Footer */}
      <Footer />

      {/* for scrolling to the top */}
      {navbar && (
        <a href="#top" className="scroll-top">
          <ChevronDoubleUpIcon className="scroll-top--icon" />
        </a>
      )}
    </div>
  );
};

export default Landing;
