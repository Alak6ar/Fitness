import { Link } from "react-router-dom";
import Slider from "react-slick";

const Trainers = () => {
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
    <div>
      <div className="trainers">
        <div className="container">
          <div className="trainers-up">
            <h1>EXPERT TRAINERS</h1>
            <div className="line"></div>
          </div>
          <Slider {...settings}>
            <div>
              <div className="vc-item-wrap">
                <div className="vc-item">
                    <div className="trainer-img">
                  <img src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/trainer_2.jpg" alt="" />{" "}
                    </div>
                  <div className="vc-overly">
                    <ul>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                    </ul>
                  </div>
                  <div className="vc-team-meta">
                    <h3><Link>Selina Stuart</Link></h3>
               <div>Fitness Trainer</div>   
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="vc-item-wrap">
                <div className="vc-item">
                    <div className="trainer-img">
                  <img src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/trainer_2.jpg" alt="" />{" "}
                    </div>
                  <div className="vc-overly">
                    <ul>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                    </ul>
                  </div>
                  <div className="vc-team-meta">
                    <h3><Link>Selina Stuart</Link></h3>
               <div>Fitness Trainer</div>   
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="vc-item-wrap">
                <div className="vc-item">
                    <div className="trainer-img">
                  <img src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/trainer_2.jpg" alt="" />{" "}
                    </div>
                  <div className="vc-overly">
                    <ul>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                    </ul>
                  </div>
                  <div className="vc-team-meta">
                    <h3><Link>Selina Stuart</Link></h3>
               <div>Fitness Trainer</div>   
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="vc-item-wrap">
                <div className="vc-item">
                    <div className="trainer-img">
                  <img src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/trainer_2.jpg" alt="" />{" "}
                    </div>
                  <div className="vc-overly">
                    <ul>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                    </ul>
                  </div>
                  <div className="vc-team-meta">
                    <h3><Link>Selina Stuart</Link></h3>
               <div>Fitness Trainer</div>   
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="vc-item-wrap">
                <div className="vc-item">
                    <div className="trainer-img">
                  <img src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/trainer_2.jpg" alt="" />{" "}
                    </div>
                  <div className="vc-overly">
                    <ul>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                    </ul>
                  </div>
                  <div className="vc-team-meta">
                    <h3><Link>Selina Stuart</Link></h3>
               <div>Fitness Trainer</div>   
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
