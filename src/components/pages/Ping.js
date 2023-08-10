import React, { useState } from 'react';
import axios from 'axios';

function Ping() {
    const [ipAddress, setIpAddress] = useState('');
    const [pingResult, setPingResult] = useState('');

    const handlePing = async () => {
        try {
            const startTime = Date.now();
            // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            await axios.head(`http://${ipAddress}`, { timeout: 5000 }); // Adjust timeout as needed
            const endTime = Date.now();
            const pingTime = endTime - startTime;
            setPingResult(`Ping time to ${ipAddress}: ${pingTime} ms`);
        } catch (error) {
            setPingResult(`Error: ${error.message} `);
        }
    };

    return (
        <div className="App">
            <h1>Ping IP Address</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter IP Address"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                />
                <button onClick={handlePing}>Ping</button>
            </div>
            <div>
                <p>{pingResult}</p>
            </div>
        </div>
    );
}

export default Ping;