import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import Form from "./components/form/Form.js";
import List from "./components/list/List.js";
import { uid } from "uid";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: "",
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  return (
    <div className="App">
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
