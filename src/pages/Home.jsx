import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import girl from "../../public/images/girl.png";
import { FaArrowsAltV, FaFemale, FaRunning } from "react-icons/fa";
import bckimg from "../../public/images/hero.png";
import { gsap } from "gsap";
import Classes from "../components/Classes";
import Client from "../components/Client";
import Trainers from "../components/Trainers";

const Home = () => {
  useEffect(() => {
    // h2 animasyonu
    gsap.from(".hero-caption h2", {
      x: -200,
      opacity: 0,
      duration: 1,
    });

    // h5 animasyonu, h2'den 0.3 saniye sonra başlasın
    gsap.from(".hero-caption h5", {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

    // a animasyonu, h5'ten 0.3 saniye sonra başlasın
    gsap.from(".hero-caption a", {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 0.6,
    });
  }, []);

  return (
    <div className="home-page">
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
              <h2>All About Fitness</h2>
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
                    Running is a method of terrestrial locomotion allowing
                    humans and other animals to move rapidly on foot. Running is
                    a type of gait characterized by an aerial phase in which all
                    feet...
                  </p>
                </div>
              </div>
              <div className="info-text">
                <FaFemale />
                <div className="text">
                  <h5>Yoga</h5>
                  <p>
                    Yoga, is a meditative means of discovering dysfunctional
                    perception and cognition, as well as overcoming it for
                    release from suffering, inner peace and salvation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Classes />
      <Client />
      <Trainers />

      <div className="vc_custom_1496653202303">
        <div className="container">
          <div className="vc_column-inner">
            <div className="bmi-flex">
              <div className="left">
                <h3 class="rt-title">CALCULATE YOUR BMI</h3>
                <p className="rt-subtitle">
                  Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy
                  nibh euismod tincidunt ut laoreet dolore magnaLorem ipsum
                  dolor sit amet
                </p>

                <form class="rt-bmi-form">
                  <div class="rt-bmi-radio">
                    <input id="rt-bmi-metric-1211861175" type="radio" name="rt-bmi-unit" value="metric" checked/>
                    <label for="rt-bmi-metric-1211861175">Metric Units</label>
                    <input id="rt-bmi-imperial-1211861175" type="radio" name="rt-bmi-unit" value="imperial"/>
                    <label for="rt-bmi-imperial-1211861175">Imperial Units</label>
                                  </div>

                     <div class="rt-bmi-fields">
                  <input type="text" class="rt-bmi-fields-metric" name="rt-bmi-weight" placeholder="Weight / kg"/>
                  <input type="text" class="rt-bmi-fields-metric" name="rt-bmi-height" placeholder="Height / cm"/>


                      </div>     
                    <input type="submit" class="rt-bmi-submit" value="CALCULATE"/>
                        <div className="rt-bmi-result">
                          Your BMI is: <span class="rt-bmi-val">15.31</span>, and weight status is: <span class="rt-bmi-status">Underweight</span>
                            </div>
                </form>
              </div>
              <div className="right">
                <table class="bmi-chart">
                  <tbody>
                    <tr><th>BMI</th><th>Weight Status</th></tr>
                      <tr><td>Below 18.5</td><td>Underweight</td></tr>
                      <tr><td>18.5 - 24.9</td><td>Normal</td></tr>
                      <tr><td>25 - 29.9</td><td>Overweight</td></tr>
                      <tr><td>30 and Above</td><td>Obese</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
