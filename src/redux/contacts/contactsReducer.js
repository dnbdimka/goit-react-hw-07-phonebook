import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getContacts,
  addNewContact,
  removeContactById,
  filteredContacts,
  setLoader,
} from "./contactsActions";
// import { ADDCONTACT, REMOVECONTACT, FILTER } from "./contactsTypes";

const contactsListReducer = createReducer([], {
  [getContacts]: (_, action) => action.payload,
  [addNewContact]: (state, { payload }) => {
    // if (
    //   state.some((contact) =>
    //     contact.name.toLowerCase().includes(payload.name.toLowerCase())
    //   )
    // ) {
    //   alert(`${payload.name} is already in contacts.`);
    //   return;
    // }
    return [...state, payload];
  },
  [removeContactById]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
const contactsFilterReducer = createReducer("", {
  [filteredContacts]: (_, { payload }) => payload,
});

const contactsLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: contactsFilterReducer,
  isLoading: contactsLoaderReducer,
});
export default contactsReducer;
