
import ExpenseItem from "./components/Expenseltem";

function App() {

  const expense = [
    {
      id: "0",
      title: "Car",
      price: "10",
      date: new Date(2022, 2, 1),
    },{
      id: "1",
      title: "pen",
      price: "1",
      date: new Date(2022, 2, 2),
    },{
      id: "2",
      title: "water",
      price: "10",
      date: new Date(2022, 2, 3),
    },{
      id: "3",
      title: "phone",
      price: "100",
      date: new Date(2022, 2, 4),
    },
  ];

  return (
    <div className="App">
      <h2>
        This is home page
      </h2>
      <ExpenseItem title={expense[0].title} price={expense[0].price} date={expense[0].date}/>
      <ExpenseItem title={expense[1].title} price={expense[1].price} date={expense[1].date}/>
      <ExpenseItem title={expense[2].title} price={expense[2].price} date={expense[2].date}/>
      <ExpenseItem title={expense[3].title} price={expense[3].price} date={expense[3].date}/>
    </div>
  );
}

export default App;
