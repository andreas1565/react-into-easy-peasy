import React, { useEffect } from 'react'

import { useStoreState, useStoreActions } from 'easy-peasy';

import EditBooks from '../compontens/EditBooks';

import Loading from '../compontens/Loading';

function EditBooksPage(props) {
    const book = useStoreState(state => state.books.item);

    const { history } = props

    const { fetchBook, UpdateBooks } = useStoreActions(actions => ({
        fetchBook: actions.books.fetchBook,
        UpdateBooks: actions.books.UpdateBooks
    }));
    useEffect(() => {
        const { match } = props;
        let { id } = match.params;
        fetchBook(id);
        // eslint-disable-next-line
    }, []);
    if (book === null || book === undefined) {
        return <Loading />
    }
    return (
        <EditBooks book={book} UpdateBooks={UpdateBooks} history={history} />
    )
}

export default EditBooksPage
