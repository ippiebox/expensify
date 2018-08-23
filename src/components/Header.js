import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
    <NavLink to="/Create" activeClassName="is-active">Create Expense </NavLink>
    {/* <NavLink to="/Edit" activeClassName="is-active">Edit Expense </NavLink> */}
    <NavLink to="/Help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;
