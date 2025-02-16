import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const Client = () => {
  const [clients, setClients] = useState([]);
  const baseURL = "http://alihuseyn1-001-site1.otempurl.com/";
  const apiURL = "http://alihuseyn1-001-site1.otempurl.com/api/Client";

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzNzMyN2M0LTIwNjUtNGQ2NS1iOTAzLWI0YjRkNDk4OWY3YiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzM5ODA1NTgyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxNzkvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MTc5LyJ9.c_ug4--HneAK3StZ5qCEGPy1HwBhGfsCzhqrwkvcSL0  "
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(apiURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setClients(response.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error.response ? error.response.data : error.message);
      }
    };

    fetchClients();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="client">
      <div className="container">
        <h1>WHAT CLIENT'S SAY</h1>
        <Slider {...settings}>
  {clients.map((client) => (
    <div key={client.userId || client.id}> {/* Burada userId veya id kullanabilirsiniz */}
      <div className="rt-vc-item media">
        <div className="pull-left rt-vc-img">
          <img src={client.imageUrl} alt="" />
        </div>
        <div className="media-body rt-vc-content">
          <h3>
            {client.firstName} {client.lastName}
            <span className="rating">
              {Array.from({ length: client.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </span>
          </h3>
          <p>{client.description}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </div>
  );
};

export default Client;
