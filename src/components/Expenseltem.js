import './ExpenseItem.css';

function ExpenseItem () {

    const expenseDate = new Date(2022, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expensePrice = '10';

    return (
        <div className='expense-item'>
            {expenseDate.toString()}
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
            </div>
            <div className='expense-item__price'>
                ${expensePrice}
            </div>
        </div>
    );
};

export default ExpenseItem;