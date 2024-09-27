import React, { useState } from 'react'

const Form = () => {
    const [formdata, setformdata] = useState({});
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handformdetail = (e) => {
        e.preventDefault();
        const data = { name, age };
        setformdata([...formdata,data]);
        console.log("Form Data Submitted: ", data);
        alert("data Save...")
    }
    
    return (
        <>
            <div className='w-3/6 absolute left-72 bg-neutral-600'>
                <form onSubmit={handformdetail} >
                    <div className='flex flex-col justify-center'>
                        <label className='text-white'>Enter Your name below</label>
                        <input
                            className='bg-slate-400'
                            placeholder='Name...'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className='text-white'>Enter Your age below</label>
                        <input
                            type="number"
                            value={age}
                            className='bg-slate-400'
                            placeholder='Age...'
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <button className='bg-red-500 border-2 border-orange-300 p-1' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;
