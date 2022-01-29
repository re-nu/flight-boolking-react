import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export function Booking(params) {
  const history = useHistory();
  const { _id } = useParams();
  console.log(_id);

  const [flight, setflight] = useState({});

  async function getFlightById() {
    const data = await fetch(
      `https://flight-booking-node.herokuapp.com/flight/${_id}`
    );
    const flght = await data.json();
    setflight(flght);
    console.log(flght);
  }

  useEffect(getFlightById, []);
  return (
    <div className="booking">
      <form className="booking-form">
        <TextField
          id="standard-basic"
          label="Full name (as per ID/passport)"
          variant="standard"
          required
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="Adhar card NO"
          variant="standard"
          required
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="from"
          variant="standard"
          required
          value={flight.from}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="to"
          variant="standard"
          required
          value={flight.to}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="price (IND))"
          variant="standard"
          required
          value={flight.price}
          margin="normal"
        />
        <div className="booking-button">
          <Button variant="outlined" onClick={() => history.goBack()}>
            back
          </Button>
          <Button variant="outlined">proceed to pay</Button>
        </div>
      </form>
    </div>
  );
}
