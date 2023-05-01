import React, { useState, useEffect, useContext} from "react"
import SalonCard from "./SalonCard"
import SalonForm from "./SalonForm";
import { UserContext } from "../context/user";

function Salons(){
  const { user} = useContext(UserContext);
  const [salons, setSalons] = useState([])
  // const [salonsarray, setSalonsArray] = useState("")

  useEffect(() => {
    fetch("http://localhost:5555/salons")
    .then(respose => respose.json())
    .then(setSalons)
    
    }, [])

  const [formData, SetFormData] = useState({
      name:"",
      location:"",
      image: "",
   
      })
      
  function handleChange(e){
      SetFormData({
        ...formData,
        [e.target.name]: e.target.value
        })
      }
  function handleSubmit(e){
        e.preventDefault()
        const newSalon = {
          name: formData.name,
          location: formData.location,
          image: formData.image,
         
        }
        fetch('http://localhost:5555/salons', { // our specific link needs to be added
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newSalon)
        })
        .then(response => response.json())
        .then(onAddSalon)
      }
    function onAddSalon(newSalon){
        setSalons([...salons, newSalon])

    }

    const salonCards = salons.map((salon) =>{
        return <SalonCard key={salon.id} salon={salon} />
      })
    if (user.admin === "true" ){
        return(
        <>
        <h1>Admin Salons</h1>
        {salonCards}
        <SalonForm handleSubmit={handleSubmit} formData={formData} handleChange = {handleChange}/>
        </>
        )
    } return (
      <>
      <h1>Salons</h1>
      {salonCards}
      <SalonForm handleSubmit={handleSubmit} formData={formData} handleChange = {handleChange}/>
      </>

    )
}

export default Salons