import React, { useState } from 'react';

import { useStoreActions } from 'easy-peasy';


// react-bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CreateBooks({ history }) {
    const AddBook = useStoreActions(actions => actions.books.AddBook);

    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            title: title,
            description: description
        }
        AddBook(formData);
        history.push('/books');
    }

    return (
        <Container>
            <h2>Create new books</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Please enter a tite for a book</Form.Label>
                    <Form.Control type="text" name="title" placeholder="title" onChange={(e) => setTitle(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Please enter a description for a book</Form.Label>
                    <Form.Control as="textarea" rows="3" name="description" placeholder="description" onChange={(e) => setdescription(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Create new book</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default CreateBooks