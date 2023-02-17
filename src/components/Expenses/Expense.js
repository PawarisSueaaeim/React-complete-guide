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

  return (
    <div>
      <Card className="container">
      <ExpensesFilter onChangeFilter={filterHandlerChange} yearValue={thisYear}/>
      {props.expense?.map((expense) => {
        return (<ExpenseItem
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
