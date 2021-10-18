import React from "react";

const ContactListItem = ({ contact, onRemoveContactById }) => {
  const remove = () => {
    onRemoveContactById(contact.id);
  };
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={remove}>DELETE</button>
    </li>
  );
};

export default ContactListItem;
