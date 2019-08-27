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

// new checkout routes

import CheckoutAllFruitsMix from "./components/checkout/produce/CheckoutAllFruitsMix";
import CheckoutAllFruitsMix2 from "./components/checkout/produce/CheckoutAllFruitsMix2";
import CheckoutAllVeggiesMix from "./components/checkout/produce/CheckoutAllVeggiesMix";
import CheckoutEnergyMix from "./components/checkout/produce/CheckoutEnergyMix";
import CheckoutFruitsVeggiesMix from "./components/checkout/produce/CheckoutFruitsVeggiesMix";
import CheckoutFruitsVeggiesMix2 from "./components/checkout/produce/CheckoutFruitsVeggiesMix2";
import CheckoutLowCarbFruits from "./components/checkout/produce/CheckoutLowCarbFruits";
import CheckoutLowCarbMix from "./components/checkout/produce/CheckoutLowCarbMix";
import CheckoutLowCarbVeggies from "./components/checkout/produce/CheckoutLowCarbVeggies";
import CheckoutPostWorkoutMix from "./components/checkout/produce/CheckoutPostWorkoutMix";
import CheckoutSaladLovers from "./components/checkout/produce/CheckoutSaladLovers";

// Promo stuff
import Promo from "./components/checkout/Promo";
import LargeBoxPay from "./components/checkout/payments/PaymentsLarge";
import SmallBoxPay from "./components/checkout/payments/PaymentsSmall";
import Produce from "./components/products/Produce";
import DetailPage from "./components/products/children/DetailPage";

// Product imports
import SaladLoversMix from "./components/products/details/SaladLoversMix";
import AllVeggiesMix from "./components/products/details/AllVeggies";
import FruitsVeggiesMix from "./components/products/details/FruitsVeggiesMix";
import FruitsVeggiesMix2 from "./components/products/details/FruitsVeggiesMix2";
import PostWorkoutFruits from "./components/products/details/PostWorkoutFruits";
import AllFruitsMix2 from "./components/products/details/AllFruitsMix2";
import AllFruitsMix from "./components/products/details/AllFruitsMix";

import LowCarbMix from "./components/products/details/LowCarbMix";
import LowCarbVeggies from "./components/products/details/LowCarbVeggies";
import LowCarbFruits from "./components/products/details/LowCarbFruits";
import EnergyMix from "./components/products/details/EnergyMix";

import SnacksMini from "./components/products/details/snacks/SnacksMini";
import SnacksMedium from "./components/products/details/snacks/SnacksMedium";
import SnacksLarge from "./components/products/details/snacks/SnacksLarge";
import MorningSnacks from "./components/products/details/snacks/MorningSnacks";
import ChickenPatties from "./components/products/details/meat/ChickenPatties";
import ChickenNuggets from "./components/products/details/meat/ChickenNuggets";
import MeatFranks from "./components/products/details/meat/MeatFranks";

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
            <Route exact path="/payments-large-box" component={LargeBoxPay} />
            <Route exact path="/payments-small-box" component={SmallBoxPay} />
            <Route exact path="/experiment" component={Produce} />
            <Route exact path="/cool" component={DetailPage} />

            {
              // Product routes
            }

            <Route exact path="/salad-lovers-mix" component={SaladLoversMix} />

            <Route exact path="/energy-boost-mix" component={EnergyMix} />
            <Route exact path="/low-carb-mix" component={LowCarbMix} />
            <Route exact path="/low-carb-fruits" component={LowCarbFruits} />
            <Route exact path="/low-carb-veggies" component={LowCarbVeggies} />

            <Route exact path="/all-veggies-mix" component={AllVeggiesMix} />
            <Route
              exact
              path="/post-workout-fruits"
              component={PostWorkoutFruits}
            />
            <Route exact path="/all-fruits-mix" component={AllFruitsMix} />
            <Route exact path="/all-fruits-mix2" component={AllFruitsMix2} />
            <Route
              exact
              path="/fruits-veggies-mix"
              component={FruitsVeggiesMix}
            />
            <Route
              exact
              path="/fruits-veggies-mix2"
              component={FruitsVeggiesMix2}
            />
            {
              // Snacks
            }
            <Route exact path="/snacks-mini-pack" component={SnacksMini} />
            <Route exact path="/snacks-medium-pack" component={SnacksMedium} />
            <Route exact path="/snacks-large-pack" component={SnacksLarge} />
            <Route
              exact
              path="/snacks-morning-pack"
              component={MorningSnacks}
            />

            {
              // Meat
            }
            <Route
              exact
              path="/halal-chicken-patties"
              component={ChickenPatties}
            />
            <Route
              exact
              path="/halal-chicken-nuggets"
              component={ChickenNuggets}
            />
            <Route exact path="/halal-beef-franks" component={MeatFranks} />
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

            {
              // New checkout routes
              //               import CheckoutAllFruitsMix from "./components/checkout/produce/CheckoutAllFruitsMix";
              // import CheckoutAllFruitsMix2 from "./components/checkout/produce/CheckoutAllFruitsMix2";
              // import CheckoutAllVeggiesMix from "./components/checkout/produce/CheckoutAllVeggiesMix";
              // import CheckoutEnergyMix from "./components/checkout/produce/CheckoutEnergyMix";
              // import CheckoutFruitsVeggiesMix from "./components/checkout/produce/CheckoutFruitsVeggiesMix";
              // import CheckoutFruitsVeggiesMix2 from "./components/checkout/produce/CheckoutFruitsVeggiesMix2";
              // import CheckoutLowCarbFruits from "./components/checkout/produce/CheckoutLowCarbFruits";
              // import CheckoutLowCarbMix from "./components/checkout/produce/CheckoutLowCarbMix";
              // import CheckoutLowCarbVeggies from "./components/checkout/produce/CheckoutLowCarbVeggies";
              // import CheckoutPostWorkoutMix from "./components/checkout/produce/CheckoutPostWorkoutMix";
              // import CheckoutSaladLovers from "./components/checkout/produce/CheckoutSaladLovers";
            }
            <Route
              exact
              path="/checkout-allfruits-mix"
              component={CheckoutAllFruitsMix}
            />
            <Route
              exact
              path="/checkout-allfruits-mix2"
              component={CheckoutAllFruitsMix2}
            />
            <Route
              exact
              path="/checkout-allveggies-mix"
              component={CheckoutAllVeggiesMix}
            />
            <Route
              exact
              path="/checkout-energy-mix"
              component={CheckoutEnergyMix}
            />
            <Route
              exact
              path="/checkout-fruitsveggies-mix"
              component={CheckoutFruitsVeggiesMix}
            />
            <Route
              exact
              path="/checkout-fruitsveggies-mix2"
              component={CheckoutFruitsVeggiesMix2}
            />
            <Route
              exact
              path="/checkout-lowcarbfruits-mix"
              component={CheckoutLowCarbFruits}
            />
            <Route
              exact
              path="/checkout-lowcarbveggies-mix"
              component={CheckoutLowCarbVeggies}
            />
            <Route
              exact
              path="/checkout-lowcarb-mix"
              component={CheckoutLowCarbMix}
            />
            <Route
              exact
              path="/checkout-postworkout-mix"
              component={CheckoutPostWorkoutMix}
            />
            <Route
              exact
              path="/checkout-saladlovers-mix"
              component={CheckoutSaladLovers}
            />

            <Footer />
          </ScrollIntoView>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
