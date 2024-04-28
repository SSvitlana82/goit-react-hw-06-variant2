import { useState } from "react";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = ({}) => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactList;
