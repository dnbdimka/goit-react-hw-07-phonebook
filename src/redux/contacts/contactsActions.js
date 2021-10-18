import { createAction } from "@reduxjs/toolkit";

const getContacts = createAction("contacts/getContacts");
const addNewContact = createAction("contacts/addContact");
const removeContactById = createAction("contacts/removeContact");
const filteredContacts = createAction("contacts/filteredContacts");
const setLoader = createAction("contacts/setLoader");
export {
  getContacts,
  addNewContact,
  removeContactById,
  filteredContacts,
  setLoader,
};
