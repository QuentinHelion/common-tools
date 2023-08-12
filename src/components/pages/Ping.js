import React, { useState } from 'react';
import Container from "react-bootstrap/Container";

function Ping() {
    const [inputValue, setInputValue] = useState('');
    const [apiData, setApiData] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const interpreter = (array) => {
        let stat_min = 99999;
        let stat_max = 0
        let stat_moy = 0
        let i = 0;
        console.log(stat_max);
        array.forEach((items)=>{
            stat_min = items.temp < stat_min ? items.temp : stat_min;
            stat_max = items.temp > stat_max ? items.temp : stat_max;
            stat_moy += items.temp;
            i++;
            document.getElementById('result').innerHTML += `<pre>Ping: octets=${items.octets} temps=${items.temp} ms TTL=${ items.ttl}</pre>`;
        })
        stat_moy = parseInt( stat_moy / i );
        document.getElementById('result').innerHTML += `Stats: min=${stat_min}ms, max=${stat_max}ms, moy=${stat_moy}ms`;

    }

    const fetchData = async () => {
        document.getElementById('result').innerHTML = null;
        try {
            const response = await fetch(`http://localhost:5000/ping?addr=${inputValue}`);
            const data = await response.json();
            interpreter(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Container>
            <h1>Ping</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter address"
            />
            <button onClick={fetchData}>Ping</button>
            <div>
                <h2>API Response:</h2>
                <div id="result"></div>
            </div>
        </Container>
    );
}

export default Ping;
