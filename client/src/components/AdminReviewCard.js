import React, {useState} from "react";

export default function AdminReviewCard({review, onUpdateReview, onDeleteReview }){
    const [likes, setLikes] = useState(review.rating)

    function handleDelete() {
      fetch(`http://localhost:5555/reviews/${review.id}`, {
        method: "DELETE",
      });
      onDeleteReview(review);
      alert("Review Deleted")
    }
    
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
        <button onClick={handleDelete}>Delete Rrview</button>
        </div>
        <br />
        </>

      )

}