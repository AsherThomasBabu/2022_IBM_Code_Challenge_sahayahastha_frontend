import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineSend, AiFillCaretLeft } from 'react-icons/ai'
import Navbar from '../../components/navbar';

const Chat: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return <div>
        <div className='overflow-hidden h-screen'>
            <div className="flex p-2 border-b-2 justify-between">
                <span className='font-bold text-xl flex items-center gap-2'><Link href="/chats">
<a ><AiFillCaretLeft /></a></Link> Username</span>
            <span>...</span>
            </div>
            <div className="flex flex-col h-screen pb-28">
                {/* chat window  */}
                <div className="overflow-scroll flex-1 p-2 relative">
                    <div className="flex flex-col items-start w-full">
                        <div className="text-xs">User</div>
                        <div className="rounded-md rounded-tl-none p-2 bg-blue-200">Hwhllo</div>
                        <span className='text-xs text-gray-500'>10:32pm</span>
                    </div>

                    <div className="flex flex-col items-end w-full">
                        <div className="text-xs">User</div>
                        <div className="rounded-md rounded-tr-none p-2 bg-blue-500 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
                        <span className='text-xs text-gray-500'>10:32pm</span>
                    </div>
                </div>
                <div className="border-t-2 p-2 flex items-center gap-3 self-stretch justify-self-end">
                    <input type="text" placeholder='Enter your message' className='rounded-full flex-1 bg-white p-2 focus:outline-none border-2 focus:bg-slate-100' />
                    <button className='rounded-full bg-blue-500 text-white p-2 flex items-center justify-center w-10 h-10'><AiOutlineSend /></button>
                </div>
            </div>
        </div>
        <Navbar />
    </div>
}

export default Chat 