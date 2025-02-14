import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://alihuseyn1-001-site1.otempurl.com/api/Trainer", {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzNzMyN2M0LTIwNjUtNGQ2NS1iOTAzLWI0YjRkNDk4OWY3YiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzM5NjUzNzI1LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxNzkvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MTc5LyJ9.GyWwIl4GWGjSMzcrQ3dNSGZfQ8LNEmTkkfw6c4FWX4s`,
          },
        });
        setTrainers(response.data);
      } catch (error) {
        console.error("Eğitmen verileri alınamadı:", error);
      }
    };
    fetchTrainers();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="trainers">
      <div className="container">
        <div className="trainers-up">
          <h1>EXPERT TRAINERS</h1>
          <div className="line"></div>
        </div>
        <Slider {...settings}>
          {trainers.map((trainer) => (
            <div key={trainer.id}>
              <div className="vc-item-wrap">
                <div className="vc-item">
                  <div className="trainer-img">
                    <img src={trainer.imageUrl} alt={trainer.firstName} />
                  </div>
                  <div className="vc-overly">
                    <ul>
                      <li>
                        <Link><FaFacebook /></Link>
                      </li>
                      <li>
                        <Link><FaInstagram /></Link>
                      </li>
                      <li>
                        <Link><FaYoutube/></Link>
                      </li>
                      <li>
                        <Link><FaSnapchat/></Link>
                      </li>
                    </ul>
                  </div>
                  <div className="vc-team-meta">
                    <h3><Link>{trainer.firstName} {trainer.lastName}</Link></h3>
                    <div>{trainer.positionName}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trainers;