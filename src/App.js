import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Amazon from "./CardPage/Amazon";
import AmericanExpress from "./CardPage/American-Express";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import AmericanAirlines from "./CardPage/American-Airlines";
import AppleBees from "./CardPage/Applebees";
import AppleStore from "./CardPage/AppleStore";
import BestBuy from "./CardPage/BestBuy";
import Cabelas from "./CardPage/Cabelas";
import ChickFile from "./CardPage/ChickFile";
import Chipotle from "./CardPage/Chipotle";
import CineMark from "./CardPage/CineMark";
import Costco from "./CardPage/Costco";
import Disney from "./CardPage/Disney";
import DunkinDonuts from "./CardPage/DunkinDonuts";
import Ebay from "./CardPage/Ebay";
import Etsy from "./CardPage/Etsy";
import Fandango from "./CardPage/Fandango";
import Forever from "./CardPage/Forever";
import Fortnite from "./CardPage/Fortnite";
import './css/bootstrap.min.css'

function App() {
  return (
      <>
          <Header/>
          <BrowserRouter>
              <Switch>
                  <Route exact={true} path="/" component={Home}/>
                  <Route  path="/home" component={Home}/>
                  <Route path="/amazon" component={Amazon}/>
                  <Route path="/american-express" component={AmericanExpress}/>
                  <Route path="/american-airlines" component={AmericanAirlines}/>
                  <Route path="/applebees" component={AppleBees}/>
                  <Route path="/applestore" component={AppleStore}/>
                  <Route path="/bestbuy" component={BestBuy}/>
                  <Route path="/cabelas" component={Cabelas}/>
                  <Route path="/chickfile" component={ChickFile}/>
                  <Route path="/chipotle" component={Chipotle}/>
                  <Route path="/cinemark" component={CineMark}/>
                  <Route path="/costco" component={Costco}/>
                  <Route path="/disney" component={Disney}/>
                  <Route path="/dunkindonuts" component={DunkinDonuts}/>
                  <Route path="/ebay" component={Ebay}/>
                  <Route path="/etsy" component={Etsy}/>
                  <Route path="/fandango" component={Fandango}/>
                  <Route path="/forever" component={Forever}/>
                  <Route path="/fortnite" component={Fortnite}/>
              </Switch>
          </BrowserRouter>
          <hr/>
          <Footer/>
      </>
  );
}

export default App;
