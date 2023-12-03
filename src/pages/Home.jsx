import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    // Handle Join Room Function 
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    })

    return (
        <>
        <Navbar/>
        <div className='flex justify-center items-center  h-[40em] lg:h-[40em]'>
            {/* Main Div  */}
            <div className="">
                {/* Video Calling Image Tag  */}
                <div className="flex justify-center mb-10">
                    {/* Image Tag  */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/8630/8630481.png"
                        alt="img"
                    />
                </div>

                {/* Input And Button  */}
                <div className="input bg-gray-800 flex items-center gap-2 rounded-lg border
                 border-gray-600">

                    {/* Input Tag  */}
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className='bg-transparent py-2 px-2 outline-none rounded-xl w-64 lg:w-96
                        text-lg text-white'
                        placeholder='Enter Room Code'
                    />

                    {/* Button Tag  */}
                    <button
                        type='button'
                        onClick={handleJoinRoom}
                        className=' bg-gray-700 hover:bg-gray-600 border-l border-gray-600 text-white font-bold px-8 py-2.5 rounded-r-lg'
                    >
                        Join
                    </button>
                </div>
            </div>
        </div>
        </>
        
    )
}
