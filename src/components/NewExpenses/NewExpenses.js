import React, {useState} from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";


const NewExpenses = (props) => {
    const [isEditingExpense, setIsEditingExpense] = useState(false);

    const saveExpenseDataHandler = (enteredSaveExpenseData) => {
        const expenseData = {
            ...enteredSaveExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditingExpense(false);   
    };

    const editingExpenseHandler = () => {
        setIsEditingExpense(true);
    };

    const stopEditingExpenseHandler = () => {
        setIsEditingExpense(false);
    };

    return <div className="new-expense">
        {!isEditingExpense && <button onClick={editingExpenseHandler}>Add New Expense</button> }
        {isEditingExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancal={stopEditingExpenseHandler}/>}
    </div>
};

export default NewExpenses;