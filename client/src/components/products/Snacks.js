import React, { Component } from "react";
import Slider from "react-slick";
import ItemCard from "./children/ItemCard";

class Snacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 25
    };
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            initialSlide: 1.5
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <section id="Snacks">
          <h4 className=" ml-55 mt-35">Snacks</h4>
          <Slider {...settings}>
            <div>
              <ItemCard
                image="/dist/images/showcase/snacks/clifbar.jpg"
                title="Snacks Mini Pack"
                price="16"
                link="/snacks-mini-pack"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/snacks/chipsahoy.jpg"
                title="Snacks Medium Pack"
                price="20"
                link="/snacks-medium-pack"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/snacks/chips.jpg"
                title="Snacks Large Pack"
                price="30"
                link="/snacks-large-pack"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/snacks/chobani.png"
                title="Morning Snack Pack"
                price="16"
                link="/snacks-morning-pack"
              />
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}

export default Snacks;
