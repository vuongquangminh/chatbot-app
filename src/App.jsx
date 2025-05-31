import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: 20 }}>
      <h2>Chatbot</h2>
      <p>Xin chào! Tôi là chatbot</p>
      <p>{count}</p>
      <input
        type="text"
        onClick={() => {
          console.log("123");
          setCount((prev) => prev + 1);
        }}
      />
    </div>
  );
}

export default App;
