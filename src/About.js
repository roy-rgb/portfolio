import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";

function About() {

  //Up To the btn
   window.addEventListener("scroll",function(){
     const upToTop = document.querySelector("a.bottom__to__top");
     upToTop.classList.toggle("active",window.scrollY > 0)
   });

  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About me</h1>

            <div className="about__meta">
              <p className="about__text p__color">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting.
              </p>
              <p className="about__text p__color">
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia.
              </p>
              <p className="about__text p__color">
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia.
              </p>
              <div className="about__button d__flex align__items_center">
                <a href="#">
                  <button className="about btn pointer">Download Cv </button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* UP TO TOP BTN */}
        <div className="bottom__to__top">
          <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
