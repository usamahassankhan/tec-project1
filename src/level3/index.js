import React, { useState } from "react";
import "./index.css";
const Index = () => {
  const [state, setState] = useState({
    tasks: [
      { name: "ا", category: "wip", bgcolor: "yellow" },
      { name: "ب", category: "complete", bgcolor: "pink" },
      { name: "پ", category: "complete", bgcolor: "skyblue" },
      { name: "ت", category: "wip", bgcolor: "orange" },
      { name: "ٹ", category: "wip", bgcolor: "green" },
      { name: "ث", category: "complete", bgcolor: "orange" },
      { name: "ج", category: "wip", bgcolor: "skyBlue" },
      { name: "چ", category: "wip", bgcolor: "brown" },
      { name: "ح", category: "wip", bgcolor: "pink" },
      { name: "خ", category: "wip", bgcolor: "MediumOrchid" },
      { name: "د", category: "complete", bgcolor: " purple" },
      { name: "ڈ", category: "wip", bgcolor: "Blueviolet" },
      { name: "ذ", category: "wip", bgcolor: "DarkCyan" },
      { name: "ر", category: "wip", bgcolor: "Gold" },
      { name: "ڑ", category: "wip", bgcolor: "SlateGray" },
      { name: "ز", category: "complete", bgcolor: "Linen" },
      { name: "ژ", category: "wip", bgcolor: "Thistle " },
      { name: "س", category: "wip", bgcolor: "YellowGreen" },
      { name: "ش", category: "wip", bgcolor: "SeaGreen" },
      { name: "ص", category: "wip", bgcolor: "Tomato" },
      { name: "ض", category: "wip", bgcolor: "Lavender" },
      { name: "ط", category: "wip", bgcolor: "PeachPuff" },
      { name: "ظ", category: "wip", bgcolor: "RosyBrown" },
      { name: "ع", category: "complete", bgcolor: "yellow" },
      { name: "غ", category: "wip", bgcolor: "pink" },
      { name: "ف", category: "wip", bgcolor: "skyblue" },
      { name: "ق", category: "wip", bgcolor: "orange" },
      { name: "ک", category: "wip", bgcolor: "green" },
      { name: "گ", category: "wip", bgcolor: "pink" },
      { name: "ل", category: "wip", bgcolor: "MediumOrchid" },
      { name: "م", category: "wip", bgcolor: "Blueviolet" },
      { name: "ن", category: "complete", bgcolor: "DarkCyan" },
      { name: "و", category: "wip", bgcolor: "Gold" },
      { name: "ء", category: "wip", bgcolor: "yellow" },
      { name: "ی", category: "wip", bgcolor: "SlateGray" },
      { name: "ے", category: "complete", bgcolor: "Linen" },
    ],
  });
  const onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = (ev) => {
    console.log("dragover");
    ev.preventDefault();
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    console.log("opdrop", cat, id);
    let tasks = state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    setState({
      ...state,
      tasks,
    });
  };
  var tasks = {
    wip: [],
    complete: [],
  };
  state.tasks.forEach((t) => {
    tasks[t.category].push(
      <div
        key={t.name}
        onDragStart={(e) => onDragStart(e, t.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: t.bgcolor }}
      >
        {t.name}
      </div>
    );
  });
  return (
    // <div>
    //   <div style={{ backgroundColor: "red", display: "inLine" }}>butoton </div>
    //   <div style={{ backgroundColor: "blue", display: "inLine" }}>butoton </div>
    // </div>
    <div className="container-drag">
      {/* <h2 className="header">DRAG & DROP DEMO</h2> */}
      <div
        className="wip"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "wip");
        }}
      >
        <span className="task-header1 ">حروف کو ترتیب دیجیئے</span>
        {tasks.wip}
      </div>
      <div
        className="droppable "
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "complete")}
      >
        {/* <span className="task-header"></span> */}
        {tasks.complete}
      </div>
    </div>
  );
};

export default Index;
