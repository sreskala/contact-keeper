import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Jack Johnson",
                email: "upsidedown@gmail.com",
                phone: "567-890-4567",
                type: "personal"
            },
            {
                id: 2,
                name: "July Fourth",
                email: "j4th@yahoo.com",
                phone: "040-304-3032",
                type: "professional"
            },
            {
                id: 3,
                name: "Hardoo",
                email: "hardoo@hotmail.com",
                phone: "889-838-2343",
                type: "personal"
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider 
        value = {{
            contacts: state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>
    );
}

export default ContactState;