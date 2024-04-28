import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import CotactsForm from "./components/ContactsForm/ContactsForm";

import "./App.css";

function App() {
  return (
    <>
      <SearchBox />

      <ContactList />
      <CotactsForm />
    </>
  );
}

export default App;
