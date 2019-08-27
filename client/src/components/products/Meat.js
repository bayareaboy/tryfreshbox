import React, { Component } from "react";
import Slider from "react-slick";
import ItemCard from "./children/ItemCard";

class Meat extends Component {
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
        <section id="Meat">
          <div class="container-fluid " />

          <h4 className=" ml-55 mt-35 text-dark">Meat</h4>

          <Slider {...settings}>
            <div>
              <ItemCard
                image="/dist/images/showcase/meat/patty.png"
                title="Halal Chicken Breast Patties 10 LB"
                price="35"
                link="/halal-chicken-patties"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/meat/nuggets.png"
                title="Halal Chicken Breast Nuggets 10 LB"
                price="35"
                link="/halal-chicken-nuggets"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/meat/halalsausage.jpg"
                title="Halal Hoffy Premium Beef Franks 5 LB"
                price="30"
                link="/halal-beef-franks"
              />
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}

export default Meat;
