import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import {FaRegCircle, FaRegTimesCircle, FaPencilAlt, FaPlus, FaHistory, FaCheck } from "react-icons/fa";
import "./Board.js";


function Board(props) {
  console.log("props in Board: ", props)
  return (
    <>
    {props.boardTitle === "ticket" && (
     <div style={{width: '400px'}}>
          <h3>{props.icon}&nbsp; {props.title}
          <FaPlus style={{color: "gray", marginLeft: '200px'}} size={15}/>
          <MoreHorizontal style={{color: "gray", marginLeft: '5px'}} size={15}/></h3>
          {props?.board?.Backlog?.map((item) => (
            <>         
          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id == item.userId)}
            card={item}
          />
          </>
        ))} 
        {props?.board?.Todo?.map((item) => (
          <>
          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id == item.userId)}
            card={item}
          />
          </>
        ))}
        {props?.board?.['In progress']?.map((item) => (
            <>
          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id == item.userId)}
            card={item}
          />
          </>
        ))}  
        {props?.board?.Done?.map((item) => (
            <>
          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id == item.userId)}
            card={item}
          />
          </>
        ))} 
        {props?.board?.Cancelled?.map((item) => (
          <>

          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id == item.userId)}
            card={item}
          />
          </>
        ))}       
      </div>
    )}
    {props.boardTitle === "user"  && (
      <div style={{width: '350px'}}> 
        <h3>{props.icon}&nbsp; {props.title}
          <FaPlus style={{color: "gray", marginLeft: '140px'}} size={15}/>
          <MoreHorizontal style={{color: "gray", marginLeft: '5px'}} size={15}/></h3>
          {console.log('props.status',props.status)}
          {props?.status?.filter(a => a.userId == props.user.id).map((item) => (
          <Card
            key={props.user.id}
            cardTitle="user"
            stat={item}
            card={props.user}
          />
          ))}
    </div>
    )}
    </>
  );
}

export default Board;