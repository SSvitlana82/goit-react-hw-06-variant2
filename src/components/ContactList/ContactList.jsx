import { useState } from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
