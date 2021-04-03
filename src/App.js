import React, { useEffect } from "react";
import './css/App.css';
import Header from './Header.js';
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Payment from "./Payment.js";
import Login from "./Login.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from './firebase.js';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51IYyoOI3Jsc1asZn3cPPodda0MFOSjQTiq2sWljTqRsznsa2ebJFo51XzUAlUZBqSaV1kD9Tvf3sGrktMVaUGSda00seBeiY9F');
function App() {

  const[{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/checkout">
              <Header />
              <Checkout />
          </Route>

          <Route path="/payment">
              <Header />
              <Elements stripe= {promise}>
                <Payment />
              </Elements>
          </Route>

          <Route path="/">
              <Header />
              <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
