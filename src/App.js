import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import Form from "./components/form/Form.js";
import List from "./components/list/List.js";
import React, { useState } from "react";
import { uid } from "uid";

export default function App() {
  //const [activities, setActivities] = useState([]);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: "",
  });

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
}
