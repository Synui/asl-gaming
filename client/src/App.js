import React from 'react';
import Cards from './pages/MemoryGame.js'
import Homepage from './pages/Homepage.js'
import Nav from './components/Nav/index.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Practice from './pages/Practice.js';
import A from './components/RealSigns/A.js';
import B from './components/RealSigns/B.js';
import C from './components/RealSigns/C.js';
import D from './components/RealSigns/D.js';
import E from './components/RealSigns/E.js';
import F from './components/RealSigns/F.js';
import G from './components/RealSigns/G.js';
import H from './components/RealSigns/H.js';
import I from './components/RealSigns/I.js';
import J from './components/RealSigns/J.js';
import K from './components/RealSigns/K.js';
import L from './components/RealSigns/L.js';
import M from './components/RealSigns/M.js';
import N from './components/RealSigns/N.js';
import O from './components/RealSigns/O.js';
import P from './components/RealSigns/P.js';
import Q from './components/RealSigns/Q.js';
import R from './components/RealSigns/R.js';
import S from './components/RealSigns/S.js';
import T from './components/RealSigns/T.js';
import U from './components/RealSigns/U.js';
import V from './components/RealSigns/V.js';
import W from './components/RealSigns/W.js';
import X from './components/RealSigns/X.js';
import Y from './components/RealSigns/Y.js';
import Z from './components/RealSigns/Z.js';
import One from './components/RealSigns/One.js';
import Two from './components/RealSigns/Two.js';
import Three from './components/RealSigns/Three.js';
import Four from './components/RealSigns/Four.js';
import Five from './components/RealSigns/Five.js';
import Six from './components/RealSigns/Six.js';
import Seven from './components/RealSigns/Seven.js';
import Eight from './components/RealSigns/Eight.js';
import Nine from './components/RealSigns/Nine.js';
import Ten from './components/RealSigns/Ten.js';

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
          <Route exact path="/practice" component={Practice} />
          <Route exact path="/a" component={A} />
          <Route exact path="/b" component={B} />
          <Route exact path="/c" component={C} />
          <Route exact path="/d" component={D} />
          <Route exact path="/e" component={E} />
          <Route exact path="/f" component={F} />
          <Route exact path="/g" component={G} />
          <Route exact path="/h" component={H} />
          <Route exact path="/i" component={I} />
          <Route exact path="/j" component={J} />
          <Route exact path="/k" component={K} />
          <Route exact path="/l" component={L} />
          <Route exact path="/m" component={M} />
          <Route exact path="/n" component={N} />
          <Route exact path="/o" component={O} />
          <Route exact path="/p" component={P} />
          <Route exact path="/q" component={Q} />
          <Route exact path="/r" component={R} />
          <Route exact path="/s" component={S} />
          <Route exact path="/t" component={T} />
          <Route exact path="/u" component={U} />
          <Route exact path="/v" component={V} />
          <Route exact path="/w" component={W} />
          <Route exact path="/x" component={X} />
          <Route exact path="/y" component={Y} />
          <Route exact path="/z" component={Z} />
          <Route exact path="/1" component={One} />
          <Route exact path="/2" component={Two} />
          <Route exact path="/3" component={Three} />
          <Route exact path="/4" component={Four} />
          <Route exact path="/5" component={Five} />
          <Route exact path="/6" component={Six} />
          <Route exact path="/7" component={Seven} />
          <Route exact path="/8" component={Eight} />
          <Route exact path="/9" component={Nine} />
          <Route exact path="/10" component={Ten} />
        </Switch>
      </div>
    </Router>
   </ApolloProvider>
  );
}

export default App;
