import React, {useState} from "react";

export default function AdminReviewCard({review, onUpdateReview, reviewArray, setReviewArray}){
    const [likes, setLikes] = useState(review.rating)

    function handleLikeClick() {
        const updateObj = {
          rating: likes + 1,
        };
    
        fetch(`http://localhost:5555/reviews/${review.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateObj),
        })
          .then((r) => r.json())
          .then((updatedReview) => {
            setLikes(updatedReview.rating);
            onUpdateReview(updatedReview);
          });
        }
    function handleDisLikeClick() {
    
            const updateObj = {
              rating: likes - 1,
            };
        
            fetch(`http://localhost:5555/reviews/${review.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateObj),
            })
              .then((r) => r.json())
              .then((updatedReview) => {
                setLikes(updatedReview.rating);
                onUpdateReview(updatedReview);
              });
          }
    function onDeleteReview(reviewToDelete){
            const updatedReviews= reviewArray.filter((review) =>review.id !== reviewToDelete.id)
            setReviewArray(updatedReviews)
          }
    function handleDelete() {
            fetch(`http://localhost:5555/reviews/${review.id}`, {
              method: "DELETE",
            });
            onDeleteReview(review);
          }
      
    return (
        <>
        <div>
        <h1>Rating: {likes}</h1>
        <p>Review: {review.content}</p>
        <img src = {review.image} alt = {review.review}/>
        <h1>Salon:{review.salon.name}</h1>
        
        {/* <h2>By: {review.user.username}</h2> */}
        <h4>{review.created_at}</h4>
        <button onClick={handleLikeClick}> Increse Rating </button>
        <button onClick={handleDisLikeClick}> Decrese Rating </button>
        <button onClick={handleDelete}>Delete Rating</button>
        </div>
        </>

      )

}