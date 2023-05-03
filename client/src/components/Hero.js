import React from "react";
import Typed from 'react-typed';
import { useNavigate } from "react-router-dom";
import {GiHairStrands} from 'react-icons/gi'

const Hero = () => {
    const navigate = useNavigate()
    return(
        <div className="text-white">
            <div className = "max-w-[800px] mt-[-75px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <p className="font-bold p-2 text-2xl">NEW YORK CITY'S HAIRSALON REVIEW WEBSITE</p>
                <h1 className=" text-[#720E07] md:text-7xl sm:text-4xl font-bold md:py-6">BUTCHERED</h1>
                {/* <p className ="" >
                <GiHairStrands size={40}  color="#720E07"/>
                </p> */}
               
                <div className="flex justify-center items-center">
                    <p className="md:text-4xl sm:text-4xl text-xl font-bold">Review salons that were </p>
                    <Typed 
                    className="text-[#720E07] md:text-4xl sm:text-4xl text-xl font-bold pl-2"
                    strings={["AMAZING!", "TERRIBLE!", "OVERPRICED!", "BEAUTIFUL!", "SO CHEAP!"]} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop
                    />
                </div>
                <p className="font-bold p-2 pt-10 text-2xl">Login In or Sign Up to let other New Yorkers know! </p>
                <button onClick={() => navigate("/login")} className="bg-[#720E07] w-[200px] rounded-md font-medium my-6 mx-auto py-2 ">LOGIN</button>
                <button onClick={() => navigate("/signup")} className=" bg-[#720E07] w-[200px] rounded-md font-medium my-2 mx-auto py-2 ">SIGN UP</button>
            </div>
        </div>
    )


}

export default Hero