import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { ApolloProvider } from '@apollo/client/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import { StoreProvider } from 'context/store';

import 'rsuite/dist/styles/rsuite-default.css';

const URI = 'https://fake-api.avantstay.dev/graphql';

const link = new BatchHttpLink({
  uri: URI,
  batchMax: 15,
  batchInterval: 20,
});

const client = new ApolloClient({
  link: from([link]),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Switch>
      <Route exact path="/regions/:regionName">
        <Home />
      </Route>
      <Route exact path="/homes">
        <Home />
      </Route>
      <Redirect to="/homes" />
    </Switch>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
