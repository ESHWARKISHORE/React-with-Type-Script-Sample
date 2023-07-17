import { useState, useEffect } from 'react';


const Model = ({ modelVisibility, setModelVisibility, titel, body }) => {
    const handleClose = () => {
        setModelVisibility(false);
    }
    useEffect(() => {
        console.log("Start");
        return () => {
            console.log('End');
        };
    }, [])
    return (
        <>
            <div>
                <h1>{titel}</h1>
                <h2>{body}</h2>
            </div>
            <button onClick={() => { handleClose() }}>Close</button>
        </>
    )
}

export default Model