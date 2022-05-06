import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { setInterval } from 'timers';

const Otp = () => {

const [seconds,setSeconds]=useState(59);
const [minutes,setaMinutes]=useState(0);



useEffect(() =>{
  
  setInterval(() =>{
    setSeconds(seconds-1)
    

  },1000)

}

,[seconds]);




    return (

<div className="min-h-full  mt-56 py-2 px-4 sm:px-4 lg:px-6">
    <div className="max-w-md w-full space-y-3">


    <div>
        
        <h5 className="mt-2  text-2xl font-extrabold text-gray-900">Login/Signup</h5>
        <p className="mt-1 text-center text-sm text-gray-600">
          
          
        </p>
      </div>

     


    <div>  <input
    type="number"
    className=" 
      form-control
      block
      w-full
     p-2
     
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "
    id="exampleTel0"
    
    placeholder="Enter OTP"
    

  />
    <div className='mt-2'>
    <span>OTP Expires In</span>
     <span> {minutes+"0"}:{seconds}</span>
     </div>
</div>
<div className="mt-3">

    
</div>

  <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-28 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <div className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
            </span>
            Login
          </button>

          <div className='mt-3'>
          <a className="no-underline  text-blue-600 " href='#'>Wrong Phone No? Go Back
</a>
</div>
       
        </div>
        
        <div className='timer'>
          <div className='container'>
            <div className='timer_container'>
            


            </div>



          </div>



        </div>

        </div>
        


    </div>
    
    
    )

}


export default Otp