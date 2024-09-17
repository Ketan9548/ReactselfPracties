import React, { useState } from 'react'

const Input_output = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])
    const onchaneval = () => {
        setData({ email, password });
    }
    console.log(data)
    console.log(typeof(data))
    return (
        <div className='bg-zinc-500'>
            <p>Enter the email</p>
            <div>
                <input placeholder='enter email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <p>Enter the password</p>
                <input placeholder='enter password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='bg-red-300' onClick={onchaneval}>Submit</button>
            <p>the value is: {data.email}</p>
            <p>the value is: {data.password}</p>
            {/* <p>the value is: {data?.map((val) => {
                return (
                    <p>{val}</p>
                )
            })}</p> */}
        </div>
    )
}

export default Input_output