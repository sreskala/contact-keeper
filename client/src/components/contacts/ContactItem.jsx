import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {

    const { id, name, email, phone, type } = contact;
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}{' '} <span style={{float: "right"}} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
                    {type==='professional' ? 'Professional' : 'Personal'}
                </span>
            </h3>
            <ul className="list">
                {email && (<li>
                    <i className="fas fa-envelope-open" /> {' ' + email}
                </li>)}
                {phone && (<li>
                    <i className="fas fa-phone-square" /> {' ' + phone}
                </li>)}
            </ul>
            <p>
                <button style={{borderRadius: '15%'}} className="btn btn-dark btn-sm">Edit</button>
                <button style={{borderRadius: '15%'}} className="btn btn-danger btn-sm">Delete</button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactItem;