import { FC, ReactNode } from "react";

const Button: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className='bg-white rounded-lg border-2 font-bold border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 p-3 w-full'>
      {children}
    </button>
  );
};

export default Button;
