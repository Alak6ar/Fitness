import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";
import Footer from "../components/Footer";

const Trainer = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await axios.get(
          `http://alihuseyn1-001-site1.otempurl.com/api/Trainer/${id}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzNzMyN2M0LTIwNjUtNGQ2NS1iOTAzLWI0YjRkNDk4OWY3YiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzM5OTYzODk2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxNzkvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MTc5LyJ9.db72wSMcO6C8bzzi9N_ppUG6y3v_XB8XSYT-yGkM8Xw            `,
            },
          }
        );
        setTrainer(response.data);
      } catch (error) {
        console.error("Eğitmen bilgisi alınamadı:", error);
      }
    };
    fetchTrainer();
  }, [id]);

  if (!trainer) {
    return <p>Yüklenir...</p>;
  }

  return (
    <div className="trainer-page">
      <div className="container">
        <Header />
        <div className="trainer-detail">
          <div className="trainer-up">
            <h1>
              {trainer.firstName} {trainer.lastName}
            </h1>
          </div>

          <div className="trainer-flex">
            <div className="trainer-left">
              <img src={trainer.imageUrl} alt={trainer.firstName} />


              <div className="trainer-about">
                <p>Experience: <span>{trainer.experience}</span></p>
                <p>Age: <span>{trainer.age}</span></p>
                <p>Weight: <span>{trainer.weight}</span></p>
                <p>Email: <Link>{trainer.email}</Link></p>
                <p>Phone: <Link>{trainer.phoneNumber}</Link></p>
              </div>
              <div className="vc-overly">
                    <ul>
                      <li><Link><FaFacebook /></Link></li>
                      <li><Link><FaInstagram /></Link></li>
                      <li><Link><FaYoutube /></Link></li>
                      <li><Link><FaSnapchat /></Link></li>
                    </ul>
                  </div>
            </div>

            <div className="trainer-right">
              <div className="trainer-about">
              <h1>{trainer.firstName} {trainer.lastName}</h1>
              <p> {trainer.positionName}</p>
              <h4>Biography </h4>
              <p>{trainer.biography}</p>  </div>

              <div className="trainer-skills">
                <h3>Skills:</h3>
                <div className="skill">
                  <div className="progress">
                    <div className="lead">Yoga</div>
                    <div className="progress-bar wow fadeInLeft" style={{ width: `${trainer.age}%` }}>
                      <span>{trainer.age}%</span>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="lead">Boxing</div>
                    <div className="progress-bar wow fadeInLeft" style={{ width: `${trainer.weight}%` }}>
                      <span>{trainer.weight}%</span>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="lead">GYM</div>
                    <div className="progress-bar wow fadeInLeft" style={{ width: `${trainer.experience}%` }}>
                      <span>{trainer.experience}%</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Trainer;
