import React from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

function Expense(props) {

    const [thisYear, setThisYear] = React.useState('2020');

    const filterHandlerChange = (selectedYear) => {
        setThisYear(selectedYear);
    };

    const filteredExpense = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === thisYear}
    )

  return (
    <div>
      <Card className="container">
        <ExpensesFilter onChangeFilter={filterHandlerChange} yearValue={thisYear}/>
        <ExpenseList items={filteredExpense || undefined}/>
      </Card>
    </div>
  );
}

export default Expense;
