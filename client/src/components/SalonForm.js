
export default function SalonForm({handleChange, handleSubmit, formData}){

    return(
        <>
        <form onSubmit={ handleSubmit }>
            <input value ={formData.name} name="name" onChange={handleChange} ></input>
            <label >name </label>

            <input value ={formData.location} name ="location" onChange={handleChange} ></input>
            <label >location </label>

            <input value ={formData.image} name = "image" onChange={handleChange} ></input>
            <label >image </label>

            <button type='submit'>Submit Salon</button>

        </form>
        </>
    )
}