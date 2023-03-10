import React, { useState, useEffect } from 'react'
import axios from 'axios';



const Axiostest = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    // useEffect(() => {
    //     axios.get('https://shy-red-firefly-tutu.cyclic.app/cards')
    //         .then(res => {
    //             setData(res.data);
    //             setRunDay(res.data[0].runday)
    //         })
    //         .catch(e => {
    //             setError(e);
    //         });
    // }, []);


    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://shy-red-firefly-tutu.cyclic.app/cards')
                setData(res);
                // console.log(res)
            }
            catch (e) {
                setError(e);
            }
        }
        getData();
    }, []);

    // console.log(data);
    // console.log(error);


    return (
        <div>
            <h2>Test Result :</h2>
        </div>
    )
}

export default Axiostest
