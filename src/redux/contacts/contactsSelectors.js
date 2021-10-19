import { createSelector } from "@reduxjs/toolkit";

const contactsSelector = (state) => state.contacts.items;
const filterSelector = (state) => state.contacts.filter;
const loaderSelector = (state) => state.contacts.isLoading;

const filteredContactsSelector = createSelector(
  [contactsSelector, filterSelector],
  (contact, filter) => {
    return contact.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export {
  contactsSelector,
  filterSelector,
  loaderSelector,
  filteredContactsSelector,
};
