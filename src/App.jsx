import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import CotactsForm from "./components/ContactsForm/ContactsForm";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtesSlice";
import "./App.css";

function App() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const filtersContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filters.trim().toLowerCase());
  });

  return (
    <>
      <SearchBox />

      <ContactList contacts={filtersContacts} />
      <CotactsForm />
    </>
  );
}

export default App;
