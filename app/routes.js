import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import FAQ from './components/FAQ';
import AboutHome from './components/AboutHome';
import Documentation from './components/Documentation';
import CFContact from './components/CFContact';
import AdminOffer from './components/AdminOffer';
import Verification from './components/Verification';

export default (
  <Route handler={App}>
    <Route path='/' handler={Home} />
    <Route path='/login' handler={Login} />
    <Route path='/cart' handler={Cart} />
    <Route path='/signup' handler={SignUp} />
    <Route path='/faq' handler={FAQ} />
    <Route path='/aboutyourhome' handler={AboutHome} />
    <Route path='/document' handler={Documentation} />
    <Route path='/cfcontact' handler={CFContact} />
    <Route path='/adminoffer' handler={AdminOffer} />
    <Route path='/verification' handler={Verification} />
  </Route>
);