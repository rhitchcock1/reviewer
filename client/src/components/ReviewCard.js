


export default function ReviewCards({review}){


    return(
        < div className = "max-w-[800px] mx-auto py-10 px-20">
        <div className="w-full pb-3 px-2 py-2 shadow-2xl rounded-lg hover:scale-110 duration-300">
        <h1 className="text-2xl font-bold text-center py-2">Salon:{review.salon.name}</h1>
        <h1 className="text-xl font-bold px-1">Rating: {review.rating}</h1>
        <p className=" text-[#8A1108] font-bold text-xl px-1 pb-2">Review: {review.content}</p>
        <img id="rImg" className=" mx-auto " src = {review.image} alt = {review.review}/>
        <h4 className="text-xl font-bold px-1 pt-1">Review Date/Time: {review.created_at}</h4>
       
        </div>
        </div>
    )
}
