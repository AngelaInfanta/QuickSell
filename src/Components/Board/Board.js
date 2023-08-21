import React from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import { FaPlus } from "react-icons/fa";
import { BsFillCheckCircleFill, BsFillDashCircleFill  } from "react-icons/bs";
import "./Board.js";


function Board(props) {
  return (
    <>
    {props.boardTitle === "ticket" && (
     <div style={{width: '400px'}}>
        {console.log(props)}
          <h3>{props.icon}&nbsp; {props.title}
          <FaPlus style={{color: "gray", marginLeft: '200px'}} size={15}/>
          <MoreHorizontal style={{color: "gray", marginLeft: '5px'}} size={15}/></h3>
          {props?.board?.Backlog?.map((item) => (
            <>           
          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id === item.userId)}
            card={item}
          />
          </>
        ))} 
        {props?.board?.Todo?.map((item) => (
          <>
          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id === item.userId)}
            card={item}
          />
          </>
        ))}
        {props?.board?.['In progress']?.map((item) => (
            <>
          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id === item.userId)}
            card={item}
          />
          </>
        ))}  
        {props?.board?.Done?.map((item) => (
            <>
          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id === item.userId)}
            card={item}
          />
          </>
        ))} 
        {props?.board?.Cancelled?.map((item) => (
          <>

          <Card
            key={item.id}
            cardTitle="ticket"
            avail={props?.users?.filter(a => a.id === item.userId)}
            card={item}
          />
          </>
        ))}       
      </div>
    )}
    {props.boardTitle === "user"  && (
      <div style={{width: '400px'}}> 
      <h3>{props.user.available ? (
          <BsFillCheckCircleFill  style={{marginLeft:10, marginRight:2, color: "green"}}/>
        ) : (
          <BsFillDashCircleFill  style={{marginLeft:10, marginRight:2, color: "red"}}/>
          )}
        {props.icon}&nbsp; {props.title}
          <FaPlus style={{color: "gray", marginLeft: '140px'}} size={15}/>
          <MoreHorizontal style={{color: "gray", marginLeft: '5px'}} size={15}/></h3>
          {props?.status?.filter(a => a.userId === props.user.id).map((item) => (
          <Card
            key={props.user.id}
            cardTitle="user"
            stat={item}
            card={props.user}
          />
          ))}
    </div>
    )}
     {props.boardTitle === "priority"  && (
      <div style={{width: '400px'}}> 
        <h3>{props.icon}&nbsp; {props.title}
          <FaPlus style={{color: "gray", marginLeft: '170px'}} size={15}/>
          <MoreHorizontal style={{color: "gray", marginLeft: '5px'}} size={20}/></h3>
          {props?.priority?.["No priority"]?.map((item) => (
            <>      
          <Card
            key={item.id}
            cardTitle="priority"
            card={item}
          />
          </>
        ))} 
        {props?.priority?.Low?.map((item) => (
            <>         
          <Card
            key={item.id}
            cardTitle="priority"
            card={item}
          />
          </>
        ))} 
        {props?.priority?.Medium?.map((item) => (
            <>         
          <Card
            key={item.id}
            cardTitle="priority"
            card={item}
          />
          </>
        ))}
        {props?.priority?.High?.map((item) => (
            <>         
          <Card
            key={item.id}
            cardTitle="priority"
            card={item}
          />
          </>
        ))} 
        {props?.priority?.Urgent?.map((item) => (
            <>         
          <Card
            key={item.id}
            cardTitle="priority"
            card={item}
          />
          </>
        ))} 
    </div>
    )}
    </>
  );
}

export default Board;