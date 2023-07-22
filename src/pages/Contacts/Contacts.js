import React, { useEffect } from 'react';
import { Container, Subtitle, Title } from '../../components/App/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOperations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
