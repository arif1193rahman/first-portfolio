import React from 'react';
import Award from"../../Images/award.png";
import CodeMan from"../../Images/code.jpg";


import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about">
        <div className="about-left">
          <div className="about-card bg"></div>
          <div className="about-card">
            <img
              src={CodeMan}
              alt=""
              className="about-img"
            />
          </div>
        </div>
        <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-sub">
            i am done small and big 15 projects last 6 months with Programming Hero
          </p>
          <p className="about-desc">
          Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React, Node JS, Express JS, Mongo DB.
          </p>
          {/* <div className="about-award">
            <img src={Award} alt="" className="about-award-img" />
            <div className="about-award-texts">
              <h4 className="about-award-title">International Design Awards 2021</h4>
              <p className="about-award-desc">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                and fugit.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    )
}

export default AboutMe
