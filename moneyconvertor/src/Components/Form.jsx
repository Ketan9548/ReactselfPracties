import React, { useState } from 'react'

const Form = () => {
    const [formdata, setformdata] = useState({});
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handformdetail = (e) => {
        e.preventDefault(); // Prevents default form submission
        const data = { name, age };
        setformdata(data);
        console.log("Form Data Submitted: ", data);
    }
    return (
        <>
            <form onSubmit={handformdetail}>
                <label>Enter Your name</label>
                <input 
                    className='bg-slate-400' 
                    placeholder='Name...' 
                    type="text" 
                    value={name} // Correct state variable for name
                    onChange={(e) => setName(e.target.value)} 
                />
                <label>Enter Your age</label>
                <input 
                    type="number" 
                    value={age} // Correct state variable for age
                    className='bg-slate-400' 
                    placeholder='Age...' 
                    onChange={(e) => setAge(e.target.value)} 
                />
                <button className='bg-red-500 border-2 border-orange-300 p-1' type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Form;
