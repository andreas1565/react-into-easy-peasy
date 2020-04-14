import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Books({ books, DeleteBooks }) {

  function handleClick(id) {
    DeleteBooks(id)
  }
  if (books.length === 0) {
    return (
      <Container>
        <h3>Books</h3>
        <Button href="/createbooks">CreateBooks</Button>
        <p>no books</p>
      </Container>
    )
  }
  return (
    <Container>
      <h3>Books</h3>
      <Button href="/createbooks" className="mb-2">CreateBooks</Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th></th>
            <th>title</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>
                <Button className="mr-2" variant="danger" onClick={() => handleClick(book.id)}>Delete</Button>
                <Link className="btn btn-info" to={`/book/${book.id}`}>edit</Link>
              </td>
              <td>{book.title}</td>
              <td>{book.description}</td>
            </tr>
          ))}
        </tbody>

      </Table>

    </Container>
  );
}

export default Books;
