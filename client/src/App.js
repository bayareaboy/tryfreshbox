import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollIntoView from "./ScrollIntoView";

// Redux
import { Provider } from "react-redux";
import store from "./store";
// pages
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Privacy from "./components/pages/Privacy";
import Businesses from "./components/pages/Businesses";
import Contact from "./components/pages/Contact";
import Media from "./components/pages/Media";
import Ourstory from "./components/pages/Ourstory";
import Partnerships from "./components/pages/Partnerships";
import LandingPage from "./components/pages/LandingPage";
import ChooseBox from "./components/subscription/ChooseBox";

// checkout
import CheckoutSmallFruits from "./components/checkout/CheckoutSmallFruits";
import CheckoutSmallVeggies from "./components/checkout/CheckoutSmallVeggies";
import CheckoutSmallMix from "./components/checkout/CheckoutSmallMix";
import CheckoutMediumFruits from "./components/checkout/CheckoutMediumFruits";
import CheckoutMediumVeggies from "./components/checkout/CheckoutMediumVeggies";
import CheckoutMediumMix from "./components/checkout/CheckoutMediumMix";
import CheckoutLargeFruits from "./components/checkout/CheckoutLargeFruits";
import CheckoutLargeVeggies from "./components/checkout/CheckoutLargeVeggies";
import CheckoutLargeMix from "./components/checkout/CheckoutLargeMix";
import Promo from "./components/checkout/Promo";

import Preloader from "./components/utils/Preloader";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ScrollIntoView>
            <Preloader />
            <Header />

            <Route exact path="/" component={LandingPage} />
            <Route exact path="/freshbox-business" component={Businesses} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/ourstory" component={Ourstory} />
            <Route exact path="/partnerships" component={Partnerships} />
            <Route exact path="/choose-a-box-type" component={ChooseBox} />
            <Route exact path="/promo50" component={Promo} />

            {
              // checkout routes
            }
            <Route
              exact
              path="/checkout-small-fruits"
              component={CheckoutSmallFruits}
            />
            <Route
              exact
              path="/checkout-small-veggies"
              component={CheckoutSmallVeggies}
            />
            <Route
              exact
              path="/checkout-small-mix"
              component={CheckoutSmallMix}
            />
            <Route
              exact
              path="/checkout-medium-fruits"
              component={CheckoutMediumFruits}
            />
            <Route
              exact
              path="/checkout-medium-veggies"
              component={CheckoutMediumVeggies}
            />
            <Route
              exact
              path="/checkout-medium-mix"
              component={CheckoutMediumMix}
            />
            <Route
              exact
              path="/checkout-large-fruits"
              component={CheckoutLargeFruits}
            />
            <Route
              exact
              path="/checkout-large-veggies"
              component={CheckoutLargeVeggies}
            />
            <Route
              exact
              path="/checkout-large-mix"
              component={CheckoutLargeMix}
            />

            <Footer />
          </ScrollIntoView>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
