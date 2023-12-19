import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  setFilter,
  setContacts,
} from '../redux/actions';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const storedContacts = useLocalStorage('contacts');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(storedContacts));
    dispatch(setContacts(storedContacts));
  }, [storedContacts, dispatch]);

  const addContactHandler = (name, number) => {
    dispatch(addContact(name, number));
  };
  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };
  const setFilterHandler = value => {
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={setFilterHandler} />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContactHandler}
        />
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default App;
