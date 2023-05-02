import React from "react"

export default function SalonCard({salon, setSalonArray, salonArray}){
   

    function handleDelete() {
        fetch(`http://localhost:5555/reviews/${salon.id}`, {
          method: "DELETE",
        });
        onDeleteSalon(salon);
      }
      function onDeleteSalon(salonToDelete){
        const updatedSalons= salonArray.filter((salon) =>salon.id !== salonToDelete.id)
        setSalonArray(updatedSalons)
      }
  

    return(
        <>
        <h1>{salon.name}</h1>
        <h2>{salon.location}</h2>
        <img src = {salon.image} alt={salon.name} />
        <button onClick = {handleDelete}>Delete Salon</button>
        </>
    )
}