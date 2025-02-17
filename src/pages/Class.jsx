import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";

const BASE_URL = "http://alihuseyn1-001-site1.otempurl.com/api/Classes";

const Class = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzNzMyN2M0LTIwNjUtNGQ2NS1iOTAzLWI0YjRkNDk4OWY3YiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzM5ODk1MTU4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxNzkvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MTc5LyJ9.ROcB7Hwl8a8looln7QHl2RHgDFHXwEXDQZmFCLxJa2o",
          },
        });
        setClassData(response.data);
      } catch (error) {
        console.error("Error fetching class:", error);
        setError("Ders bilgisi yüklenirken hata oluştu.");
      } finally {
        setLoading(false);
      }
    };
    fetchClass();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!classData) return <p>Ders bulunamadı</p>;

  return (
    <div className="class-page">
      <div className="container">
        <Header />
        <div className="class-detail">
          <div className="class-up">
            <h1>{classData.name}</h1>
          </div>

          <div className="class-flex">
            <div className="class-left">
              <div className="class-img">
                <img
                  src={
                    classData.imageUrl?.startsWith("http")
                      ? classData.imageUrl
                      : "path/to/default-image.jpg"
                  }
                  alt={classData.name}
                />
              </div>

              <div className="class-desc">
                <p>{classData.description}</p>

                <div className="clas-schedule">
                  <h3>Program:</h3>
                  <ul>
                    {classData.schedules && classData.schedules.length > 0 ? (
                      classData.schedules.map((schedule, index) => (
                        <li key={index}>
                          <strong>{schedule.dayOfWeek}</strong> -{" "}
                          {schedule.startTime}
                        </li>
                      ))
                    ) : (
                      <p>Program bulunmuyor</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="class-right">
              <div className="search">
                <p>Search</p>
                <form method="get" className="search-form">
                  <div class="custom-search-input">
                    <div class="input-group">
                      <input
                        type="text"
                        className="search-query form-control"
                        placeholder="Search here ..."
                      />
                      <span class="input-group-prepend">
                        <button class="btn btn-danger" type="submit">
                          <FaSearch />
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="links">
                <p>Categories</p>
                <ul>
                  <li>
                    <Link>Fitness (11)</Link>
                  </li>
                  <li>
                    <Link>Gym (11)</Link>
                  </li>
                </ul>
              </div>

              <div className="links">
                <p>Archives</p>

                <ul>
                  <li>
                    <Link>June 2017 (11)</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Class;
