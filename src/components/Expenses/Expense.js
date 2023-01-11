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
        <ExpenseItem
          title={props.expense[0].title}
          price={props.expense[0].price}
          date={props.expense[0].date}
        />
        <ExpenseItem
          title={props.expense[1].title}
          price={props.expense[1].price}
          date={props.expense[1].date}
        />
        <ExpenseItem
          title={props.expense[2].title}
          price={props.expense[2].price}
          date={props.expense[2].date}
        />
        <ExpenseItem
          title={props.expense[3].title}
          price={props.expense[3].price}
          date={props.expense[3].date}
        />
      </Card>
    </div>
  );
}

export default Expense;
