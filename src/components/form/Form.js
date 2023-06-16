export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formElements = form.elements;
    const data = {
      name: formElements.name.value,
      isForGoodWeather: formElements.activityCheck.checked,
    };
    onAddActivity(data);
    form.reset();
    formElements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="activityCheck">Good-weather activity:</label>
      <input type="checkbox" id="activityCheck" name="activityCheck" />
      <button type="submit">Submit</button>
    </form>
  );
}
