import React, { Component } from "react";
import Slider from "react-slick";
import ItemCard from "./children/ItemCard";

class Produce extends Component {
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
        <section id="produce">
          <h3 className="text-center mt-25">Explore Products</h3>
          <h4 className=" ml-55 mt-35">Fresh Produce</h4>
          <Slider {...settings}>
            <div>
              <ItemCard
                image="/dist/images/showcase/boximage1.jpeg"
                title="Salad Lovers Mix"
                price="22"
                link="/salad-lovers-mix"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/boximage4.jpeg"
                title="Fruits & Veggies Mix"
                price="30"
                link="/fruits-veggies-mix2"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/boximage2.jpeg"
                title="All Veggies mix"
                price="22"
                link="/all-veggies-mix"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/fruits-small.jpg"
                title="All Fruits Mix"
                price="16"
                link="/all-fruits-mix"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/boximage5.jpeg"
                title="Fruits & Veggies Mix "
                price="22"
                link="/fruits-veggies-mix"
              />
            </div>

            <div>
              <ItemCard
                image="/dist/images/showcase/strawberries-small.jpg"
                title="Post Workout Fruits "
                price="16"
                link="/post-workout-fruits"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/lowcarbmix.jpg"
                title="Low Carb Mix"
                price="25"
                link="/low-carb-mix"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/lowcarbfruits.jpg"
                title="Low Carb Fruits mix"
                price="16"
                link="/low-carb-fruits"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/lowcarbveggies.jpg"
                title="Low Carb Veggies"
                price="16"
                link="/low-carb-veggies"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/energymix.jpg"
                title="Energy Boost Mix"
                price="16"
                link="/energy-boost-mix"
              />
            </div>
            <div>
              <ItemCard
                image="/dist/images/showcase/pears-small.jpg"
                title="All Fruits Mix"
                price="22"
                link="/all-fruits-mix2"
              />
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}

export default Produce;
