import { useState } from 'react';
import Contact from './Contact';
import '../styles/ContactsPage.css';


export default function ContactsPage() {
    const contactsArr = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
    }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
    }];

    const [contacts, setContacts] = useState(contactsArr);

    const SortArray = (x, y) => {
        return x.firstName.localeCompare(y.firstName);
    }

    const render = (contactsList) => {
        contactsArr.sort(SortArray);
        return (
            contactsList.map((contact) => {
                return <Contact key={contact.lastName+contact.firstName} {...contact}/>
            })
        );
    };

    const handleSearchChange = (list) => {
        const filtered = contactsArr.filter((contact) =>
            contact.firstName.toLowerCase().includes(list.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(list.toLowerCase()) ||
            contact.phone.includes(list));
        
            setContacts (() =>{
                return filtered;
        })
    };

    return (
        <div className='contacts-container'>
        <div className='contacts-page'>
            <div className='contacts-book'>
                    <h1>Контакти</h1>
                    <input type="text" placeholder='🔍  Пошук' onChange={(el) => handleSearchChange(el.target.value)}/>
                {render(contacts)}
            </div>
        </div>
        </div>
    );
};