import React, { useEffect, useState } from "react";
import Board from "./Components/Board/Board";
import "./App.css";
import {FaRegCircle, FaAdjust, FaAngleDown, FaHistory, FaSlidersH, FaAngleUp } from "react-icons/fa";

function App() {
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
  const [status, setStatus] = useState(
    JSON.parse(localStorage.getItem("prac-kanban"))
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("prac-kanban"))
  );

useEffect(() => {
  localStorage.setItem("prac-kanban", JSON.stringify(status));
}, [status]);
useEffect(() => {
localStorage.setItem("prac-kanban", JSON.stringify(users));
}, [users]);

const [value1, setValue1] = useState("Status");
const [value2, setValue2] = useState("None");
const [toggle, setToggle] = useState(false);
const handleChange1 = (e) => {
setValue1(e.target.value);
};
const handleChange2 = (e) => {
setValue2(e.target.value);
};


// Accepts the array and key
const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};

// Group by color as key to the person array
const groupedByStatus = groupBy(status, 'status');
console.log(groupedByStatus);
const statusData = Object.entries(groupedByStatus).map(([key, value]) => ({[key]: value}));
console.log(statusData);
  return (
    <div className="app">
      <div className="app_nav">
      <button className="button" onClick={() => setToggle(!toggle)}>
        <FaSlidersH style={{ marginLeft: "1px", marginRight: "5px" }}/> Display &emsp;{toggle ? <FaAngleUp size={16} color="gray"/> : <FaAngleDown size={16} color="gray" />}
      </button>
      </div>  
      {toggle && (
        <div className="drop-down">
          <text style={{ paddingRight: "60px" }}> Grouping </text>
          <select className="select" value={value1} onChange={handleChange1}>
            <option value="Status">Status</option>
            <option value="User">User</option>
          </select>
          <br />
          <text style={{ paddingRight: "64px" }}> Ordering </text>
          <select className="select" value={value2} onChange={handleChange2}>
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
          boardTitle="ticket"
          users={users}
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
          boardTitle="user"
          status={status}
          title={item.name}
          user={item}
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
  );
}
export default App;
