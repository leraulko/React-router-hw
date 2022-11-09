import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
    return (
        <div className="navigation">
            <ul>
                <li> <NavLink to={'/'}>Home</NavLink> </li>
                <li> <NavLink to={'/posts'}>Posts</NavLink> </li>
                <li> <NavLink to={'/photos'}>Photos</NavLink> </li>
                <li> <NavLink to={'/contacts'}>Contacts</NavLink> </li>
            </ul>   
        </div>
    )
}