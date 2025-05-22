import React, { useState } from "react";
import "../styles/global.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

const Pricing = () => {
  const [focusedCard, setFocusedCard] = useState(null);

  const handleCardClick = (cardType) => {
    setFocusedCard(focusedCard === cardType ? null : cardType);
  };

  const handleKeyDown = (e, cardType) => {
    if (e.key === "Enter" || e.key === "") {
      e.preventDefault();
      handleCardClick(cardType);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section className="pricing">
      <p className="section-subtitle">PRICING PLANS</p>
      <h2 className="section-title">Choose your pricing policy</h2>
      <div className="pricing-tabs">
        <button className="active">Monthly plane</button>
        <button className="inactive">Annual Plane</button>
      </div>
      <div className="pricing-grid">
        <div
          className={`pricing-card ${focusedCard === "free" ? "focused" : ""}`}
          onClick={() => handleCardClick("free")}
          onKeyDown={(e) => handleKeyDown(e, "free")}
          role="button"
          tabIndex={0}
          aria-selected={focusedCard === "free"}
        >
          <h3>Free Plan</h3>
          <p>For Small teams or office</p>
          <ul>
            <li>
              <span className="check">
                <RiCheckboxCircleLine />
              </span>
              Ultimate access to all course, exercises and assesments
            </li>
            <li>
              <span className="check">
                <RiCheckboxCircleLine />
              </span>
              Free access for all kind of exercises corrections with downloads
            </li>
            <li>
              <span className="check">
                <RiCheckboxCircleLine />
              </span>
              Total assessment corrections with free downloa access system
            </li>
            <li>
              <span className="check">
                <MdCancel />
              </span>
              Unlimited download of courses on the mobile app contents
            </li>
            <li>
              <span className="check">
                <MdCancel />
              </span>
              Download and print courses and exercises in PDF
            </li>
          </ul>
          <button onClick={handleButtonClick}>Start free trial</button>
        </div>
        <div
          className={`pricing-card recommended ${
            focusedCard === "premium" ? "focused" : ""
          }`}
          onClick={() => handleCardClick("premium")}
          onKeyDown={(e) => handleKeyDown(e, "premium")}
          role="button"
          tabIndex={0}
          aria-selected={focusedCard === "premium"}
        >
          <span className="badge">Recommended</span>
          <h3>Premium</h3>
          <p>For startup enterprise</p>
          <p className="price">Starting from 49.99/mo</p>
          <ul>
            <li>
              <span className="check">
                <RiCheckboxCircleLine />
              </span>
              Ultimate access to all course, exercises and assesments
            </li>
            <li>
              <span className="check">
                <RiCheckboxCircleLine />
              </span>
              Free access for all kind of exercises corrections with downloads
            </li>
            <li>
              <span className="check">
                <RiCheckboxCircleLine />
              </span>
              Total assessment corrections with free downloa access system
            </li>
            <li>
              <span className="check">
                <RiCheckboxCircleLine />
              </span>
              Unlimited download of courses on the mobile app contents
            </li>
            <li>
              <span className="check">
                <RiCheckboxCircleLine />
              </span>
              Download and print courses and exercises in PDF
            </li>
          </ul>
          <button onClick={handleButtonClick}>Subscribe Now</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
