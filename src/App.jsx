import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Map from "./components/Map"; // Importa el componente Map

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Map /> {/* Renderiza el componente Map */}
    </>
  );
}

export default App;
