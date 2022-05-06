import { useEffect, useState } from "react";
import type { NextPage } from "next";

import axios from "axios";

const Login:NextPage = () => {
  const [phone,setPhone] = useState<string>('');
  const [otp,setOTP] = useState<string>('');
  const [errors,setErrors] = useState<any>({phone:"",otp:""})
  const [loading,setLoading] = useState<boolean>(false)
  const [page,setPage] = useState<number>(0);

  const sendOTP = async () => {
    setLoading(true)
    if(phone.length != 10) {
      setErrors({phone:"Enter a valid phone no"})
    return
    }
    
  try {
    await axios.post(process.env.NEXT_PUBLIC_API_URL+'/otp/send',{
      phone:phone
    })
    setPage(1)

  } catch(err) {
    console.log(err)
  }
  }
  const verifyOTP = async () => {
    setLoading(true)

  try {
    await axios.post(process.env.NEXT_PUBLIC_API_URL+'/otp/verify',{
      phone:phone,
      otp:otp
    })
    
   console.log('success') 
  } catch(err) {
    setLoading(false)
    setErrors({...errors,otp:"There is a problem with the otp"})
  }
  }
  return (
    <div className='min-h-full  mt-44 py-2 px-4 sm:px-4 lg:px-6'>
      <div className='max-w-md w-full space-y-3'>
        <div>
          <h5 className='mt-4  text-2xl font-extrabold text-gray-900'>
            Login/Signup
          </h5>
          <p className='mt-1 text-center text-sm text-gray-600'></p>
        </div>

        {page===0 ? (
              <div className='w-full flex flex-col items-start'>
                <label
                  htmlFor='exampleTel0'
                  className=' font-medium
form-label inline-block mb-2 text-gray-700'>
                  Phone
                </label>
                <input
                  type='text'
                  className='border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none'
                  placeholder='Enter your 10 digit phone no'
                value={phone}
                onChange={e=>setPhone(e.target.value)}
                />
              <span className="text-red-500 text-xs">{errors.phone.length > 0 ? errors.phone : '' }</span>
              </div>
        ):(
         <div className="flex flex-col">
           <input 
                  type='text'
                  className='border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none'
                  placeholder='Enter your 10 digit phone no'
                value={otp}
                onChange={e=>setOTP(e.target.value)}
 />
         </div> 
        )}
        <div>
            <button onClick={page==0?sendOTP:verifyOTP}
             disabled={loading}
             className='bg-white rounded-lg border-2 font-bold border-blue-500 text-blue-500 disabled:opacity-40 hover:text-white hover:bg-blue-500 p-3 w-full'>
             {page==0?'Get OTP': 'Verify OTP'} 
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
