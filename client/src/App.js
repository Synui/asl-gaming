import React from 'react';
import Cards from './pages/MemoryGame.js'
import Homepage from './pages/Homepage.js'
import Nav from './components/Nav/index.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/memory-game" component={Cards}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
   </ApolloProvider>
  );
}

export default App;
