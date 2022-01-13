import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
    return (
        <div className='expense-date'>
          <div >
            {props.date.toString()}
          </div>
        </div>
    )
}

export default ExpenseDate
