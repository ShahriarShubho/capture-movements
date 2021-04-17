import React from 'react';
import { useParams } from 'react-router';


const Test = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h1>service id {id}</h1>
        </div>
    );
};

export default Test;