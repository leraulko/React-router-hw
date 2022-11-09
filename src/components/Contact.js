import React from "react";

export default function Contact({firstName, lastName, phone, gender}) {
    if(gender) {
        if (gender.toLowerCase() === 'male'){
            gender = '♂';
        } else if (gender.toLowerCase() === 'female') {
            gender = '♀';
        };
    };

        return (
            <div className="contact">
                <hr/>
                <p className="contact-name"> {firstName} {lastName} {gender} </p>
                <p> {phone} </p>
            </div>
        );
};