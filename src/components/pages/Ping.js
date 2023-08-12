import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import PageTitle from "../../cummon/PageTittle/PageTitle";
import Button from "../../cummon/Button/Button";

function Ping() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const interpreter = (array) => {
        let stat_min = 99999;
        let stat_max = 0
        let stat_moy = 0
        let i = 0;
        array.forEach((items)=>{
            stat_min = items.temp < stat_min ? items.temp : stat_min;
            stat_max = items.temp > stat_max ? items.temp : stat_max;
            stat_moy += items.temp;
            i++;
            document.getElementById('result').innerHTML += `Ping: octets=${items.octets} temps=${items.temp} ms TTL=${ items.ttl}\n`;
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
            <PageTitle title="Ping"/>
            <Container>
                <div className="d-flex justify-content-center">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="form-control w-25 me-5"
                        placeholder="Enter address"
                    />
                    <Button event={fetchData} inner="Ping"/>
                </div>
                <div>
                    <h3 className="mt-5">API Response:</h3>
                    <pre>
                        <code id="result" className=".ide-container"></code>
                    </pre>
                </div>
            </Container>
        </Container>
    );
}

export default Ping;
