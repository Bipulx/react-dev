import React, { useState } from "react";

export default function Todo() {
  const [input, setinput] = useState(" apple");
  const [items, setitems] = useState([]);
  function Event(e) {
    setinput(e.target.value);
  }
  function clickHandle() {
    setitems((olditem) => {
      return [...olditem, input];
    });
  }

  function onClose(){
    
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To DO App</h1>
          <br />
          <input placeholder="add a items" type="text" onChange={Event} />
          <button
            onClick={clickHandle}
            className="btn btn-success"
            style={{ marginLeft: "1rem" }}
          >
            Add
          </button>

          <ol>
            {items.map((itemval) => {
              return <li onClick={onClose}>{itemval}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
