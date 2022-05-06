import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
const Login = () => {
  return (
    <div className='min-h-full  mt-44 py-2 px-4 sm:px-4 lg:px-6'>
      <div className='max-w-md w-full space-y-3'>
        <div>
          <h5 className='mt-4  text-2xl font-extrabold text-gray-900'>
            Login/Signup
          </h5>
          <p className='mt-1 text-center text-sm text-gray-600'></p>
        </div>

        <div>
          <div>
            <div className='flex justify-center'>
              <div className='mb-3 w-full'>
                <label
                  htmlFor='exampleTel0'
                  className=' font-medium
form-label inline-block mb-2 text-gray-700'>
                  Phone
                </label>
                <input
                  type='number'
                  className='
        form-control
        block
        w-full
       p-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
                  id='exampleTel0'
                  placeholder='+91'
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-3 px-28 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
              <div
                className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                aria-hidden='true'
              />
            </span>
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
