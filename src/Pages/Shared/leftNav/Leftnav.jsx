import React, { useEffect, useState } from 'react';

const Leftnav = () => {

    const [catagories , setCatgories] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:5000/catagories")
        .then(res=> res.json())
        .then(data=> setCatgories(data))
        .catch(er=>{
            console.log(er.message);
        })

    },[])

    return (
        <div>
            <h2>Left nav</h2>
        </div>
    );
};

export default Leftnav;