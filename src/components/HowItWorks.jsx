import React from "react";
import "../styles/global.css";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Set disbursement Instructions",
      desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      step: "02",
      title: "Assembly retrieves funds from your account",
      desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      step: "03",
      title: "Assembly initiates disbursement",
      desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      step: "04",
      title: "Customer receives funds payment",
      desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
  ];
  return (
    <section className="how-it-works">
      <p className="section-subtitle">WHATS THE FUNCTION</p>
      <h2 className="section-title">Let's see how it works</h2>
      <div className="how-it-works-grid">
        {steps.map((item, index) => (
          <div key={index} className="how-it-works-step">
            <div className="step-number">{item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {index < steps.length - 1 && (
              <svg
                className={`connector ${index % 2 === 1 ? "flip" : ""}`}
                viewBox="0 0 150 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0, 30 C40, 0 95, 0 150,30"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="6"
                    refX="3"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0, 0 L6, 3 L0, 6" fill="#D1D5DB" />
                  </marker>
                </defs>
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
