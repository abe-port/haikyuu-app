import { useState } from 'react';

function TestHeader(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
        {props.catName}
        {props.eyeColor}
        {props.age}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

TestHeader.defaultProps = {
    catName: "Sandy",
    eyeColor: "deepblue",
    age: "120"  
}

export default TestHeader