import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem (props) {

    const [title, setTitle] = useState(props.title);
    
    const handleOnClick = () => {
        console.log("clicked!!!!!!!!!");
        setTitle("Updated!!");
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price'>
                ${props.price}
            </div>
            <button onClick={handleOnClick}>Change text</button>
        </Card>
    );
}

export default ExpenseItem;