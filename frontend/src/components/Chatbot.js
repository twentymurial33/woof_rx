import { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([{ text: "Hi! How can I help you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "You said: " + input, sender: "bot" }]);
    }, 500);

    setInput("");
  };

  return (
    <div style={{ border: "1px solid #ccc", width: 300, padding: 10 }}>
      <div style={{ height: 200, overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.sender === "user" ? "right" : "left" }}>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;
