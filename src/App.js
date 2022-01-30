
import { useEffect, useState } from 'react';
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { Switch,Route } from 'react-router-dom';
import { AddFlight } from './AddFlight';
import './App.css';
import { Booking } from './Booking';
import { Delete } from './Delete';
import { Edit } from './Edit';
import { Flights } from './Flights';

function App() {
  const [flights,setflights]=useState([])

  async function getFlights() {
    const dta=await fetch("https://flight-booking-node.herokuapp.com/flights")
    const flghts=await dta.json();
    setflights(flghts)
    console.log(flghts)
  }

  useEffect(getFlights,[])
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Flights/></Route>
        <Route path="/flight-booking/:_id"><Booking/></Route>
        <Route path="/edit-flight/:_id"><Edit/></Route>
        <Route path="/delete/:_id"><Delete/></Route>
        <Route path="/add-flight"><AddFlight/></Route>
      </Switch>
    </div>
  );
}

export default App;
