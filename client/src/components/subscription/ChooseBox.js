import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Allfruits from "../boxes/Allfruits";
import Allveggies from "../boxes/Allveggies";
import Mix from "../boxes/Mix";

export default function ChooseBox() {
  return (
    <div>
      <div className="container">
        <div id="jumbotron" class="jumbotron jumbotron-fluid pt-125">
          <div class="container">
            <h3 class=" text-white">
              Happiness in the box,
              <br />
              delivered Fresh.
            </h3>
          </div>
        </div>
        <h4>Choose a box type</h4>
        <br />
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="fruits" title="All fruits">
            <Allfruits />
          </Tab>
          <Tab eventKey="veggies" title="All veggies">
            <Allveggies />
          </Tab>
          <Tab eventKey="mix" title="Mix fruits and veggies">
            <Mix />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
