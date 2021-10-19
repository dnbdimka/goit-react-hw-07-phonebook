import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getContactsRequest,
  getContactsSucces,
  getContactsError,
  addNewContactRequest,
  addNewContactSucces,
  addNewContactError,
  filteredContacts,
  removeContactByIdSucces,
  removeContactByIdRequest,
  removeContactByIdError,
} from "./contactsActions";

const contactsListReducer = createReducer([], {
  [getContactsSucces]: (_, action) => action.payload,
  [addNewContactSucces]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeContactByIdSucces]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const contactsFilterReducer = createReducer("", {
  [filteredContacts]: (_, { payload }) => payload,
});

const contactsLoaderReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSucces]: () => false,
  [getContactsError]: () => false,
  [addNewContactRequest]: () => true,
  [addNewContactSucces]: () => false,
  [addNewContactError]: () => false,
  [removeContactByIdRequest]: () => true,
  [removeContactByIdSucces]: () => false,
  [removeContactByIdError]: () => false,
});

const contactsErrorReducer = createReducer("", {
  [getContactsError]: (_, action) => action.payload,
  [addNewContactError]: (_, action) => action.payload,
  [removeContactByIdError]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: contactsFilterReducer,
  isLoading: contactsLoaderReducer,
  error: contactsErrorReducer,
});
export default contactsReducer;
