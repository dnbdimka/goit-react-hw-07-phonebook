import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { ContactsFilterAndListWrapper } from "./AppStyled";
import {
  addContactOperation,
  getContactsOperation,
  removeContactOperation,
} from "../redux/contacts/contactsOperations";
import ContactLoader from "./contactLoader/ContactLoader";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const isLoading = useSelector((state) => state.contacts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  const onAddNewContact = (contact) => {
    dispatch(addContactOperation(contact));
  };
  const onRemoveContactById = (id) => {
    dispatch(removeContactOperation(id));
  };

  return (
    <>
      {isLoading && <ContactLoader />}
      <ContactForm onAddNewContact={onAddNewContact} />
      <ContactsFilterAndListWrapper>
        {contacts.length !== 0 && <Filter filter={filter} />}

        <ContactList
          contacts={contacts}
          filterValue={filter}
          onRemoveContactById={onRemoveContactById}
        />
      </ContactsFilterAndListWrapper>
    </>
  );
};

export default App;
