import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
console.log(props);
  const { id, title, priority, tag, userId } = props.card;

  return (
    <>
    <div className="card">

        <p>{id}</p>
        <div className="card_title">
        <b>{title}</b>
        </div>
        <i> {tag}</i> <br />
     </div>
   </>
  );
}

export default Card;