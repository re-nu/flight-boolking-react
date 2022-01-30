import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <td><IconButton aria-label="delete"
           onClick={()=>history.push("/edit-flight/"+_id)}>
        <EditIcon />
      </IconButton></td>
      <td><IconButton aria-label="delete"
         onClick={()=>history.push("/delete-flight/"+_id)}>
        <DeleteIcon />
      </IconButton></td>
    </tr>

  );
}
