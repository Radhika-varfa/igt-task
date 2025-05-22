import React from "react";
import { IoIosStar } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tutorials = () => {
  const tutorials = [
    {
      title: "How to work with prototype design with adobe xd featuring tools ",
      reviews: "6,000 reviews",
      students: "2,538 students watched",
      image: "/image1.jpeg",
    },
    {
      title:
        "Create multiple artboard by using figma prototyping tools development ",
      reviews: "5,000 reviews",
      students: "3,000 students watched",
      image: "/image2.jpeg",
    },
    {
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      reviews: "4,000 reviews",
      students: "1,538 students watched",
      image: "/image4.jpeg",
    },
  ];

  const stats = [
    {
      value: "80K+",
      label: "We have more than students",
      color: "yellow",
    },
    {
      value: "150K+",
      label: "Free online tutorials videos avaialble",
      color: "orange",
    },
    {
      value: "90+",
      label: "Daily updated blog post maintain",
      color: "pink",
    },
    {
      value: "& 3M",
      label: "Job posted everydays with qualification",
      color: "purple",
    },
  ];

  return (
    <section className="tutorials">
      <div className="container">
        <p className="section-subtitle">QUALITY FEATURES</p>
        <h2 className="section-title">Tutorials that people love most</h2>

        <div
          style={{ width: "100%", padding: "0 20px", boxSizing: "border-box" }}
        >
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                style={{
                  padding: "0 10px",
                  padding: "0 10px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="tutorial-card"
                  style={{
                    margin: "0 10px",
                    background: "#fff",
                    borderRadius: "4px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="tutorial-card-image">
                    <div className="image-placeholder">
                      <img
                        src={tutorial.image}
                        alt={tutorial.title}
                        className="card-image"
                      />
                    </div>
                  </div>
                  <div className="tutorial-card-content">
                    <div className="rating-container">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>
                            <IoIosStar />
                          </span>
                        ))}
                      </div>
                      <span className="reviews">{tutorial.reviews}</span>
                    </div>
                    <h3>{tutorial.title}</h3>
                    <p className="students-watched">
                      <MdRemoveRedEye style={{ marginRight: "5px" }} />
                      {tutorial.students}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="stats-jackpot-container" style={{ marginTop: "80px" }}>
          <div className="stats-section">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card ${stat.color}`}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="jackpot-section">
            <div className="jackpot-content">
              <p className="section-subtitle">CORE FEATURES</p>
              <h2 className="section-title"> Smart jackpots</h2>
              <h3 className="jackpot-subtitle">
                that you may love this anytime & anywhere
              </h3>
              <p className="jackpot-description">
                Get your tests delivered at let home collect sample from the
                victory of the managments that supplies best design system
                guidelines ever. Get your tests delivered at home collect
                sample.
              </p>
              <button className="explore-button">Explore details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
