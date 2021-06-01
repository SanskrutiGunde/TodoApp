import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    //console.log(inputText);
    if (inputText.length > 0) {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div id="Clouds">
        <div className="Cloud Foreground"></div>
        <div className="Cloud Background"></div>
        <div className="Cloud Foreground"></div>
        <div className="Cloud Background"></div>
        <div className="Cloud Foreground"></div>
        <div className="Cloud Background"></div>
        <div className="Cloud Background"></div>
        <div className="Cloud Foreground"></div>
        <div className="Cloud Background"></div>
        <div className="Cloud Background"></div>
        {/* <!--  <svg viewBox="0 0 40 24" class="Cloud"><use xlink:href="#Cloud"></use></svg>--> */}
      </div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input
            className="todoInput"
            onChange={handleChange}
            type="text"
            value={inputText}
          />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <TodoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
