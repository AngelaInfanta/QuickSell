import React from "react";
import {MoreHorizontal } from "react-feather";
import "./Card.css";
import {FaRegCircle, FaCircle, FaAdjust, FaHistory, FaSignal, FaCheck } from "react-icons/fa";

function Card(props) {
  return (
    <>
    {props.cardTitle === "ticket" && (
    <div className="card">
        <p style={{color: "gray"}}>{props.card.id}</p>
        <div className="card_title">
        <b>{props.card.title}</b>
        </div>
        {props.avail[0].available ? (
        <MoreHorizontal style={{paddingRight: 5, justifyContent:"center", width: 25}} size={22} />
        ): (
          <FaSignal style={{paddingRight: 5, justifyContent:"center"}} size={20} />
        )}        
        <FaCircle  style={{color: "gray", marginLeft: 10}} size={12} /> <text style={{color: "gray"}}> {props.card.tag}</text> <br />
     </div>)}
     {props.cardTitle === "user" && (
      <div className="card">
        <p style={{ color: "gray" }}>{props.stat.id}</p>
        <div className="card_title">
          {props.stat.status === 'Todo' && (<FaRegCircle />)}
          {props.stat.status === 'In progress' && (<FaAdjust style={{color: "darkgoldenrod"}} />)}
          {props.stat.status === 'Backlog' && (<FaHistory />)}
          {props.stat.status === 'Done' && (<FaCheck />)}
          {props.stat.status === 'Cancelled' && (<FaRegCircle />)}
          {' '}
             <b> {props.stat.title}</b>
        </div>
        {props.card.available ? (
        <MoreHorizontal style={{paddingRight: 5, justifyContent:"center", width: 25}} size={22} />
        ): (
          <FaSignal style={{paddingRight: 5, justifyContent:"center"}} size={20} />
        )}        
        <FaCircle  style={{color: "gray", marginLeft: 10}} size={12} /> <text style={{color: "gray"}}> {props.stat.tag}</text> <br />
     </div>)}  
     {props.cardTitle === "priority" && (
    <div className="card">
      {console.log(props)}
        <p style={{color: "gray"}}>{props.card.id}</p>
        <div className="card_title">
        {props.card.status === 'Todo' && (<FaRegCircle />)}
          {props.card.status === 'In progress' && (<FaAdjust style={{color: "darkgoldenrod"}} />)}
          {props.card.status === 'Backlog' && (<FaHistory />)}
          {props.card.status === 'Done' && (<FaCheck />)}
          {props.card.status === 'Cancelled' && (<FaRegCircle />)}
          {' '}
             <b> {props.card.title}</b>
        </div>
          <FaSignal style={{paddingRight: 5, justifyContent:"center"}} size={20} />      
        <FaCircle  style={{color: "gray", marginLeft: 10}} size={12} /> <text style={{color: "gray"}}> {props.card.tag}</text> <br />
     </div>)}   
   </>
  );
}

export default Card;