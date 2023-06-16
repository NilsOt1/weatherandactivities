import "./App.css";
import Form from "./components/form/Form.js";
import React, { useState } from "react";
import { uid } from "uid";

export default function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }
  console.log(activities);
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List />
    </div>
  );

  function List() {
    return (
      <ul>
        <li>{[activities]}</li>
      </ul>
    );
  }
}
