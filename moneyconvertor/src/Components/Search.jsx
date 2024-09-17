import React, { useEffect, useState } from 'react'

const Search = () => {
    let arr = [2, 3, 34, 1, 2, 3];
    const [val, setValue] = useState('');
    const [serchvalue, setSerchvalue] = useState(null);
    const [data, setdata] = useState([]);

    const url = `https://jsonplaceholder.typicode.com/users`;
    const fetchdata = () => {
        return (
            fetch(url)
                .then((res) => res.json())
                .then((res) => setdata(res))
        )
    }

    useEffect(() => {
        fetchdata();
    }, [])

    function serarchfind(inputval) {
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(inputval) === arr[i]) {
                return arr[i];
            }
        }
        return null;
    }
    const handlesearch = () => {
        setSerchvalue(serarchfind(val));
    }

    return (
        <div>
            <p>Enter the val</p>
            <input type="text" className='bg-slate-400' value={val} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handlesearch} className='bg-slate-500 border border-spacing-0 rounded-md p-1'>Search</button>
            <p>Search Value: {serchvalue !== null ? serchvalue : "Not found"}</p>
            <br />
            {data.map((value) => {
                return (
                    <div>
                        <p>{value.name}</p>
                        <p>{value.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Search