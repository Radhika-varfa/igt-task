import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { IoIosStar } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";

const FreeTutorials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Create multiple figma prot",
      reviews: "5.0(392 reviews)",
      stats: "1037 students watched",
      label: "Free tutorial",
      image: "/image1.jpeg",
    },
    {
      title: "Convert your web layout easily ",
      reviews: "5.0(392 reviews)",
      stats: "500 students watched ",
      label: "Popular tutorial",
      image: "/image2.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="free-tutorials">
      <div className="free-tutorials-image">
        <div className="cards-container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${index === activeIndex ? "active" : ""}
             ${index === (activeIndex + 1) % cards.length ? "next" : ""}
            `}
            >
              <div className="card-image-container">
                <img src={card.image} alt={card.title} className="card-image" />
              </div>
              <div className="card-content">
                <div className="rating-container">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span>
                        <IoIosStar />
                      </span>
                    ))}
                  </div>
                  <span className="card-id">{card.reviews}</span>
                </div>

                <h3>{card.title}</h3>
                <p className="card-price">{card.price}</p>
                <p className="card-description">{card.description}</p>
                <p className="card-stats"> 
                  <MdRemoveRedEye style={{ marginRight: "5px" }} />
                  {card.stats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="free-tutorials-content">
        <p style={{ color: "chocolate", fontSize: "12px" }}>FREE TUTORIALS</p>
        <h2>More than thousand of free tutorial upload every weeks</h2>
        <p>
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <button
          className="explore-button"
          style={{ border: "2px solid chocolate" }}
        >
          Explore details
        </button>
      </div>
    </section>
  );
};

export default FreeTutorials;
