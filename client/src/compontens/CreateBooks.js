import React, { useState } from 'react';

import { useStoreActions } from 'easy-peasy';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function CreateBooks({ history }) {
  const AddBook = useStoreActions((actions) => actions.books.AddBook);

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');

  const [titleErr, setTitleErr] = useState('');
  const [DescriptionErr, setDescriptionErr] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const val = formValidation();
    if (val) {
      const formData = {
        title: title,
        description: description,
      };
      AddBook(formData);
      history.push('/books');
    }
  }

  const formValidation = () => {
    let titleerror = '';
    let Descriptionerror = '';
    let isValid = true;
    if (title === '') {
      isValid = false;
      titleerror = 'please enter a title';
    }
    if (description === '') {
      isValid = false;
      Descriptionerror = 'please enter a Description';
    }
    setTitleErr(titleerror);
    setDescriptionErr(Descriptionerror);
    return isValid;
  };

  return (
    <Container>
      <h2>Create new books</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Please enter a tite for a book</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please enter a description for a book</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
          />
        </Form.Group>
        {titleErr && <Alert variant="danger">{titleErr}</Alert>}
        {DescriptionErr && <Alert variant="danger">{DescriptionErr}</Alert>}
        <Form.Group>
          <Button type="submit">Create new book</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default CreateBooks;
