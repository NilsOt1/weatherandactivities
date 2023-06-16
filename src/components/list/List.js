export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          <h3>{activity.name}</h3>
        </li>
      ))}
    </ul>
  );
}
