import React, { useEffect, useState } from 'react';

import { useStoreState, useStoreActions } from 'easy-peasy';

import Loading from '../compontens/Loading';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function EditBooksPage({ match, history }) {
  const book = useStoreState((state) => state.books.item);
  const bookid = match.params.id;

  const [title, setTitle] = useState('');
  const [Description, setDescription] = useState('');

  const [titleErr, setTitleErr] = useState('');
  const [DescriptionErr, setDescriptionErr] = useState('');

  const { fetchBook, UpdateBooks } = useStoreActions((actions) => ({
    fetchBook: actions.books.fetchBook,
    UpdateBooks: actions.books.UpdateBooks,
  }));

  useEffect(() => {
    if (book.id !== bookid) {
      fetchBook(bookid);
    } else {
      setTitle(book.title);
      setDescription(book.description);
    }
  }, [bookid]);

  const formValidation = () => {
    let titleerror = '';
    let Descriptionerror = '';
    let isValid = true;
    if (title === '') {
      isValid = false;
      titleerror = 'please enter a title';
    }
    if (Description === '') {
      isValid = false;
      Descriptionerror = 'please enter a Description';
    }
    setTitleErr(titleerror);
    setDescriptionErr(Descriptionerror);
    return isValid;
  };

  function handleSubmit(e) {
    const val = formValidation();
    e.preventDefault();
    if (val) {
      const formData = {
        id: bookid,
        title: title,
        description: Description,
      };
      UpdateBooks(formData);
      history.push('/books');
    }
  }
  if (book === null || book === undefined) {
    return <Loading />;
  }
  return (
    <Container>
      <h2>Edit books</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Please enter a tite for a book</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder={book.title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please enter a description for a book</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            placeholder={book.description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {titleErr && <Alert variant="danger">{titleErr}</Alert>}
        {DescriptionErr && <Alert variant="danger">{DescriptionErr}</Alert>}
        <Form.Group>
          <Button type="submit">Update Book</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default EditBooksPage;
