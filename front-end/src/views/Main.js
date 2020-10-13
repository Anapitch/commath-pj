import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }
  return (
    <div>
        <button onClick={()=>{nextPage("Number1")}}>
            <h3>Number 1</h3>
        </button>
        <br/>
        <button onClick={()=>{nextPage("Number2")}} >
            <h3>Number 2</h3>
        </button>
        <br/>
        <button onClick={()=>{nextPage("Number3")}} >
            <h3>Number 3</h3>
        </button>
        <br/>
        <button onClick={()=>{nextPage("Number4")}} >
            <h3>Number 4</h3>
        </button>
        <br/>
        <button onClick={()=>{nextPage("Number5")}} >
            <h3>Number 5</h3>
        </button>
        <br/>
        <button onClick={()=>{nextPage("Number6")}} >
            <h3>Number 6</h3>
        </button>
    </div>
  );
}

export default Main;