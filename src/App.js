import React from 'react';
import Expense from "./components/Expenses/Expense";

import NewExpenses from './components/NewExpenses/NewExpenses';

function App() {

  const expense = [
    {
      id: "0",
      title: "Car",
      price: "10",
      date: new Date(2022, 2, 28),
    },{
      id: "1",
      title: "pen",
      price: "1",
      date: new Date(2022, 1,8),
    },{
      id: "2",
      title: "water",
      price: "10",
      date: new Date(2022, 3, 28),
    },{
      id: "3",
      title: "phone",
      price: "100",
      date: new Date(2022, 8, 18),
    },
  ];

  return (
    <div className="App">
        <NewExpenses/>
        <Expense expense={expense}/>
    </div>
  );
}

export default App;
