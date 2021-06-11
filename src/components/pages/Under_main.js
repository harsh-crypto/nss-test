import React from 'react';
import './under_main.scss';
import art from "../images/maintenance.svg";
import Footer from '../footer';
function Under_main() {
    return (
        <div className = "Container">
            <div className = "Container__wrapper">
                <img src = {art} alt = ""></img>
                <h2>Under maintenance!</h2>
            </div>
            <Footer/>
        </div>
    )
}

export default Under_main
