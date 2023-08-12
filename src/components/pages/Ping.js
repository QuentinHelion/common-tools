import React, { useState } from 'react';

function Ping() {
    const [inputValue, setInputValue] = useState('');
    const [apiData, setApiData] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/ping?addr=${inputValue}`);
            const data = await response.json();
            setApiData(data);
            console.log(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>API Data Fetcher</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter argument"
            />
            <button onClick={fetchData}>Fetch API Data</button>
            {apiData && (
                <div>
                    <h2>API Response:</h2>
                    <pre>{JSON.stringify(apiData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Ping;
