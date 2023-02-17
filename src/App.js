import React ,{useState}from 'react';
import Expense from "./components/Expenses/Expense";

import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_EXPENSE = [
  {
    id: "0",
    title: "Car",
    price: "10",
    date: new Date(2023, 2, 28),
  },{
    id: "1",
    title: "pen",
    price: "1",
    date: new Date(2020, 1,8),
  },{
    id: "2",
    title: "water",
    price: "10",
    date: new Date(2022, 3, 28),
  },{
    id: "3",
    title: "phone",
    price: "100",
    date: new Date(2021, 8, 18),
  },
];

function App() {

  const [ addExpense, setAddExpense ] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    console.log('add expen in add.js');
    console.log(expense)
    setAddExpense((prevExpense) => {
      return (
        [expense, ...prevExpense]
      )
    });
  };

  return (
    <div className="App">
        <NewExpenses onAddExpense={addExpenseHandler}/>
        <Expense items={addExpense}/>
    </div>
  );
}

export default App;
