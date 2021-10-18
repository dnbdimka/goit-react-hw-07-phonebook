import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import { ContactsListStyle } from "./ContactListStyled";

const ContactList = ({ contacts, filterValue, onRemoveContactById }) => {
  const newArr = [...contacts].filter((contact) => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <>
      <ContactsListStyle>
        <h2>Contacts:</h2>

        {contacts.length !== 0 ? (
          <>
            {newArr.length !== 0 ? (
              <ul>
                {newArr.map((contact) => (
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
        ) : (
          <p>Please enter your first contact ;)</p>
        )}
      </ContactsListStyle>
    </>
  );
};

export default ContactList;
