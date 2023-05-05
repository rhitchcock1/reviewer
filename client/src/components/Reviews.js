import React, { useState, useEffect, useContext} from "react"
import ReviewForm from "./ReviewForm"
import ReviewCard from "./ReviewCard"
import AdminReviewCard from "./AdminReviewCard"
import { UserContext } from "../context/user";




export default function Reviews(){

  const { user} = useContext(UserContext);
    const [reviews, setReviews] = useState([])
    const [search, setSearch] = useState("")

    function onDeleteReview(reviewToDelete){
      const updatedReviews= reviewArray.filter((review) =>review.id !== reviewToDelete.id)
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
        helpful:"",
        funny:"",
        image: "",
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
          // helpful: formData.helpful,
          // funny: 0,
          image: formData.image,
          user_id: user.id,
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
    // const searchReviews = reviews.filter((review) => 
    // review.content.toLowerCase().includes(search.toLowerCase()))
    
    function handleSChange(e){
      setSearch(e.target.value)
    }

    const reviewCards = reviews.map((review) =>{
        return <ReviewCard key={review.id} review={review} onUpdateReview={onUpdateReview}/>
      })
    const adminCards = reviews.map((review) =>{
      return <AdminReviewCard key={review.id} review={review} onUpdateReview={onUpdateReview} onDeleteReview= {onDeleteReview}/>
    })
    
      if (user.admin === "true" ){
        return(
          <div className="w-full bg-white py-16 px-4 ">
        <h1 className="text-4xl  text-[#8A1108] font-bold text-center uppercase">Admin Reviews</h1>
        <input type ="text" value = {search}
        onChange = {handleSChange} />
        <div className="grid lg:grid-cols-2">
        {adminCards}
        <ReviewForm formData = {formData} handleSubmit={handleSubmit} handleChange= {handleChange} />
        </div>
        </div>
         )
      }
      return(
        <div className="w-full bg-white py-16 px-4">
        <h1 className="text-4xl  text-[#8A1108] font-bold text-center uppercase">Reviews</h1>
       <div
       className="ml-8 mr-8 mt-4 flex flex-col justify-between bg-black  rounded-lg border-2 "
       >
        <input 
        className="text-center w-full h-12 font-bold text-[#720E07] border-none"
        type="text" 
        placeholder="search reviews"
        value = {search}
        onChange = {handleSChange}></input>
       </div>
        <div className="grid lg:grid-cols-2">
        {reviewCards}
        <ReviewForm formData = {formData} handleSubmit={handleSubmit} handleChange= {handleChange}/>
        </div>
        </div>
    )
}