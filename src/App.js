import "./App.css";
import React from "react";
import Movieapp from "./Movieapp";
import img from "./assets/backImage.jpg";
import { Route, Switch } from "react-router-dom";
import BandeAnnonce from "./BandeAnnonce";
function App() {
  return (
    <div className="App">
      {/* <Movieapp/> */}
      <Switch>
        <Route exact path="/" component={Movieapp} />
        <Route path="/bandeannonce/:id" component={BandeAnnonce}/>

      </Switch>
    </div>
  );
}

export default App;
