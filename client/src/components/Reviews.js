import React, { useState, useEffect, useContext} from "react"
import ReviewForm from "./ReviewForm"
import ReviewCard from "./ReviewCard"
import AdminReviewCard from "./AdminReviewCard"
import { UserContext } from "../context/user";




export default function Reviews(){

  const { user} = useContext(UserContext);
    const [reviews, setReviews] = useState([])


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
        return <ReviewCard key={review.id} review={review} onUpdateReview={onUpdateReview}/>
      })
    const adminCards = reviews.map((review) =>{
      return <AdminReviewCard key={review.id} review={review} onUpdateReview={onUpdateReview} reviewArray= {reviewArray} setReviewArray={setReviewArray}/>
    })
    
      if (user.admin === "true" ){
        return(
          <>
        <h1>AdminCard</h1>
        {adminCards}
        <ReviewForm formData = {formData} handleSubmit={handleSubmit} handleChange= {handleChange}/>
        </>
         )
      }
      return(
        <>
        <h1>Reviews</h1>
        {reviewCards}
        <ReviewForm formData = {formData} handleSubmit={handleSubmit} handleChange= {handleChange}/>
        </>
    )
}