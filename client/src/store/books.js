import { action, thunk } from 'easy-peasy';
const Books = {
    items: [],
    item: [],
    // Thunks
    fetchBooks: thunk(async actions => {
        const res = await fetch('http://localhost:1337/books');
        const items = await res.json();
        actions.setBooks(items);
    }),
    fetchBook: thunk(async (actions, id) => {
        const res = await fetch(`http://localhost:1337/books/${id}`);
        const items = await res.json();
        actions.setBook(items);
    }),

    AddBook: thunk(async (actions, formData) => {
        let response = await fetch('http://localhost:1337/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: formData.title,
                description: formData.description,
            })
        });
        let result = await response.json();
        actions.newBooks(result);
    }),

    UpdateBooks: thunk(async (actions, formData) => {
        const settings = {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: formData.id,
                title: formData.title,
                description: formData.description
            })
        };
        try {
            const fetchResponse = await fetch(`http://localhost:1337/books/${formData.id}`, settings)
            const result = await fetchResponse.json();
            actions.UpdateBook(result);
        } catch (error) {
            console.log(error);
        }
    }),

    DeleteBooks: thunk(async (actions, id) => {
        await fetch(`http://localhost:1337/books/${id}`, { method: 'DELETE' });
        actions.removeBooks(id);
    }),

    // Actions
    setBooks: action((state, items) => {
        state.items = items
    }),
    setBook: action((state, item) => {
        state.item = item
    }),
    newBooks: action((state, items) => state.items.push(items)),
    UpdateBook: action((state, formData) => {
        const index = state.items.findIndex(
            items => items.id === formData.id
        );
        if (index !== -1) {
            state.items.splice(index, 1, formData);
        }
    }),
    removeBooks: action((state, id) => state.items = state.items.filter(items => items.id !== id)),
}

export default Books