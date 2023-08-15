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
        const result_element = document.getElementById('result');
        result_element.innerHTML = null;
        try {
            array.forEach((items) => {
                stat_min = items.temp < stat_min ? items.temp : stat_min;
                stat_max = items.temp > stat_max ? items.temp : stat_max;
                stat_moy += parseInt(items.temp);
                i++;
                result_element.innerHTML += `Ping: icmp_seq=${items.icmp_seq} time=${items.temp} ms TTL=${items.ttl}\n`;
            })
            stat_moy = stat_moy / i;
            result_element.innerHTML += `Stats: min=${stat_min}ms, max=${stat_max}ms, moy=${stat_moy}ms`;
        } catch(e){
            result_element.innerHTML = 'Error, unknown host'
        }

    }

    const fetchData = async () => {
        document.getElementById('result').innerHTML = "Pinging... ";
        try {
            const response = await fetch(`http://192.168.1.153:5001/ping?addr=${inputValue}`);
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
                    <h3 className="mt-5">Ping Result:</h3>
                    <pre className="ide-container">
                        <code id="result"></code>
                    </pre>
                </div>
            </Container>
        </Container>
    );
}

export default Ping;
