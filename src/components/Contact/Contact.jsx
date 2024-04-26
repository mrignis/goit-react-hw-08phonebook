import React from "react";
import { useDispatch } from "react-redux";
import { apiRemoveContact } from "../../redux/contacts/contactsOps";
import "./Contact.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(apiRemoveContact(contact.id));
  };

  if (!contact) {
    return null;
  }

  return (
    <div className="contact">
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
