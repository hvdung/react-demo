import "./App.scss";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Tiamo",
      date: new Date(2023, 8, 10),
      amount: 123.5,
    },
    {
      id: 2,
      title: "Tiamo2",
      date: new Date(2023, 9, 2),
      amount: 241.5,
    },
    {
      id: 3,
      title: "Tiamo3",
      date: new Date(2023, 7, 23),
      amount: 653.5,
    },
    {
      id: 4,
      title: "Tiamo4",
      date: new Date(2023, 10, 18),
      amount: 222.5,
    },
    {
      id: 5,
      title: "Tiamo5",
      date: new Date(2023, 6, 9),
      amount: 874.5,
    },
  ];
  return (
    <div className="App">
      <Card>
        {expenses.map((expense, index) => (
          <ExpenseItem key={index} {...expense} />
        ))}
      </Card>
    </div>
  );
}

export default App;
