import React, { useEffect, useState } from 'react'

const Practies = ({ name }) => {
    const good = "kapil chauhan do"
    const [value, setValue] = useState(0);
    const [change, setChange] = useState(good)
    const [wether, setWether] = useState([]);

    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&cnt=7&appid=3dffe4aa5a5e7c59efbb5825f263ae44'

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setWether(res.list))
    }, [url])
    console.log("the data in array formate is", wether)


    const changebutton = () => {
        setValue(value + 1);
    }
    const restartvalue = () => {
        setValue(0)
    }

    const handMouseEnter = () => {
        setChange('You can do this')
    }
    const handleMouseLeave = () => {
        setChange(good)
    };
    const lists = [
        {
            id: 1,
            name: "kapil",
            section: "02",
            job: "Full Stack"
        },
        {
            id: 2,
            name: "suit",
            section: "09",
            job: "Full_Stack1"
        },
        {
            id: 3,
            name: "Ketan",
            section: "06",
            job: "Full_Stack3"
        }
    ]

    return (
        <>
            <div className="bg-sky-300 w-full h-full">
                <div className='flex justify-center m-16'>
                    <div className='flex flex-col'>
                        <p className='text-center font-bold' >{name}</p>
                        <p className='text-center font-bold cursor-pointer mt-3 bg-slate-500 p-1' onMouseEnter={handMouseEnter} onMouseLeave={handleMouseLeave}>{change}</p>
                        <span><p className='text-center bg-red-400 m-5 h-16 pt-4 font-bold'>{value !== 0 ? value : 'data'}</p></span>
                        <button className='bg-slate-500 border border-spacing-1 p-2 rounded-2xl w-32' onClick={changebutton}>Click</button>
                        <button className='bg-slate-500 border border-spacing-1 p-2 rounded-2xl w-32' onClick={restartvalue}>Restart</button>
                    </div>
                    <div className='border border-separate ml-3 hover:bg-gray-500'>
                        <div className='flex flex-row'>
                            <p className=''>Name</p>
                            <p className='ml-4'>Job</p>
                            <p className='ml-4'>Section</p>
                        </div>
                        {lists.map((val) => (
                            <>
                                <div className='flex flex-row border border-separate' key={val.id}>
                                    <div className='underline p-1'>
                                        {val.name}
                                    </div>
                                    <div className='underline p-1'>
                                        {val.job}
                                    </div>
                                    <div className='underline p-1 ml-1'>
                                        {val.section}
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div>
                        {wether.map((detail, index) => (
                            <>
                                <div key={index} className='bg-lime-300'>
                                    <p>Date: {new Date(detail.dt * 1000).toLocaleDateString()}</p>
                                    <p>Temperature: {detail.main.temp}°K</p>
                                    <p>Weather: {detail.weather[0].description}</p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Practies