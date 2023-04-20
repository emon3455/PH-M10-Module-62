import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Leftnav = () => {

    const [catagories , setCatgories] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/catagories")
        .then(res=> res.json())
        .then(data=> setCatgories(data))
        .catch(er=> console.log(er.message))
    },[])

    return (
        <div>
            <h4>All Catagories</h4>
            <div className="ps-3">
                {
                    catagories.map(catagory=>
                         <p key={catagory.id}> <Link to={`/catagory/${catagory.id}`} className='text-black fw-semibold text-decoration-none'> {catagory.name} </Link> </p>)
                }
            </div>
        </div>
    );
};

export default Leftnav;