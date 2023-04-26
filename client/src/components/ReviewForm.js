


export default function ReviewForm({handleChange, handleSubmit, formData}){
    return(
        <>
        <form onSubmit={ handleSubmit }>
            <input value ={formData.content} name = "content" onChange={handleChange} ></input>
            <label >Review </label>

            <input value ={formData.rating} name = "rating" onChange={handleChange} ></input>
            <label >Rating </label>

            <input value ={formData.user_id} name = "user_id" onChange={handleChange} ></input>
            <label >user_id </label>

            <input value ={formData.salon_id} name = "salon_id" onChange={handleChange} ></input>
            <label >salon_id </label>

            <button type='submit'>Submit Review</button>

        </form>
        </>
    )
}