import axios from "axios";
import {
  getContacts,
  addNewContact,
  removeContactById,
  //   filteredContacts,
  setLoader,
} from "./contactsActions";

const getContactsOperation = () => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await axios.get(
      "https://phonebook-2a001-default-rtdb.firebaseio.com/contacts.json"
    );
    if (response.data) {
      const contacts = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getContacts(contacts));
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoader());
  }
};

const addContactOperation = (newContact) => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await axios.post(
      "https://phonebook-2a001-default-rtdb.firebaseio.com/contacts.json",
      newContact
    );
    dispatch(addNewContact({ ...newContact, id: response.data.name }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoader());
  }
};

const removeContactOperation = (id) => async (dispatch) => {
  dispatch(setLoader());
  try {
    await axios.delete(
      `https://phonebook-2a001-default-rtdb.firebaseio.com/contacts/${id}.json`
    );
    dispatch(removeContactById(id));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoader());
  }
};

export { addContactOperation, getContactsOperation, removeContactOperation };
