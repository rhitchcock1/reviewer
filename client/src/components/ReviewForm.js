// import { UserContext } from "../context/user";
import React, {useState, useEffect} from "react";


export default function ReviewForm({handleChange, handleSubmit, formData}){
    const [salon, setSalon] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:5555/salons")
      .then ((r) => r.json())
      .then(setSalon)
    }, [])

    // const { user} = useContext(UserContext);
    return(
        <>
        <form onSubmit={ handleSubmit }>
            <input value ={formData.content} name = "content" onChange={handleChange} ></input>
            <label >Review </label>

            <input value ={formData.rating} name = "rating" onChange={handleChange} ></input>
            <label >Rating </label>

            {/* <input value ={user.id} name = "user_id" onChange={handleChange} ></input>
            <label >user_id </label> */}

            <input value ={formData.image} name = "image" onChange={handleChange} ></input>
            <label >image </label>

            {/* <input value ={formData.salon_id} name = "salon_id" onChange={handleChange} ></input> */}
         
           <select class="input-field" onChange={handleChange}>
             <option class="input-field" id="Loreal" value = {formData.salon_id = [1]} >Loreal</option> 
             <option class="input-field" id= "2" value = {formData.salon_id = 2}>Aveda</option> 
             <option class="input-field" id="East" value = {formData.salon_id = 3} >Olaplex</option> 
             {/* <option class="input-field" id="West" value = {formData.salon_id = 4}>Fantastic Sams</option>  */}
           </select>
            <label >salon_id </label>

            <button type='submit'>Submit Review</button>

        </form>
        </>
    )
}