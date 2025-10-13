export default function Destructuring() {
  const person = { name: "John", age: 25 };
  const { name, age } = person;

  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;

  return (
    <div id="wd-destructuring">
      <h4>Object Destructuring</h4>
      <p>{`name: ${name}, age: ${age}'`}</p>
      
      <h4>Array Destructuring</h4>
      <p>{`first: ${first}`}</p>
      <p>{`second: ${second}`}</p>
      <p>{`third: ${third}`}</p>
    </div>
  );
}
