


export default function ReviewCards({review}){


    return(
        <>
        <div>
        <h1>Rating: {review.rating}</h1>
        <p>Review: {review.content}</p>
        <img src = {review.image} alt = {review.review}/>
        <h1>Salon:{review.salon.name}</h1>
        
        {/* <h2>By: {review.user.username}</h2> */}
        <h4>{review.created_at}</h4>
       
        </div>
        </>
    )
}
