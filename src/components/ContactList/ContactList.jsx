import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  apiRemoveContact,
  apiGetContacts, // Додайте імпорт операції apiGetContacts
} from "../../redux/contacts/operations";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/slice";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const nameFilter = useSelector(selectNameFilter);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteContact = (contactId) => {
    dispatch(apiRemoveContact(contactId));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(changeFilter({ name: value }));
    dispatch(apiGetContacts()); // Замініть fetchContacts() на apiGetContacts()
  };

  return (
    <div className={styles.contactList}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search contacts..."
        className={styles.searchInput}
      />
      <ul className={styles.contactItems}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
            <Contact contact={contact} onDelete={handleDeleteContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
