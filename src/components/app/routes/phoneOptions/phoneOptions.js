import React from 'react';
import "./phoneOptions.css"

function PhoneOptions() {
    return (
        <div className="App">
            <h1>Phones Phones Phones</h1>
            <ul className="Phone-Options-Links">
                <li className="Link">Add Phone</li>
                <li className="Link">Get Phone By Id</li>
                <li className="Link">Get Phone By Make/Model</li>
                <li className="Link">Delete Phone</li>
            </ul>
        </div>
    );
}

export default PhoneOptions;
