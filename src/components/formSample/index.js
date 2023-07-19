import React, { useState } from 'react';

function MyForm() {
    const [formValues, setFormValues] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any desired actions with the formValues object
        console.log('Form values:', formValues);
        // Reset the form
        setFormValues({
            input1: '',
            input2: '',
            input3: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Input 1:
                <input
                    type="text"
                    name="input1"
                    value={formValues.input1}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Input 2:
                <input
                    type="text"
                    name="input2"
                    value={formValues.input2}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Input 3:
                <input
                    type="text"
                    name="input3"
                    value={formValues.input3}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;