import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';

import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/regions/:regionName">
          <Header />
        </Route>
        <Route exact path="/homes">
          <Header />
        </Route>
        <Redirect to="/homes" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
