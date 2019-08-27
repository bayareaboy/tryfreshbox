import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <section id="welcome" class="welcome pt-100">
          <div class="container-fluid ">
            <div class="card border-dark mb-3 mt-150">
              <div class="card-body text-dark">
                <h3 class="card-title display-4"> Freshbox</h3>
                <p className="lead">Weekly Grocery Delivered Fresh</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
