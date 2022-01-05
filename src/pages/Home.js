import { useState } from 'react';

function Home(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
       Home Page
    </div>
  );
}

export default Home