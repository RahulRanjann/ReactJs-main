import logo from "./logo.svg";
import "./App.css";
import Comp2 from "./component/Comp2";

function App() {
  const users = [
    { username: "john_doe", phoneNo: "555-1234" },
    { username: "jane_smith", phoneNo: "555-5678" },
    { username: "mike_jones", phoneNo: "555-9012" },
    { username: "emma_watson", phoneNo: "555-3456" },
    { username: "david_clark", phoneNo: "555-7890" },
    { username: "sarah_lee", phoneNo: "555-2345" },
    { username: "chris_evans", phoneNo: "555-6789" },
    { username: "anna_johnson", phoneNo: "555-0123" },
    { username: "lisa_brown", phoneNo: "555-4567" },
  ];

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ height: "200px", width: "100%00", backgroundColor: "red" }}
        ></div>
        <div
          style={{ height: "100px", width: "100px", backgroundColor: "blue" }}
        ></div>
      </div>
      {users.map((ele, index) => {
        return <Comp2 name={ele.username} phone={ele.phoneNo} />;
      })}
      {/* <Comp2 name={users.} phone={users} /> */}
    </div>
  );
}

export default App;
