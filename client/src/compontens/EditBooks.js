import React, { useState } from 'react';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




function EditBooks({ book, UpdateBooks, history }) {

    const [title, setTitle] = useState(book.title);
    const [description, setdescription] = useState(book.description);
    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            id: book.id,
            title: title,
            description: description
        }
        UpdateBooks(formData);
        history.push('/books')
    }
    return (<Container>
        <h2>Edit books</h2>
        <Form onSubmit={handleSubmit} key={`${book.title}-${book.description}`}>
            <Form.Group>
                <Form.Label>Please enter a tite for a book</Form.Label>
                <Form.Control type="text" name="title" defaultValue={book.title} onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Please enter a description for a book</Form.Label>
                <Form.Control as="textarea" rows="3" name="description" defaultValue={book.description} onChange={(e) => setdescription(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Button type="submit">Update Book</Button>
            </Form.Group>
        </Form>
    </Container>
    )
}

export default EditBooks