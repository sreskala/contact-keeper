import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import AlertContext from '../../context/alerts/alertContext';

const ContactForm = () => {

    const contactContext = useContext(ContactContext);
    const alertContext = useContext(AlertContext);

    const { addContact, clearCurrent, updateContact, current } = contactContext;
    const { setAlert } = alertContext;

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

        //reg const
        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if(current === null) {
            //check email and phone validity
            if (emailReg.test(email) === false) {
                setAlert('Please enter a valid email', 'danger');
            } else if (phoneReg.test(phone) === false) {
                setAlert('Please enter phone in 000-000-0000 format', 'danger')
            } else {
                addContact(contact);
            }
            
        } else {
            if (emailReg.test(email) === false) {
                setAlert('Please enter a valid email', 'danger');
            } else if (phoneReg.test(phone) === false) {
                setAlert('Please enter phone in 000-000-0000 format', 'danger')
            } else {
                updateContact(contact);
            }
            
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