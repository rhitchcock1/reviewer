import React, {useState, useEffect} from "react";

function IndReview({review, reviewArray, setReviewArray}){

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
      function onUpdateReview(updatedReview) {
        const updatedReviews = reviewArray.map((review) =>review.id === updatedReview.id ? updatedReview : review)
        setReviewArray(updatedReviews)
      }


    return(
        <>
        <h1> {review.content}</h1>
        <h4>{likes}</h4>
        <button onClick={handleLikeClick}> Increse Rating </button>
        <button onClick={handleDisLikeClick}> Decrese Rating </button>
        <button onClick={handleDelete}>Delete Rating</button>
        </>

    )
}

export default IndReview