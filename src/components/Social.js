import React from 'react';
import { Link } from 'react-router-dom';
import './social.scss';
function Social() {
    return (
        <div className = "social__container">
            
            <Link className = "social" to = {{pathname:"https://www.instagram.com/nssnsutcell/"}} target = "_blank">
                <i className = 'fab fa-instagram'/>
            </Link>
            <Link className = "social" to = {{pathname: "https://www.facebook.com/nssnsutcell/"}} target = "_blank">
                <i className = 'fab fa-facebook-square'/>
            </Link>
            <Link className = "social" onClick = {{pathname: "https://www.linkedin.com/company/nss-nsut-delhi/"}} target = "_blank">
                <i className = 'fab fa-linkedin'/>
            </Link>
        </div>
    )
}

export default Social;
