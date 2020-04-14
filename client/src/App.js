import React from 'react';
import store from './store/index';
import { StoreProvider } from 'easy-peasy';
import Routes from './compontens/Routes';


function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Routes />
      </div>
    </StoreProvider>
  );
}

export default App;
