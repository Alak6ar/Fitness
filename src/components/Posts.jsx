import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Posts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.16,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  return (
    <div className="posts">
      <div className="container">
        <div className="post-up">
          <h1>LATEST POSTS</h1>
          <div className="line"></div>
        </div>

        <Slider {...settings}>
          <div>
            <div className="single-item">
              <div className="single-item-meta">
                <Link className="single-item-image">
                  <img
                    src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/class_02-410x200.jpg"
                    alt=""
                  />
                </Link>
              <div class="date">
                5 <br /> Jun <br /> 2019
              </div>
              </div>
              <div className="single-item-content">
                <h3><Link>How to Keep Your Body Healthy Over the Festive Season</Link></h3>
                <p>Qui tenetur doloribus laudantium. Expedita aut impedit in illum. Soluta id autem dolorem aliquid consequatur laudantium enim. Aliquam illo impedit omnis aut magnam sint consequatur.…</p>
              </div>
            </div>
          </div>
          <div>
            <div className="single-item">
              <div className="single-item-meta">
                <Link className="single-item-image">
                  <img
                    src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/class_02-410x200.jpg"
                    alt=""
                  />
                </Link>
              <div class="date">
                5 <br /> Jun <br /> 2019
              </div>
              </div>
              <div className="single-item-content">
                <h3><Link>How to Keep Your Body Healthy Over the Festive Season</Link></h3>
                <p>Qui tenetur doloribus laudantium. Expedita aut impedit in illum. Soluta id autem dolorem aliquid consequatur laudantium enim. Aliquam illo impedit omnis aut magnam sint consequatur.…</p>
              </div>
            </div>
          </div>
          <div>
            <div className="single-item">
              <div className="single-item-meta">
                <Link className="single-item-image">
                  <img
                    src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/class_02-410x200.jpg"
                    alt=""
                  />
                </Link>
              <div class="date">
                5 <br /> Jun <br /> 2019
              </div>
              </div>
              <div className="single-item-content">
                <h3><Link>How to Keep Your Body Healthy Over the Festive Season</Link></h3>
                <p>Qui tenetur doloribus laudantium. Expedita aut impedit in illum. Soluta id autem dolorem aliquid consequatur laudantium enim. Aliquam illo impedit omnis aut magnam sint consequatur.…</p>
              </div>
            </div>
          </div>
          <div>
            <div className="single-item">
              <div className="single-item-meta">
                <Link className="single-item-image">
                  <img
                    src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/class_02-410x200.jpg"
                    alt=""
                  />
                </Link>
              <div class="date">
                5 <br /> Jun <br /> 2019
              </div>
              </div>
              <div className="single-item-content">
                <h3><Link>How to Keep Your Body Healthy Over the Festive Season</Link></h3>
                <p>Qui tenetur doloribus laudantium. Expedita aut impedit in illum. Soluta id autem dolorem aliquid consequatur laudantium enim. Aliquam illo impedit omnis aut magnam sint consequatur.…</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Posts;
