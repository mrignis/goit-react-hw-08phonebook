import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiGetContacts } from "../redux/contacts/contactsOps";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Contacts App</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
