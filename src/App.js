//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import { Outlet } from 'react-router-dom';
import Expense_Record from './components/Expense_Record';

const App = () => {
  return (
    <div>
      <h1>Start point</h1>
      <Expense_Record />
    </div>
  );
}

export default App;
