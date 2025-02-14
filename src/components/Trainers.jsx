import Slider from "react-slick";

const Trainers = () => {
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
    <div>
      <div className="trainers">
        <div className="container">
          <Slider {...settings}>
            <div>
das
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
