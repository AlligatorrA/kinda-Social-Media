import React from 'react';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome}from"@fortawesome/free-solid-svg-icons";
import {faUser}from "@fortawesome/free-solid-svg-icons"
import {faText} from "@fortawesome/free-solid-svg-icons"

function nav() {
    return (
        <div>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/My Component/Profile"><FontAwesomeIcon icon={faUser}size="1px" /></Link>
                        <Link to="/My Component/Home"><FontAwesomeIcon icon={faHome} size= "3px" /></Link>
                        
                                              <Link to="/My Component/Message"><FontAwesomeIcon icon={faText} size= "3px" /></Link>
                    </li>
                </ul>

            </nav>
            
        </div>
    )
}

export default nav;
