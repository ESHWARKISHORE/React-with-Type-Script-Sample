import { useState, useEffect } from "react";
import Modal from "./model.js"

export default function RocketLane() {
    const [data, setData] = useState(
        [
            {
                "id": 1,
                "titel": "Sample0001",
                "description": 'SampleDesc001'
            },
            {
                "id": 2,
                "titel": "Sample0002",
                "description": 'SampleDesc002'
            },
            {
                "id": 3,
                "titel": "Sample0003",
                "description": 'SampleDesc003'
            },
        ]
    )

    useEffect(() => {
        console.log("Start");
    }, [])

    const [modelVisibility, setModelVisibility] = useState(false);
    const [indexToShowInModel, setIndexToShowInModel] = useState('')

    const handleModel = (index) => {
        setModelVisibility(true);
        setIndexToShowInModel(index);
        console.log("i a, here", index)
    }

    return (
        <div className="App">
            <h1>Modal Component</h1>
            <div>
                {data.map((item, index) => {
                    return (
                        <li>
                            <div onClick={() => handleModel(index)}>
                                {item.titel}
                            </div>
                        </li>
                    )
                })}
            </div>
            {modelVisibility ? <>
                <Modal
                    modelVisibility={modelVisibility}
                    setModelVisibility={setModelVisibility}
                    titel={data[indexToShowInModel].titel}
                    body={data[indexToShowInModel].description}
                />
            </> : <></>}
        </div>
    );
}
