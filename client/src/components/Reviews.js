import React, { useState, useEffect} from "react"
import ReviewForm from "./ReviewForm"
import ReviewCard from "./ReviewCard"




export default function Reviews(){
    const [reviews, setReviews] = useState([])


    function onDeleteReview(reviewToDelete){
      const updatedReviews= reviews.filter((review) =>review.id !== reviewToDelete.id)
      setReviews(updatedReviews)
    }
    const [reviewArray, setReviewArray] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:5555/reviews")
      .then ((r) => r.json())
      .then(setReviewArray)
    }, [])
    function onUpdateReview(updatedReview) {
      const updatedReviews = reviewArray.map((review) =>review.id === updatedReview.id ? updatedReview : review)
      setReviewArray(updatedReviews)
    }
  
    useEffect(() => {
      fetch("http://localhost:5555/reviews")
      .then(respose => respose.json())
      .then(setReviews)
  
    }, [])

    const [formData, SetFormData] = useState({
        content:"",
        rating:"",
        user_id: "",
        salon_id: "",
  
      })
      
      function handleChange(e){
        SetFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }
      function handleSubmit(e){
        e.preventDefault()
        const newReview = {
          content: formData.content,
          rating: formData.rating,
          user_id: formData.user_id,
          salon_id: formData.salon_id,
        }
        fetch('http://localhost:5555/reviews', { // our specific link needs to be added
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newReview)
        })
        .then(response => response.json())
        .then(onAddReview)
      }
      function onAddReview(newReview){
          setReviews([...reviews, newReview])
  
      } 

    const reviewCards = reviews.map((review) =>{
        return <ReviewCard key={review.id} review={review} />
      })
    

    return(
        <>
        <h1>Reviews</h1>
        {reviewCards}
        <ReviewForm formData = {formData} handleSubmit={handleSubmit} handleChange= {handleChange}/>
        </>
    )
}