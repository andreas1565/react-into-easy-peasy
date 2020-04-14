import React, { useEffect } from 'react'

import { useStoreState, useStoreActions } from 'easy-peasy';

import Loading from '../compontens/Loading';

import Books from '../compontens/books';

function BooksListPage() {
    const books = useStoreState(state => state.books.items);

    const { fetchBooks, DeleteBooks } = useStoreActions(actions => ({
        fetchBooks: actions.books.fetchBooks,
        DeleteBooks: actions.books.DeleteBooks
    }));

    useEffect(() => {
        fetchBooks();
        // eslint-disable-next-line
    }, []);
    if (books === null || books === undefined) {
        return <Loading />
    }
    return (
        <Books books={books} DeleteBooks={DeleteBooks} />
    )
}

export default BooksListPage
