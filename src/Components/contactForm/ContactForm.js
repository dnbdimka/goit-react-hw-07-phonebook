import React, { useState } from "react";
import { ContactFormStyled } from "./ContactFormStyled";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddNewContact }) => {
  const [contact, setContact] = useState(initialState);

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmitForm = (e) => {
    e.preventDefault();
    // contact.id = uuidv4();

    onAddNewContact(contact);
    setContact({ ...initialState });
  };

  return (
    <ContactFormStyled>
      <div className="login-box">
        <h2>Phonebook</h2>
        <form onSubmit={handelSubmitForm}>
          <div className="user-box">
            <input
              id="contactName"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={onHandleChange}
              value={contact.name}
            />
            <label htmlFor="contactName">Name</label>
          </div>
          <div className="user-box">
            <input
              className="form-control-material"
              id="contactPhone"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={onHandleChange}
              value={contact.number}
            />
            <label htmlFor="contactPhone">Number</label>
          </div>
          <button type="submit">Add contact</button>
        </form>
      </div>
    </ContactFormStyled>
  );
};

export default ContactForm;
