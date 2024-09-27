import React from 'react'
import { useState } from 'react';

const Snake = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [bgColor, setbgColor] = useState('white')
    
    const handleMoveRight = () => {
        setPosition((prevPos) => ({ ...prevPos, left: prevPos.left + 10 }));
        let val = Math.floor(Math.random() * 16777215).toString(16);
        setbgColor(`#${val}`)
    };
    const handleMoveLeft = () => {
        setPosition((prevPos) => ({ ...prevPos, left: prevPos.left - 10 }));
        let val = Math.floor(Math.random() * 16777215).toString(16);
        setbgColor(`#${val}`)
    };

    return (
        <>
            <div className='static' style={{ position: 'relative', height: '100vh' }}>
                <div
                    style={{
                        position: 'absolute',
                        top: position.top,
                        left: position.left,
                        backgroundColor: bgColor,
                        width: '100px',
                        height: '100px',
                        alignItems: 'center'
                    }}
                >
                    Move Me
                </div>
                <div className='flex flex-row absolute top-24'>
                    <p>
                        <button className=' text-black cursor-pointer' onClick={handleMoveRight}>Move Right</button>
                    </p>
                    <p>
                        <button className=' text-black cursor-pointer' onClick={handleMoveLeft}>Move Left</button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Snake