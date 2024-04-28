import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const CotactsForm = ({}) => {
  const dispatch = useDispatch();
  const hanleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const contact = {
      name: form.elements.name.value,
      phoneNumbe: form.elements.phoneNumber.value,
    };
    dispatch(addContact(contact));

    form.reset();
  };

  return (
    <form onSubmit={hanleSubmit}>
      <input type="text" name="name" placeholder="enter name" />
      <input type="text" name="phoneNumber" placeholder="333-33-33" />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default CotactsForm;
