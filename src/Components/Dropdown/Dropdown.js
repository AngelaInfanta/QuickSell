import "./styles.css";
import React, { useState } from "react";

export const DD = () => {
  const [value1, setValue1] = useState("Status");
  const [value, setValue] = useState("None");
  const [toggle, setToggle] = useState(true);
  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
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
          <select style={{ paddingRight: "10px" }} value={value} onChange={handleChange}>
            <option value="Priority">Priority</option>
            <option value="None">None</option>
          </select>
        </div>
      )}
      {value1 === "Status" && value === "None" ? (
        <p>{`Todo, done, in progress dikhao`}</p>
      ) : value1 === "User" && value === "None" ? (
        <p>{`Ram, shyam, laxman dikhao`}</p>
      ) : value === "Priority" ? (
        <p>{`urgent, medium, no need dikhao`}</p>
      ) : (
        <br />
      )}
    </div>
  );
};
