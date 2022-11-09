import React from "react";
import NavMenu from "./NavMenu"

export default function Header() {
    return (
        <div className="header">
            <svg width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.0217 19.3913C44.0217 29.7647 30.3743 38.1739 19.5675 38.1739C8.76067 38.1739 0 29.7647 0 19.3913C0 9.01796 8.76067 0.608696 19.5675 0.608696C30.3743 0.608696 44.0217 9.01796 44.0217 19.3913Z" fill="white"/>
                <path d="M17.6024 29.9565H21.0361L29.3478 8.82609H25.6416L21.7991 18.7818L17.9294 8.82609H14.0869L20.0278 23.3329L17.6024 29.9565Z" fill="#FEA492"/>
            </svg>
            <NavMenu />
        </div>
    );
};