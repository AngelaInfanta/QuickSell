import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import {FaRegCircle, FaRegTimesCircle, FaPencilAlt, FaPlus, FaHistory, FaCheck } from "react-icons/fa";
import "./Board.js";


function Board(props) {

  return (
     <div style={{width: '90%', padding: 30}}> 
          <h3>{props.icon}&nbsp; {props.title}
          <FaPlus style={{color: "gray", marginLeft: '35%'}} size={15}/>
          <MoreHorizontal style={{color: "gray", marginLeft: '5%'}} size={15}/></h3>
          {props?.board?.Backlog?.map((item) => (
          <Card
            key={item.id}
            card={item}
          />
        ))} 
        {props?.board?.Todo?.map((item) => (
          <Card
            key={item.id}
            card={item}
          />
        ))}
        {props?.board?.['In progress']?.map((item) => (
          <Card
            key={item.id}
            card={item}
          />
        ))}  
        {props?.board?.Done?.map((item) => (
          <Card
            key={item.id}
            card={item}
          />
        ))} 
        {props?.board?.Cancelled?.map((item) => (
          <Card
            key={item.id}
            card={item}
          />
        ))}       
      </div>
  );
}

export default Board;