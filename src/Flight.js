import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function Flight({ name, from, to, date, departure, arrive, Duration, price,_id }) {
    const history=useHistory();
  return (
    <tr>
      <td>{name}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{date}</td>
      <td>{departure}</td>
      <td>{arrive}</td>
      <td>{Duration}</td>
      <td>{price}</td>
      <td><Button variant="text"  onClick={()=>history.push("/flight-booking/"+_id)}>Book</Button></td>
    </tr>

  );
}
