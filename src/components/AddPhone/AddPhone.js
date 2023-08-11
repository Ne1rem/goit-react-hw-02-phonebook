import React, { useState } from "react";
import { nanoid } from "nanoid";

export const AddPhone = ({ AddContactId }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const AddContactClick = (event) => {
    event.preventDefault();
    const newContact = { name, number, id: nanoid() };
    AddContactId(newContact);
    setName("");
    setNumber("");
  };

  return (
    <div>
      <p>Phonebook</p>
      <p>Name</p>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p>Number</p>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button onClick={AddContactClick}>Add contact</button>
    </div>
  );
};
