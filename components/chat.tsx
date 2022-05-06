import React from "react";
import Image from "next/image";

const Chat = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-row justify-around w-full pb-2 pt-2 items-center'>
        <Image
          src='/images/23.jpg'
          alt='user image'
          width={50}
          height={50}
          className='rounded-full'></Image>
        <div className='flex flex-col'>
          <div className='text-xl font-semibold'>User Name</div>
          <div className='text-gray-600'>Last message sent or recieved</div>
        </div>
        <div className='w-6 h-6 rounded-xl bg-blue-500 text-white text-center'>
          2
        </div>
      </div>
    </div>
  );
};

export default Chat;
