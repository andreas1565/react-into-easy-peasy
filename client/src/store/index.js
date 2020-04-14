import {createStore} from 'easy-peasy';
import Books from './books';
const store = {
    books: Books,
}

export default createStore(store);