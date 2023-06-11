import React from 'react';
import PropTypes from 'prop-types';

import { ContactItem, ContactName, DeleteButton } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/phonebookSlice';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContact(id));
  };
  return (
    <ContactItem>
      <ContactName>{name}:</ContactName>
      <p>{number}</p>
      <DeleteButton type="button" onClick={deleteContact}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
