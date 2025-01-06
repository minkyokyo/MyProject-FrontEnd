import React, { useState } from "react";

function App() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const fetchMessage = async () => {
        const res = await fetch("http://localhost:8080/api/message");
        const data = await res.text();
        setMessage(data);
    };

    const sendData = async () => {
        const res = await fetch("http://localhost:8080/api/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ myData: "Hello Spring!" }),
        });
        const result = await res.text();
        setResponse(result);
    };

    return (
        <div>
            <button onClick={fetchMessage}>Get Message</button>
            <p>Message from Spring: {message}</p>
            
            <button onClick={sendData}>Send Data</button>
            <p>Response from Spring: {response}</p>
        </div>
    );
}

export default App;