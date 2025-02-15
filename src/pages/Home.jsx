import React, { useEffect, useState } from "react";
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

  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    let calculatedBMI = 0;
    
    if (unit === "metric") {
      const heightInMeters = height / 100;
      calculatedBMI = weight / (heightInMeters * heightInMeters);
    } else {
      calculatedBMI = (weight / (height * height)) * 703;
    }

    setBmi(calculatedBMI.toFixed(2));
    setStatus(getBMICategory(calculatedBMI));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    return "Obese";
  };

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
        <h3 className="rt-title">CALCULATE YOUR BMI</h3>
        <p className="rt-subtitle">
          Enter your weight and height to calculate your Body Mass Index (BMI).
        </p>

        <form className="rt-bmi-form" onSubmit={calculateBMI}>
          <div className="rt-bmi-radio">
            <label>
              <input
                type="radio"
                name="unit"
                value="metric"
                checked={unit === "metric"}
                onChange={() => setUnit("metric")}
              />
              Metric (kg, cm)
            </label>
            <label>
              <input
                type="radio"
                name="unit"
                value="imperial"
                checked={unit === "imperial"}
                onChange={() => setUnit("imperial")}
              />
              Imperial (lbs, in)
            </label>
          </div>

          <div className="rt-bmi-fields">
            <input
              type="number"
              placeholder={unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder={unit === "metric" ? "Height (cm)" : "Height (in)"}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="rt-bmi-submit">CALCULATE</button>
          
          {bmi && (
            <div className="rt-bmi-result">
              Your BMI is: <span className="rt-bmi-val">{bmi}</span>, and weight status is: <span className="rt-bmi-status">{status}</span>
            </div>
          )}
        </form>
      </div>

      <div className="rt-right">
        <table className="bmi-chart">
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
