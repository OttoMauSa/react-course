export function Greeting(props) {
  console.log(props);
  return <h1>{props.title}</h1>;
}

export function UserCard({ name, amount, married, address, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
