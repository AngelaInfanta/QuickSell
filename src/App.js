import React, { useEffect, useState } from "react";
import Board from "./Components/Board/Board";
import "./App.css";
import {FaRegCircle, FaRegTimesCircle, FaAdjust, FaPlusSquare, FaHistory, FaCheck } from "react-icons/fa";


function App() {

  const [status, setStatus] = useState(
    JSON.parse(localStorage.getItem("prac-kanban"))
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("prac-kanban"))
  );
  var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const [value1, setValue1] = useState("Status");
  const [value2, setValue2] = useState("None");
  const [toggle, setToggle] = useState(false);
  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  useEffect(() => {
    const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setStatus(json.tickets);
        setUsers(json.users);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);

var groupedByStatus = groupBy(status, 'status')
console.log(groupedByStatus);
var statusData = Object.entries(groupedByStatus).map(([key, value]) => ({[key]: value}))

useEffect(() => {
  localStorage.setItem("prac-kanban", JSON.stringify(status));
}, [status, value1]);

useEffect(() => {
localStorage.setItem("prac-kanban", JSON.stringify(users));
}, [users, value2]);

  return (
    <div className="app">
      <div className="app_nav">
      <button onClick={() => setToggle(!toggle)} class="btn btn-primary mb-5">
        Display
      </button>
      <br />
      {toggle && (
        <div className="drop-down">
          <text style={{ paddingRight: "64px" }}> Grouping </text>
          <select style={{ paddingRight: "10px" }} value={value1} onChange={handleChange1}>
            <option value="Status">Status</option>
            <option value="User">User</option>
          </select>
          <br />
          <text style={{ paddingRight: "64px" }}> Ordering </text>
          <select style={{ paddingRight: "10px" }} value={value2} onChange={handleChange2}>
            <option value="Priority">Priority</option>
            <option value="None">None</option>
          </select>
        </div>
      )}
      <div className="app_boards_container">
        <div className="app_boards">
        {value1 === "Status" && value2 === "None" ? (
          statusData?.map((item) => (
          <Board
          key={Object.keys(item)}
          title={Object.keys(item)}
          icon={Object.keys(item) == "Todo" ? (
            <FaRegCircle />
          ):(
            Object.keys(item) == "In progress" ? (
              <FaAdjust style={{color: "darkgoldenrod"}} />
          ): Object.keys(item) == "Backlog" ? (<FaHistory />): (<div />))}
          length={Object.keys(item).length}
          board={item}
        />
          ))) : value1 === "User" && value2 === "None" ? (
        users?.map((item) => (
          <Board
          key={item.id}
          title={item.name}
          board={item}
        />
          ))) : (
            value2 === "Priority" ? (
              <p>{`urgent, medium, no need dikhao`}</p>
              ) : (
                <br />
              ))}
         </div>
      </div> 
      </div>           
    </div>
  );
}

export default App;