import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpanse/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 230,
    date: new Date(2021, 3, 5),
  },
  {
    id: 'e2',
    title: 'Car',
    amount: 2300,
    date: new Date(2021, 6, 11),
  },
  {
    id: 'e3',
    title: 'Wooden Table',
    amount: 350,
    date: new Date(2021, 7, 10),
  },
  {
    id: 'e4',
    title: 'Home Rent',
    amount: 1500,
    date: new Date(2021, 5, 6),
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
