import React, { Component } from "react";

class ItemCard extends Component {
  render() {
    const { title, price, description, image, link } = this.props;

    return (
      <div>
        <div
          class="card ml-50 mt-30 mr-25  shadow p-3 mb-5 bg-white rounded itemcard"
          style={{ width: "18rem" }}
        >
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body item-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              <small class="text-muted">{description}</small>
            </p>
            <p class="card-text lead">
              $<span className="pricetag">{price}</span>
            </p>
            <br />

            <a href={link} class="btn btn-dark text-center ">
              See details
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemCard;
