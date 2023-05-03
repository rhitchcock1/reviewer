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
      < div className = "max-w-[900px] mx-auto py-10 px-20  ">
      <div className="w-full pb-3 px-2 py-2 shadow-2xl rounded-lg hover:scale-110 duration-300">
       
        <h1 className="text-2xl font-bold text-center py-2">Salon: {review.salon.name}</h1>
        <h1 className="text-xl font-bold px-1">Rating: {likes}</h1>
        <p className=" text-[#8A1108] font-bold text-xl px-1 pb-2">Review: {review.content}</p>
        <img id="rImg" className=" mx-auto "  src = {review.image} alt = {review.review}/>
        
        <h4 className="text-xl font-bold px-1 pt-1">Review Date/Time: {review.created_at}</h4>
        <button className="bg-[#8A1108] w-[200px] rounded-md font-medium my-2 mx-2 py-2 " onClick={handleLikeClick}> Increse Rating </button>
        <button className="bg-[#8A1108] w-[200px] rounded-md font-medium my-2 mx-8 py-2 " onClick={handleDisLikeClick}> Decrese Rating </button>
        <button className=" bg-[#8A1108] w-[200px] rounded-md font-medium my-2 mx-5 py-2 " onClick={handleDelete}>Delete Rrview</button>
        </div>
        </div>
      

      )

}