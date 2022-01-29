import { useEffect, useState } from 'react';
import { Flight } from './Flight';

export function Flights() {
  const [flights, setflights] = useState([]);

  async function getFlights() {
    const dta = await fetch("https://flight-booking-node.herokuapp.com/flights");
    const flghts = await dta.json();
    setflights(flghts);
    console.log(flghts);
  }

  useEffect(getFlights, []);
  return (
    <div className="flights">
        <div className='flights-head'>
            <h1 className='flight-head-left'>Flights Booking</h1>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5st8ZFRTWnPkJ3HLE6BTOOLqw3T9X-PJNjg&usqp=CAU'
        alt='flight'/>
        </div>
        
      <table>
        <tr>
          <th>Name</th>
          <th>From</th>
          <th>To</th>
          <th>Date</th>
          <th>departure time</th>
          <th>arrival time</th>
          <th>Duration</th>
          <th>Price</th>
        </tr>
        {flights.map(({ name, from, to, date, departure, arrive, Duration, price,_id }, index) => (
          <Flight 
          name={name} 
          from={from} 
          to={to} 
          date={date} 
          departure={departure} 
          arrive={arrive} 
          Duration={Duration} 
          price={price} 
          _id={_id}
          key={index} />
        ))}
      </table>
    </div>
  );
}
