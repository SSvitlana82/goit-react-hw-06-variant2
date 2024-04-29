import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.phoneNumber}</p>
      <button onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Contact;
