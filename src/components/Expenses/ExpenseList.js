import React from "react";
import Expense from "./Expense";
import './ExpenseList.css';

const ExpenseList = (props) => {

    if (props.items.length === 0){
       return ( 
       <h2 className="expenses-list__fallback">Not found product</h2>
       )
    }

    return (
    <ul className="expenses-list">
       {props.items.map((expense, index) => {
        return (
            <Expense 
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
            />
        )
       })}
    </ul>
    )
};

export default ExpenseList;