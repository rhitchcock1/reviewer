
export default function SalonCard({salon}){

    return(
        <>
        <h1>{salon.name}</h1>
        <h2>Salon Id: {salon.id}</h2>
        <h2>{salon.location}</h2>
        <img src = {salon.image} alt={salon.name} />
        <br />
        </>
    )
}


