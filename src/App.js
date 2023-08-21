import React, {useState } from "react";
import Board from "./Components/Board/Board";
import "./App.css";
import {FaRegCircle, FaAdjust, FaAngleDown, FaHistory, FaSlidersH, FaAngleUp } from "react-icons/fa";
import data from "./constants/statusData";

const Udata = require('./constants/usersData.json');
const stat = require('./constants/status.json');
function App() {
  const [status, setStatus] = useState(stat);
  const[statusData, setStatusData] = useState(data);
  const [users, setUsers] = useState(Udata
  );
const [value1, setValue1] = useState("Status");
const [value2, setValue2] = useState("None");
const [toggle, setToggle] = useState(false);
const handleChange1 = (e) => {
setValue1(e.target.value);
};
const handleChange2 = (e) => {
setValue2(e.target.value);
};
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
          icon={Object.keys(item) === "Todo" ? (
            <FaRegCircle />
          ):(
            Object.keys(item) === "In progress" ? (
              <FaAdjust style={{color: "darkgoldenrod"}} />
          ): Object.keys(item) === "Backlog" ? (<FaHistory />): (<div />))}
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
