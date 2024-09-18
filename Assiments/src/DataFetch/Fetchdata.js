import React, { useEffect, useState } from 'react';

const Fetchdata = (val) => {
    const [data, setData] = useState({});
    const url = `https://api.artic.edu/api/v1/artworks?page=${val}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res.data))
            .catch((error) => console.error('error of fetching data', error));
    }, [val])
    console.log("the data value is:", data);
    return data;
}

export default Fetchdata;