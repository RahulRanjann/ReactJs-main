import "./App.css";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <ToDoList />
      </div>
      <Footer />
    </>
  );
}

export default App;
