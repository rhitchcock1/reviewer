import React from "react"

export default function SalonCard({salon, onDeleteSalon}){
   

    function handleDelete() {
        fetch(`http://localhost:5555/salons/${salon.id}`, {
          method: "DELETE",
        });
        onDeleteSalon(salon);
        alert("Salon Deleted")
      }

    return(
        <>
        <div>
        <h1>{salon.name}</h1>
        <h2>Salon Id: {salon.id}</h2>
        <h2>{salon.location}</h2>
        <img src = {salon.image} alt={salon.name} />
        <br />
        <button onClick = {handleDelete}>Delete Salon</button>
        </div>
        <br />
        </>
    )
}