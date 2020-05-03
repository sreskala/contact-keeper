import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {

    const contactContext = useContext(ContactContext);

    const { addContact, clearCurrent, updateContact, current } = contactContext;

    useEffect(() => {
        if(current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal' 
            });
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onContactChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    const onFormSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal' 
        });
    }

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
            <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onContactChange}
             />
             <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onContactChange}
             />
             <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={onContactChange}
             />
             <h5>Contact Type</h5>
             <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onContactChange} /> Personal {' '}
             <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onContactChange} /> Professional
             <div>
                 <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block" />
             </div>

             {current && (
                 <div>
                     <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
                 </div>
             )}
            
        </form>
    )
}

export default ContactForm;