


export default function ReviewCards({review}){
    return(
        <>
        <div>
        <h1>Rating: {review.rating}</h1>
        <p>Review: {review.content}</p>
        <img src = {review.imaage} alt = {review.review}/>
        <h2>By: {review.user.username}</h2>
        <h1>Salon:{review.salon.name}</h1>
        </div>
        </>
    )
}