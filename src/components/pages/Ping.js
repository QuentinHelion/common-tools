import React, { useState } from 'react';

function Ping() {
    const [inputValue, setInputValue] = useState('');
    const [apiData, setApiData] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const interpreter = (array) => {
        let result = '';
        array.forEach((items)=>{
            // result += `<pre>Ping: octets=${items.octets} temps=${items.temp} ms TTL=${items.ttl}</pre>`;
            document.getElementById('result').innerHTML += `<pre>Ping: octets=${items.octets} temps=${items.temp} ms TTL=${ items.ttl}</pre>`;
        })
        return result;
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/ping?addr=${inputValue}`);
            const data = await response.json();
            const i_data = interpreter(data);
            setApiData(i_data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Ping</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter argument"
            />
            <button onClick={fetchData}>Ping</button>
            <div>
                <h2>API Response:</h2>
                <div id="result"></div>
            </div>
            {apiData && (
                <div>
                    <h2>API Response:</h2>
                    {/*<div id="result"></div>*/}
                </div>
            )}
        </div>
    );
}

export default Ping;
