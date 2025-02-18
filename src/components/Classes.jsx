import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const BASE_URL = "http://alihuseyn1-001-site1.otempurl.com/api/Classes";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzNzMyN2M0LTIwNjUtNGQ2NS1iOTAzLWI0YjRkNDk4OWY3YiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzM5ODk1MTU4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxNzkvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MTc5LyJ9.ROcB7Hwl8a8looln7QHl2RHgDFHXwEXDQZmFCLxJa2o              ",
          },
        });
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.25,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="clases">
      <div className="container">
        <div className="clas-up">
          <h1>FEATURED CLASSES</h1>
          <div className="line"></div>
        </div>
        <Slider {...settings}>
          {classes.length > 0 ? (
            classes.map((classItem) => {
              const trainer =
                classItem.schedules.length > 0
                  ? classItem.schedules[0].trainerName
                  : "No Trainer Assigned";
              return (
                <div key={classItem.id} className="single-item">
                  <p to={`/classes/${classItem.id}`} className="single-item-content">
                    <div className="clases-img">
                      <img
                        src={classItem.imageUrl?.startsWith("http") ? classItem.imageUrl : "path/to/default-image.jpg"}
                        alt={classItem.name}
                        onError={(e) => { e.target.src = "path/to/default-image.jpg"; }}
                      />
                    </div>
                    <div className="overly">
                      <ul>
                        {classItem.schedules.length > 0 ? (
                          classItem.schedules.map((schedule, index) => (
                            <li key={index}>
                              <ul className="class-slider-ul-child">
                                <li>{`Gün: ${schedule.dayOfWeek}`}</li>
                                <li>{`${schedule.startTime}`}</li>
                              </ul>
                            </li>
                          ))
                        ) : (
                          <li>Program bulunmuyor</li>
                        )}
                      </ul>
                    </div>
                  </p>
                  <Link className="single-item-meta" to={`/classes/${classItem.id}`}>
                      <h3 >{classItem.name}</h3>
                    <span>
                      <FaUser /> {trainer}
                    </span>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No classes available</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Classes;
