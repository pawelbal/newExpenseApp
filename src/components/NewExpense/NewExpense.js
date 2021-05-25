import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewExpenseStatus(() => !newExpenseStatus);
  };

  const [newExpenseStatus, setNewExpenseStatus] = useState(true);
  const changeNewExpenseStatus = (newExpenseStatus) => {
    setNewExpenseStatus(() => !newExpenseStatus);
  };

  return (
    <div className="new-expense">
      {newExpenseStatus ? (
        <button onClick={changeNewExpenseStatus}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onChangeStatus={changeNewExpenseStatus}
        />
      )}
    </div>
  );
};

export default NewExpense;
