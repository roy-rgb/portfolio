import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.jpg";
import Project2 from "./img/portfolio-2.jpg";
import Project3 from "./img/portfolio-3.jpg";


function Project() {
  return (
    <div className="project component__space">
      <div className="heaing">
        <h1 className="heading">My latest Project</h1>
        <p className="heading p__color">
          "There is no one who loves pain itself loreum ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration
        </p>
      </div>

        <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box  pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                              <h5 className="project__text">Development</h5>
                              <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="#" className="project__btn">View Details</a>                     
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box  pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                              <h5 className="project__text">Development</h5>
                              <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="#" className="project__btn">View Details</a>                     
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box  pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                              <h5 className="project__text">Development</h5>
                              <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="#" className="project__btn">View Details</a>                     
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box  pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                              <h5 className="project__text">Development</h5>
                              <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="#" className="project__btn">View Details</a>                     
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box  pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                              <h5 className="project__text">Development</h5>
                              <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="#" className="project__btn">View Details</a>                     
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box  pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                              <h5 className="project__text">Development</h5>
                              <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="#" className="project__btn">View Details</a>                     
                            </div>
                        </div>
                    </div>


                </div>

        </div>


    </div>
  );
}

export default Project;
