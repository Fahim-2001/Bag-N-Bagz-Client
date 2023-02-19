import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LouisVuitton from "../../../Assets/BrandIcons/Luis-Vuiton-logo.png";
import Gucci from "../../../Assets/BrandIcons/Gucci-logo.png";
import AlexanderMcQueen from "../../../Assets/BrandIcons/Alexander-McQueen-Logo.png";
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
      <div className="mx-auto my-5 lg:my-16">
        <h1 className="text-3xl font-serif mb-8">Top Collaborators</h1>
        <Slider {...settings}>
          <div>
            <img className="w-40 h-40 mt-24" src={LouisVuitton} alt="" />
          </div>
          <div>
            <img className="w-40 h-40" src={Hermes} alt="" />
          </div>
          <div>
            <img className="w-40 h-40 mt-24" src={Gucci} alt="" />
          </div>
          <div>
            <img className="lg:w-48 lg:h-40" src={AlexanderMcQueen} alt="" />
          </div>
          <div>
            <img className="w-40 h-40 mt-24" src={Givenchy} alt="" />
          </div>
          <div>
            <img className="w-40 h-40" src={Chanel} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
