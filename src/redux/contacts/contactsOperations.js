import axios from "axios";
import {
  getContactsRequest,
  addNewContactSucces,
  addNewContactRequest,
  getContactsSucces,
  addNewContactError,
  getContactsError,
  removeContactByIdRequest,
  removeContactByIdSucces,
  removeContactByIdError,
} from "./contactsActions";

const getContactsOperation = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const response = await axios.get(
      "https://phonebook-2a001-default-rtdb.firebaseio.com/contacts.json"
    );
    if (response.data) {
      const contacts = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getContactsSucces(contacts));
    }
  } catch (error) {
    dispatch(getContactsError(error.response.data.error.message));
  }
};

const addContactOperation = (newContact) => async (dispatch) => {
  dispatch(addNewContactRequest());
  try {
    const response = await axios.post(
      "https://phonebook-2a001-default-rtdb.firebaseio.com/contacts.json",
      newContact
    );
    dispatch(addNewContactSucces({ ...newContact, id: response.data.name }));
  } catch (error) {
    dispatch(addNewContactError(error.response.data.error.message));
  }
};

const removeContactOperation = (id) => async (dispatch) => {
  dispatch(removeContactByIdRequest());
  try {
    await axios.delete(
      `https://phonebook-2a001-default-rtdb.firebaseio.com/contacts/${id}.json`
    );
    dispatch(removeContactByIdSucces(id));
  } catch (error) {
    dispatch(removeContactByIdError(error.response.data.error.message));
  }
};

export { addContactOperation, getContactsOperation, removeContactOperation };
