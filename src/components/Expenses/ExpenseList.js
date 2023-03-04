import React from "react";
import ExpenseItem from './Expenseltem';
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const items = props.items || [];
  console.log(items)

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No products found for this date range.</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((expense, index) => (
        <ExpenseItem
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
