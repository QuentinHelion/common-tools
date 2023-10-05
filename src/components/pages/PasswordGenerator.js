// src/PasswordGenerator.js
import React, { Component } from 'react';
import PageTitle from "../../cummon/PageTittle/PageTitle";
import Container from "react-bootstrap/Container";

class PasswordGenerator extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            length: 8,
            includeUppercase: true,
            includeNumbers: true,
            includeSpecialChars: true,
        };
    }

    generatePassword = () => {
        const { length, includeUppercase, includeNumbers, includeSpecialChars } = this.state;
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_-+=<>?';

        let chars = lowercaseChars;
        if (includeUppercase) chars += uppercaseChars;
        if (includeNumbers) chars += numberChars;
        if (includeSpecialChars) chars += specialChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        this.setState({ password });
    };

    handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        this.setState({ [name]: checked }, this.generatePassword);
    };

    handleLengthChange = (event) => {
        const { value } = event.target;
        this.setState({ length: parseInt(value, 10) }, this.generatePassword);
    };

    render() {
        const { password, length, includeUppercase, includeNumbers, includeSpecialChars } = this.state;

        return (
            <Container>
                <PageTitle title="Password Generator"/>
                <Container>
                <div>
                    <label>
                        Password Length:
                        <input
                            type="number"
                            value={length}
                            onChange={this.handleLengthChange}
                            min="4"
                            max="128"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Include Uppercase:
                        <input
                            type="checkbox"
                            name="includeUppercase"
                            checked={includeUppercase}
                            onChange={this.handleCheckboxChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Include Numbers:
                        <input
                            type="checkbox"
                            name="includeNumbers"
                            checked={includeNumbers}
                            onChange={this.handleCheckboxChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Include Special Characters:
                        <input
                            type="checkbox"
                            name="includeSpecialChars"
                            checked={includeSpecialChars}
                            onChange={this.handleCheckboxChange}
                        />
                    </label>
                </div>
                <button onClick={this.generatePassword}>Generate Password</button>
                <div>
                    <strong>Password:</strong> {password}
                </div>
                </Container>
            </Container>
        );
    }
}

export default PasswordGenerator;
