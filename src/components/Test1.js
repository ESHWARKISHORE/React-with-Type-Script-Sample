import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
let token = "34762f9a3c9c61a582dd5871906101d9b1e7f174d4dcec78c8e025983b537881";

export default function App() {
    const [name, setName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [phoneNumber, setPhoneNUmber] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmailId = (e) => {
        setEmailId(e.target.value);
    };
    const handlePhoneNumber = (e) => {
        setPhoneNUmber(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleRegistration = () => {
        console.log(name, emailId, phoneNumber, password);
        axios({
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: "https://gorest.co.in/public/v2/users",
            data: {
                name: name,
                emailId: emailId,
                phoneNumber: phoneNumber,
                password: password
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="App">
            <h1>Registration</h1>
            <p>Vendor Name:</p>
            <input
                type="text"
                value={name}
                palceholder="Vendor Name"
                name="name"
                onChange={handleName}
            />
            <p>Vendor Email ID:</p>
            <input
                type="email"
                value={emailId}
                palceholder="Email"
                name="mailId"
                onChange={handleEmailId}
            />
            <p>Vendor Phone Number:</p>
            <input
                type="text"
                value={phoneNumber}
                palceholder="XXXXXXXXXX"
                name="phoneNumber"
                onChange={handlePhoneNumber}
            />
            <p>Password</p>
            <input
                type="password"
                value={password}
                name="password"
                onChange={handlePassword}
            />
            <br />
            <button onClick={handleRegistration}>Register !</button>
        </div>
    );
}
