import { useState } from "react";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const despatch = useDispatch();
  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.phoneNumber}</p>
      <button>delete</button>
    </div>
  );
};

export default Contact;
