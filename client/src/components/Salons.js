import React, { useState, useEffect} from "react"
import SalonCard from "./SalonCard"

function Salons(){

    const [salons, setSalons] = useState([])

    useEffect(() => {
        fetch("http://localhost:5555/salons")
        .then(respose => respose.json())
        .then(setSalons)
    
      }, [])

    const salonCards = salons.map((salon) =>{
        return <SalonCard key={salon.id} salon={salon} />
      })

    return(
        <>
        <h1>Salons</h1>
        {salonCards}
        </>
    )
}

export default Salons