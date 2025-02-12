import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import girl from "../../public/images/girl.png";
import { FaArrowsAltV, FaFemale, FaRunning, FaWheelchair } from "react-icons/fa";
import bckimg from "../../public/images/hero.png";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="background">
          <img src={bckimg} alt="" />
        </div>
        <Header />
        <div className="hero-caption">
          <div className="container">
            <h2>Hi This is Zacson</h2>
            <h5>Gym Trainer</h5>
            <Link>My courses</Link>
          </div>
        </div>
      </div>
      <div className="all-about">
        <div className="">
          <div className="all-flex">
            <div className="left">
              <img src={girl} alt="" />
              <h2>All About
Fitness</h2>
            </div>
            <div className="right">
              <div className="info-text">
                <FaArrowsAltV />
                <div className="text">
                  <h5>Weight Lifting</h5>
                  <p>
                    Weightlifting, also called Olympic weightlifting, is an
                    athletic discipline in the modern Olympic programme in which
                    the athlete attempts a maximum-weight single lift of a
                    barbell loaded with weight plates.
                  </p>
                </div>
              </div>
              <div className="info-text">
              <FaRunning />
                <div className="text">
                  <h5>Running</h5>
                  <p>
                  Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet…
                  </p>
                </div>
              </div>
              <div className="info-text">
              <FaFemale />
                <div className="text">
                  <h5>Yoga</h5>
                  <p>
                  Yoga, is a meditative means of discovering dysfunctional perception and cognition, as well as overcoming it for release from suffering, inner peace and salvation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
