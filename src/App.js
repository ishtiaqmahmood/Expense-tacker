import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      ammont: 230,
      date: new Date(2021, 3, 5),
    },
    {
      id: 'e2',
      title: 'Car',
      ammont: 2300,
      date: new Date(2021, 6, 11),
    },
    {
      id: 'e3',
      title: 'Wooden Table',
      ammont: 350,
      date: new Date(2021, 7, 10),
    },
    {
      id: 'e4',
      title: 'Home Rent',
      ammont: 1500,
      date: new Date(2021, 5, 6),
    },
  ]
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
