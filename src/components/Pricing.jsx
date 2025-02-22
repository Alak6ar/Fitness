import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div>
      <div className="pricing">
        <div className="container">
          <h1>OUR PRICING PLAN</h1>
          <div className="pricing-flex">
            <div className="pricing-card">
              <h2>LEVEL 1</h2>
              <p>$25</p>
              <span>6 Week Package</span>
              <ul>
                <li><FaCheckCircle />Unlimited Gym Access</li>
                <li><FaCheckCircle />6 Week Package</li>
                <li><FaCheckCircle />12 - 18 Training Sessions</li>
                <li><FaCheckCircle />Mobile App Access</li>
                <button>Register Now</button>
              </ul>
            </div>
            <div className="pricing-card">
              <h2>LEVEL 2</h2>
              <p>$55</p>
              <span>3 Month Package</span>
              <ul>
                <li><FaCheckCircle />2 XLEVEL Assessments</li>
                <li><FaCheckCircle />24 - 36 Training Sessions</li>
                <li><FaCheckCircle />2 Dietitian Consultation</li>
                <li><FaCheckCircle />6 Group Classes</li>
                <li><FaCheckCircle />Mobile App Access</li>
                <button>Register Now</button>
              </ul>
              <p className="best-offer">Best Offer</p>
            </div>
            <div className="pricing-card">
              <h2>LEVEL 3</h2>
              <p>$75</p>
              <span>6 Month Package</span>
              <ul>
                <li><FaCheckCircle />4 XLEVEL Assessments</li>
                <li><FaCheckCircle />48 - 72 Training Sessions</li>
                <li><FaCheckCircle />3 Dietitian Consultation</li>
                <li><FaCheckCircle />Unlimited Group Classes</li>
                <li><FaCheckCircle />Mobile App Access</li>
                <button>Register Now</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
