import styles from "../styles/Home.module.css";

const Details = () => {
    return (
    <div className="min-h-full  mt-28 py-2 px-4 sm:px-4 lg:px-6">
    <div className="max-w-md w-full space-y-3">
      
        <h5 className="mt-4  text-2xl font-extrabold text-gray-900">Enter Your Details</h5>
        <p className="mt-1 text-center text-sm text-gray-600"> 
        </p>
      </div>
        
      <div className="mb-3 w-full">
    <label htmlFor="exampleTel0" className=" font-medium
form-label inline-block mb-2 text-gray-700">Name</label>
    <input
      type="text"
      className="
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
      "
      id="exampleTel0"
      placeholder=""
    />
        </div>
        <div className="mb-3 w-full">
    <label htmlFor="exampleTel0" className=" font-medium
form-label inline-block mb-2 text-gray-700">House Name</label>
    <input
      type="text"
      className="
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
      "
      id="exampleTel0"
      placeholder=""
    />
        </div>

        <div className="mb-3 w-full">
    <label htmlFor="exampleTel0" className=" font-medium
form-label inline-block mb-2 text-gray-700">Village/City</label>
    <input
      type="text"
      className="
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
      "
      id="exampleTel0"
      placeholder=""
    />
        </div>
        <div className="mb-3 w-full">
    <label htmlFor="exampleTel0" className=" font-medium
form-label inline-block mb-2 text-gray-700">Disctrict</label>
    <input
      type="text"
      className="
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
      "
      id="exampleTel0"
      placeholder=""
    /> 
    </div>
    <div className="mb-3 w-full">
    <label htmlFor="exampleTel0" className=" font-medium form-label inline-block mb-2 text-gray-700">Pin Code</label>
    <input
      type="number"
      className="
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
      "
      id="exampleTel0"
      placeholder=""
    />
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-28 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <div className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
            </span>
            Submit
          </button>
        </div>
      </div>
    )
}

export default Details
