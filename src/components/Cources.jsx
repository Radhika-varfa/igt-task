import React from "react";
import "../styles/global.css";
import { IoIosStar } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";

const Cources = () => {
  const courses = [
    {
      title:
        "Professional graphic design tutorial full course with exercise file ",
      description:
        "Get your tutorials delivered at let home collect sample from the victory of thee managments.",
      rating: "5.0(392 reviews)",
      students: "2,538 students watched",
      duration: "7 Video Classes | 4hrs",
    },
    {
      title: "Become ultimate photoshop expert within 30 days",
      description:
        "Get your tutorials delivered at let home collect sample from the victory of thee managments.",
      rating: "5.0(392 reviews)",
      students: "2,538 students watched",
      duration: "7 Video Classes | 4hrs",
      features: [
        {
          text: "Hoe to reduce file pixel dimentions without lossing quality ",
          completed: true,
        },
        {
          text: "Hoe to reduce file pixel dimentions without lossing quality ",
          completed: true,
        },
        {
          text: "Hoe to reduce file pixel dimentions without lossing quality ",
          completed: true,
        },
        {
          text: "Hoe to reduce file pixel dimentions without lossing quality ",
          completed: true,
        },
      ],
    },
    {
      title: "After effects animation tutorial with photoshop documents",
      description:
        "Get your tutorials delivered at let home collect sample from the victory of thee managments.",
      rating: "5.0(392 reviews)",
      students: "2,538 students watched",
      duration: "7 Video Classes | 4hrs",
    },
    {
      title: "Adobe illustrator vector art design mockup",
      description:
        "Get your tutorials delivered at let home collect sample from the victory of thee managments.",
      rating: "5.0(392 reviews)",
      students: "2,538 students watched",
      duration: "7 Video Classes | 4hrs",
    },
  ];

  return (
    <section className="courses">
      <p className="section-subtitle">QUALITY FEATURES</p>
      <h2 className="section-title">Popular Designing Course</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="play-icon">▶</div>
            <div className="course-content">
              <div className="course-meta">
                <div className="rating-container">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span>
                        <IoIosStar />
                      </span>
                    ))}
                  </div>
                  <span className="rating">{course.rating}</span>
                </div>
                <span className="students">
                  <MdRemoveRedEye style={{ marginRight: "5px" }} />
                  {course.students}
                </span>
              </div>
              <h3>{course.title}</h3>
              <p className="description">{course.description}</p>
              {/* <ul className="features">
                {course.features.map((feature, i) => (
                  <li key={i}>
                    <span
                      className={`checkbox ${
                        feature.completed ? "checked" : ""
                      }`}
                    >
                      {feature.completed ? <RiCheckboxCircleLine /> : ""}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="course-badge">{course.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cources;
