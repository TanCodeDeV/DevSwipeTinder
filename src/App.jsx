import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-3xl font-bold border border-black rounded-md m-2 p-2">
      Hello React + Vite + Tailwind
    </div>
  );
}

export default App;
