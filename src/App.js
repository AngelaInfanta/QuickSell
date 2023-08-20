import React, { useEffect, useState } from "react";
import Board from "./Components/Board/Board";
import "./App.css";
//import Editable from "./Components/Editabled/Editable";

function App() {

  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban"))
  );
  
  var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  useEffect(() => {
    const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setBoards(json.tickets);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);

var groupedByStatus = groupBy(boards, 'status')
console.log(groupedByStatus);
var statusData = Object.entries(groupedByStatus).map(([key, value]) => ({[key]: value}))

useEffect(() => {
  localStorage.setItem("prac-kanban", JSON.stringify(boards));
}, [boards]);

  return (
    <div className="app">
      <div className="app_nav">
        <h1> Kanban Board </h1>
      </div>
      <div className="app_boards_container">
        <div className="app_boards">
        {
        //console.log(data)
      }
          {statusData?.map((item) => (
          <Board
          key={Object.keys(item)}
          title={Object.keys(item)}
          length={Object.keys(item).length}
          board={item}
        />
          ))}
                   
        </div>
      </div>
    </div>
  );
}

export default App;