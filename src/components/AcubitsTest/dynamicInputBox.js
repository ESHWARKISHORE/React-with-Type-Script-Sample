import "./styles.css";
import React, { useState } from 'react';

export default function App() {
    // ----------------------------------------------
    const [textBoxes, setTextBoxes] = useState(['']); // Array to store text box values

    const handleAddTextBox = () => {
        setTextBoxes(prevTextBoxes => [...prevTextBoxes, '']); // Add an empty text box to the array
    };

    const handleDeleteTextBox = index => {
        if (index === 0) {
            return; // Prevent deleting the first text box
        }
        setTextBoxes(prevTextBoxes => prevTextBoxes.filter((_, i) => i !== index)); // Remove the specified text box from the array
    };
    const handleChange = (index, event) => {
        const { value } = event.target;
        setTextBoxes(prevTextBoxes => {
            const updatedTextBoxes = [...prevTextBoxes];
            updatedTextBoxes[index] = value;
            return updatedTextBoxes;
        });
    };
    // ---------------------------------------------------

    return (
        <div className="App">
            <div>
                {textBoxes.map((value, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={value}
                            onChange={event => handleChange(index, event)}
                        />
                        {index === 0 ? null : (
                            <button onClick={() => handleDeleteTextBox(index)}>Delete</button>
                        )}
                    </div>
                ))}
                <button onClick={handleAddTextBox}>Add</button>
            </div>
        </div>
    );
}
