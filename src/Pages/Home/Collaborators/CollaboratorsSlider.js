import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LouisVuitton from "../../../Assets/BrandIcons/Luis-Vuiton-logo.png";
import Gucci from "../../../Assets/BrandIcons/Gucci-logo.png";
import YSL from "../../../Assets/BrandIcons/YSL_initials_logo-removebg-preview.png";
import Chanel from "../../../Assets/BrandIcons/Chanel-Logo.png";
import Givenchy from "../../../Assets/BrandIcons/Givenchy-logo.png";
import Hermes from "../../../Assets/BrandIcons/Hermes-logo.png";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <div className=" my-5 lg:my-16 bg-slate-100">
        <Slider className="" {...settings}>
          <div>
            <img
              className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-16 lg:mt-24"
              src={LouisVuitton}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40"
              src={Hermes}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-16 lg:mt-24"
              src={Gucci}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-16 h-20 md:w-28 md:h-32 lg:w-36 lg:h-40 mt-2"
              src={YSL}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-16 lg:mt-24"
              src={Givenchy}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40"
              src={Chanel}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
