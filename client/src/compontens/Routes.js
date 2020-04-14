import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateBooksPage from '../compontens/CreateBooks';
import BooksListPage from '../pages/BooksListPage';
import EditBooksPagde from '../pages/EditBooksPage';

const Routes = () => (
    <Switch>
        <Route exact path="/createbooks" component={CreateBooksPage} />
        <Route exact path="/books" component={BooksListPage} />
        <Route exact path="/book/:id" component={EditBooksPagde} />
    </Switch>
);

export default Routes;