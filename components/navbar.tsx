import React from 'react';
import Link from 'next/link';


const Navbar = (

) => {
   
  return (
    <div className="w-full h-14 bg-white fixed bottom-0">
        <div className = "flex flex-row h-full justify-around items-center">
            <Link href="/">
                <a>
                <svg fill="black"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"/></svg>
</a>
            </Link>
            <Link href="/chats">
                <a>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.19995 11H7.21195H7.19995ZM12 11H12.012H12ZM16.8 11H16.812H16.8ZM22.8 11C22.8 16.3016 17.964 20.6 12 20.6C10.2343 20.606 8.4897 20.2169 6.89395 19.4612L1.19995 20.6L2.87395 16.136C1.81435 14.6504 1.19995 12.8888 1.19995 11C1.19995 5.69842 6.03595 1.40002 12 1.40002C17.964 1.40002 22.8 5.69842 22.8 11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
            </Link>
            <Link href="/notifications">
                <a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.8 22.8L15.6 15.6L22.8 22.8ZM18 9.60001C18 10.7031 17.7827 11.7954 17.3605 12.8146C16.9384 13.8337 16.3197 14.7597 15.5397 15.5397C14.7596 16.3197 13.8336 16.9385 12.8145 17.3606C11.7954 17.7827 10.7031 18 9.59995 18C8.49685 18 7.40455 17.7827 6.38541 17.3606C5.36628 16.9385 4.44027 16.3197 3.66025 15.5397C2.88024 14.7597 2.2615 13.8337 1.83936 12.8146C1.41722 11.7954 1.19995 10.7031 1.19995 9.60001C1.19995 7.3722 2.08495 5.23562 3.66025 3.66032C5.23556 2.08501 7.37213 1.20001 9.59995 1.20001C11.8278 1.20001 13.9643 2.08501 15.5397 3.66032C17.115 5.23562 18 7.3722 18 9.60001Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
            </Link>
            <Link href="/profile">
                <a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.74515 18.9648C6.26325 17.5415 9.10745 16.7956 12 16.8C15 16.8 17.8164 17.586 20.2548 18.9648H3.74515ZM15.6 9.60001C15.6 10.5548 15.2207 11.4705 14.5455 12.1456C13.8704 12.8207 12.9547 13.2 12 13.2C11.0452 13.2 10.1295 12.8207 9.45437 12.1456C8.77924 11.4705 8.39995 10.5548 8.39995 9.60001C8.39995 8.64523 8.77924 7.72956 9.45437 7.05443C10.1295 6.3793 11.0452 6.00001 12 6.00001C12.9547 6.00001 13.8704 6.3793 14.5455 7.05443C15.2207 7.72956 15.6 8.64523 15.6 9.60001V9.60001ZM22.8 12C22.8 13.4183 22.5206 14.8227 21.9779 16.133C21.4351 17.4433 20.6396 18.6339 19.6367 19.6368C18.6338 20.6396 17.4433 21.4352 16.1329 21.9779C14.8226 22.5207 13.4182 22.8 12 22.8C10.5817 22.8 9.17729 22.5207 7.86697 21.9779C6.55666 21.4352 5.36607 20.6396 4.3632 19.6368C3.36033 18.6339 2.5648 17.4433 2.02205 16.133C1.4793 14.8227 1.19995 13.4183 1.19995 12C1.19995 9.13568 2.33781 6.38865 4.3632 4.36326C6.38859 2.33787 9.13562 1.20001 12 1.20001C14.8643 1.20001 17.6113 2.33787 19.6367 4.36326C21.6621 6.38865 22.8 9.13568 22.8 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
            </Link>
        </div>
    </div>
  );
}

export default Navbar

