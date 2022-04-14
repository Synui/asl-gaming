import React from 'react';
import Cards from './components/Pages/MemoryGame.js'
import Homepage from './components/Pages/Homepage.js'
import Nav from './components/Nav/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/memory-game" component={Cards}/>
        </Switch>
      </div>
    </Router>
    // </ApolloProvider>
  );
}

export default App;
