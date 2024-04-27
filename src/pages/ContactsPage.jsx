import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import {
  selectFilteredContacts,
  selectLoadingStatus,
  selectErrorStatus,
} from "../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);
  const isError = useSelector(selectErrorStatus);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Contacts App</h1>
      <ContactForm />
      <SearchBox /> {/* Додали компонент SearchBox */}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
