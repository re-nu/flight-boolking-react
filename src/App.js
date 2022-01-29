
import { useEffect, useState } from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import { Booking } from './Booking';
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
      </Switch>
    </div>
  );
}

export default App;
