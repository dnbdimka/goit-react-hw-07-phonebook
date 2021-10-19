import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";

import { ContactsListStyle } from "./ContactListStyled";

const ContactList = ({ contacts, onRemoveContactById }) => {
  return (
    <>
      <ContactsListStyle>
        <h2>Contacts:</h2>

        <>
          {contacts.length !== 0 ? (
            <ul>
              {contacts.map((contact) => (
                <ContactListItem
                  key={contact.id}
                  contact={contact}
                  onRemoveContactById={onRemoveContactById}
                />
              ))}
            </ul>
          ) : (
            <p>There is no such contact ;(</p>
          )}
        </>
      </ContactsListStyle>
    </>
  );
};

export default ContactList;
