import React, {useEffect} from 'react';
import M from "materialize-css";

import Header from "./containers/ui/Header";
import Body from "./containers/ui/Body";
import Footer from "./containers/ui/Footer";
import PropertyGrid from './containers/Property/Grid';
import Search from './containers/Search';

import './App.css';

const App = () => {

  let tabRef;
  useEffect(()=> {
    M.Tabs.init(tabRef);
  }, [tabRef])

  const renderTabs = () => {
    return (
      <>
        <ul id="tabs" class="tabs grey lighten-2" ref={tab => {tabRef = tab;}}>
          <li class="tab col s4 white">
            <a className="active" href="#tab_available">Available</a>
          </li>
          <li class="tab col s4 white">
            <a class="" href="#tab_upcoming">Upcoming</a>
          </li>
          <li class="tab col s4 white">
            <a className="" href="#tab_rented">Rented</a>
          </li>
        </ul>

        <div id="tab_available" class="col s12">
          <PropertyGrid type="available" />
        </div>
        <div id="tab_upcoming" class="col s12">
          <PropertyGrid type="upcoming" />
        </div>
        <div id="tab_rented" class="col s12">
          <PropertyGrid type="rented" />
        </div>
      </>
    );
  };

  return (
    <div className="App">
      <Header title="Real Estate" />
      <Body>
        <Search />
        {renderTabs()}
      </Body>
      <Footer />
    </div>
  );
}

export default App;