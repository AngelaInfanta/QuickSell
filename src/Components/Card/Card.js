import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";
import {FaRegCircle, FaCircle, FaPencilAlt, FaPlusSquare, FaHistory, FaCheck } from "react-icons/fa";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
console.log(props);
  const { id, title, priority, tag, userId } = props.card;

  return (
    <>
    <div className="card">

        <p style={{color: "gray"}}>{id}</p>
        <div className="card_title">
        <b>{title}</b>
        </div>
        <MoreHorizontal style={{paddingRight: 5, justifyContent:"center"}} />

        <FaCircle  style={{color: "gray", alignItems: "center"}} /> &nbsp;<text style={{color: "gray", alignItems: "center"}}> {tag}</text> <br />
     </div>
   </>
  );
}

export default Card;