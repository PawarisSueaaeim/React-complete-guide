import React from "react";
import Expense from "./Expense";
import "./ExpenseList.css";

const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No products found for this date range.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense, index) => (
        <Expense
          key={`${expense.id}-${index}`}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
