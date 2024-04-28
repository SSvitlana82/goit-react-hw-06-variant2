import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import CotactsForm from "./components/ContactsForm/ContactsForm";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import "./App.css";

function App() {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <SearchBox />

      <ContactList contacts={contacts} />
      <CotactsForm />
    </>
  );
}

export default App;
