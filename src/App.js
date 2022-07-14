import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Teste");

  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Parágrafo do App.js</p>
      {/* Inline CSS */}
      <p
        style={{
          backgroundColor: "black",
          color: "#fff",
          padding: "10px",
          borderTop: "2px solid red",
          borderBottom: "2px solid red",
        }}
      >
        Elemento estilizado com CSS inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Teste" ? { color: "green", backgroundColor: "#000" } : null
        }
      >
        CSS dinâmico 2
      </h2>
      <h2 className={redTitle ? "red-title" : "title"}>Título com classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
