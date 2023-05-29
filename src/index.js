import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Expense_Record from './components/Expense_Record';
import Expenditure_Report from './components/Expenditure_Report';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

  },
  {
    path: '/Expense_Record',
    element: <Expense_Record />,
  },
  {
    path: '/Expenditure_Report',
    element: <Expenditure_Report />,
  },
  {
    path: 'about',
    element: <p>About</p>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // {/* <App /> */}
    <RouterProvider router={router} />
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
