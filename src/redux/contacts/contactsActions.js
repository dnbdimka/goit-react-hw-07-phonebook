import { createAction } from "@reduxjs/toolkit";

// const getContacts = createAction("contacts/getContacts");

const getContactsRequest = createAction("contacts/getContactsRequest");
const getContactsSucces = createAction("contacts/getContactsSucces");
const getContactsError = createAction("contacts/getContactsError");

// const addNewContact = createAction("contacts/addContact");

const addNewContactRequest = createAction("contacts/addNewContactRequest");
const addNewContactSucces = createAction("contacts/addNewContactSucces");
const addNewContactError = createAction("contacts/addNewContactError");

// const removeContactById = createAction("contacts/removeContact");

const removeContactByIdRequest = createAction(
  "contacts/removeContactByIdRequest"
);
const removeContactByIdSucces = createAction(
  "contacts/removeContactByIdSucces"
);
const removeContactByIdError = createAction("contacts/removeContactByIdError");

const filteredContacts = createAction("contacts/filteredContacts");
const setLoader = createAction("contacts/setLoader");
const setError = createAction("contacts/setError");

export {
  getContactsRequest,
  getContactsSucces,
  getContactsError,
  addNewContactRequest,
  addNewContactSucces,
  addNewContactError,
  removeContactByIdRequest,
  removeContactByIdSucces,
  removeContactByIdError,
  filteredContacts,
  setLoader,
  setError,
};
