export default function List({ activities, isGoodWeather }) {
  return (
    <>
      {isGoodWeather ? (
        <p>Good weather activities:</p>
      ) : (
        <p>Bad weather activities:</p>
      )}
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
