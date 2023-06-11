import React from 'react';
import { Contact } from 'components/Contact/Contact';

import { Contacts, InfoMessage } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContactsList = filteredContacts();

  return (
    <Contacts>
      {contacts.length === 0 ? (
        <InfoMessage>The list of contacts is empty</InfoMessage>
      ) : filteredContactsList.length === 0 ? (
        <InfoMessage>Nothing found</InfoMessage>
      ) : (
        <ul>
          {filteredContactsList.map(({ id, name, number }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
            />
          ))}
        </ul>
      )}
    </Contacts>
  );
};
