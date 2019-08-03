import React from "react";
import { Accordion, Card } from "react-bootstrap";

export default function Faq() {
  return (
    <div>
      <section id="about" className="blog-area pb-100">
        <div className="container">
          <center>
            <h2 className="pb-30">Got some questions?</h2>
          </center>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="10">
                So what do I really get for such an amazing deal?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
                <Card.Body>
                  Every week our amazing freshbox driver will show up at your
                  doorstep and will deliver you a big box of fruits, vegetables
                  or mix of both. It's up to you what to receive, so go ahead
                  and explore our products.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Why should I subscribe to freshbox if I only want some bananas
                evey week?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  It's an amazingly better deal. Each box is full of fresh and
                  nutrious fruits and veggies straight from your local farmers.
                  You don't need to solve a math puzzle to figure this is a
                  better deal.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Do I always get amazing fruits and veggies?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  It's up to you. Some people love greens and veggies, while
                  others are in love with fruits. Whatever your taste is, we
                  deliver fresh of what you want each week.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                How often does this fresh happiness box show up next to my door?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  You tell us how often you want it. Most of our customers are
                  subscribed to weekly freshbox. You can do weekly, biweekly or
                  every other day. You decide ☺.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Why shouldn't I just buy these at grocery store?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Fresh from farm > fresh from grocery store. Get it? Also, have
                  you ever noticed the package of produce at a store is bigger
                  than actual product. Unless you are into fancy packaging and
                  half fresh produce, we don't see why you shouldn't buy from
                  us.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                Free delivery, amazing deal - so what's the catch?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  There isn't one. Seriously. We minimize our costs by using
                  little to no packaging, cut middlemen between you and farmers
                  and use amazing technology.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                How about cancellation fees or some hidden fees?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  No cancellation fees, no hidden fees and no fees at all,
                  except what you pay for your fresh produce. We hate fees as
                  much as you do, if not more.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                You are saying cancel/pause anytime, but how do I do it?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  Simple. <a href="tel:424-3220342">Mike</a> is your private
                  assistant. Simply text like "Skip this week", "Pause my plan"
                  etc. We made it so simple even kids can do it. No more going
                  around different dashboards and finding the buttons. You're
                  welcome.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
