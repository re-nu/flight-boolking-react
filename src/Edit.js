import { useParams,useHistory } from "react-router-dom";
import { useEffect,useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as yup from "yup";



export function Edit(params) {
    const {_id}=useParams();
    console.log(_id)
    //initialy flight is empty object, after competing the fetch flight will be updated to fetched object
    const [flight,setflight]=useState(null);
    
    
    //called only onces , when Edit component is render  
    useEffect(()=>{
      async function getData() {
        const data= await fetch(`https://flight-booking-node.herokuapp.com/flight/${_id}`); //get specific id data
        const flght=await data.json();              //convert JSON data into json array                         
         setflight(flght); 
                                 //update produc
      }getData();                                 //call getData
    },[]);                                        //call only when app is render
    return flight ?<Update flight={flight} />:" ";   
}

function Update({flight}) {
    console.log("update",flight)
   const history=useHistory()
    async function edit(values) {
        console.log("edit ",values)
        // const update=await fetch(
        //     `https://flight-booking-node.herokuapp.com/flight/${flight._id}`,
        //     {
        //         method:"PUT",
        //         body:JSON.stringify(values),
        //         headers:{"Content-Type":"application/json",}
        //     }
        //     )

        //     history.push("/")
    }

    const validform=yup.object({
        name:yup
        .string().min(3,"atleast 3 character 🙂").required(),

        from:yup.string().min(3,"atleast 3 character 🙂").required(),

        to:yup.string().min(3,"atleast 3 character 🙂").required(),

        date:yup.string().required(),
        departure:yup.string().required(),
        arrive:yup.string().required(),
        Duration:yup.string().required(),
        price:yup.string().required()
    })

    const {handleSubmit,values,handleChange,handleBlur,errors,touched}=useFormik(
        {
            initialValues:{
                name:flight.name,
                from:flight.from,
                to:flight.to,
                date:flight.date,
                departure:flight.departure,
                arrive:flight.arrive,
                Duration:flight.Duration,
                price:flight.price
            },
            // call validform
            validationSchema:validform,
            onSubmit:(values)=>{
                console.log("on submit ",values)
                // call edit function
                edit(values)
            }
        }
    )

    return(
        <form className="add" onSubmit={handleSubmit}>
        <TextField 
          id="name" 
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          label="name" 
          variant="standard"
          helperText={errors.name&&touched.name&&errors.name}
         />
         <TextField 
          id="from" 
          name="from"
          value={values.from}
          onChange={handleChange}
          onBlur={handleBlur}
          label="from" 
          variant="standard"
          helperText={errors.from&&touched.from&&errors.from}
         />
         <TextField 
          id="to" 
          name="to"
          value={values.to}
          onChange={handleChange}
          onBlur={handleBlur}
          label="to" 
          variant="standard"
          helperText={errors.to&&touched.to&&errors.to}
         />
         <TextField 
          id="date" 
          name="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          label="date" 
          variant="standard"
          helperText={errors.date&&touched.date&&errors.date}
         />
         <TextField 
          id="departure" 
          name="departure"
          value={values.departure}
          onChange={handleChange}
          onBlur={handleBlur}
          label="departure" 
          variant="standard"
          helperText={errors.departure&&touched.departure&&errors.departure}
         />
         <TextField 
          id="arrive" 
          name="arrive"
          value={values.arrive}
          onChange={handleChange}
          onBlur={handleBlur}
          label="arrive" 
          variant="standard"
          helperText={errors.arrive&&touched.arrive&&errors.arrive}
         />
         <TextField 
          id="Duration" 
          name="Duration"
          value={values.Duration}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Duration" 
          variant="standard"
          helperText={errors.Duration&&touched.Duration&&errors.Duration}
         />
         <TextField 
          id="price" 
          name="price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          label="price" 
          variant="standard"
          helperText={errors.price&&touched.price&&errors.price}
         />
         <Button variant="outlined" type="submit">Save Changes</Button>
      </form>
    )
}
