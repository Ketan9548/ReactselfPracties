import React from 'react'

const Calcy = () => {
    return (
        <>
            <div className='flex flex-col items-center bg-slate-200 '>
                <div className='mb-4'>
                    <span className=''><input className='bg-slate-500 w-4/5 ml-10' type="text" placeholder='value' /></span>
                </div>
                <div className='flex flex-row gap-5 '>
                    <p className='border border-black rounded-xl p-2'>1</p>
                    <p className='border border-black rounded-xl p-2'>2</p>
                    <p className='border border-black rounded-xl p-2'>3</p>
                </div>
                <div className='flex flex-row gap-5 mt-1'>
                    <p className='border border-black rounded-xl p-2'>4</p>
                    <p className='border border-black rounded-xl p-2'>5</p>
                    <p className='border border-black rounded-xl p-2'>6</p>
                </div>
                <div className='flex flex-row gap-5 mt-1'>
                    <p className='border border-black rounded-xl p-2'>7</p>
                    <p className='border border-black rounded-xl p-2'>8</p>
                    <p className='border border-black rounded-xl p-2'>9</p>
                </div>
            </div>
        </>
    )
}

export default Calcy
