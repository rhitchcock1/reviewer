


export default function ReviewCards({review}){
    return(
        <>
        <div>
        <h1>Rating: {review.rating}</h1>
        <p>Rating: {review.content}</p>
        <h2>By: {review.user.name}</h2>
        <h1>Salon:{review.salon.name}</h1>
        </div>
        </>
    )
}