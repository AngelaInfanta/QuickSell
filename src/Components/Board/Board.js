import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Board.js";

library.add(faUser);

function Board(props) {

  const [showDropdown, setShowDropdown] = useState(props.title);
  //console.log(props.board);
  return (
    <div className="board">
      <div className="board_header">
        <h3 className="board_header_title">      
          {showDropdown === "Todo" ? <FontAwesomeIcon icon="faUser" />
          : showDropdown === "In progress" ? (<FontAwesomeIcon icon="fa-solid fa-bars-progress" />)
          : showDropdown === "Backlog" && (<FontAwesomeIcon icon="fa-solid fa-clock" />)}
          {props.title}
          &emsp;
          &emsp;
          <MoreHorizontal />
        </h3>

      </div>
      <div className="board_cards custom-scroll">     
        {props?.board?.Todo?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
          />
        ))}
        {props?.board?.['In progress']?.map((item) => (
          <Card
            key={item.id}
            icon={<FontAwesomeIcon icon="fa-solid fa-bars-progress" />}
            card={item}
            boardId={props.board.id}
          />
        ))}  
        {props?.board?.Backlog?.map((item) => (
          <Card
            key={item.id}
            icon={<FontAwesomeIcon icon="fa-solid fa-clock" />}
            card={item}
            boardId={props.board.id}
          />
        ))} 
        {props?.board?.Done?.map((item) => (
          <Card
            key={item.id}
            icon={<FontAwesomeIcon icon="fa-solid fa-check" />}
            card={item}
            boardId={props.board.id}
          />
        ))} 
        {props?.board?.Cancelled?.map((item) => (
          <Card
            key={item.id}
            icon={<FontAwesomeIcon icon="fa-solid fa-ban" />}
            card={item}
            boardId={props.board.id}
          />
        ))}       
      </div>
    </div>
  );
}

export default Board;