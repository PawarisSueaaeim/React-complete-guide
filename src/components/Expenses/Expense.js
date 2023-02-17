import React from "react";
import "./Expense.css";
import ExpenseItem from "./Expenseltem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {

    const [thisYear, setThisYear] = React.useState('2020');

    const filterHandlerChange = (selectedYear) => {
        setThisYear(selectedYear);
    };

    const filteredExpense = props.items.filter((expense) => {
      return (
        expense.date.getFullYear().toString() === thisYear
      )
    })

  return (
    <div>
      <Card className="container">
      <ExpensesFilter onChangeFilter={filterHandlerChange} yearValue={thisYear}/>
      {filteredExpense.map((expense, index) => {
        return (<ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
          />)
      })}
      </Card>
    </div>
  );
}

export default Expense;
