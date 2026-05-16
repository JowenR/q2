import { useState } from "react";
import "./index.css";
 
export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
 
  const goalReached = count >= 5;
 
  return (
    <div className="app-wrapper">
      <div className="card">
 

        <p className="card-header">JM's Counter App</p>
 

        <div className="counter-display">
          <div className={`counter-number ${goalReached ? "reached" : ""}`}>
            {count}
          </div>
          <div className={`counter-label ${goalReached ? "reached" : ""}`}>
            {goalReached ? "GOAL REACHED" : "CURRENT COUNT"}
          </div>
        </div>
 

        {goalReached && (
          <div className="goal-banner">
            <span className="goal-banner-icon">🏆</span>
            <span className="goal-banner-text">Goal Reached!</span>
          </div>
        )}
 

        <div className="btn-row">
          <button
            className="btn"
            onClick={() => setCount(c => c - 1)}
            aria-label="Decrease"
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => setCount(c => c + 1)}
            aria-label="Increase"
          >
            +
          </button>
        </div>
 
        <button className="btn-reset" onClick={() => setCount(0)}>
          ↺ RESET
        </button>
 
        <hr className="divider" />
 
        <p className="section-label">Custom Message</p>
 
        <input
          type="text"
          className="message-input"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type something…"
          aria-label="Custom message input"
        />
 
        <div className={`message-preview ${message ? "has-text" : ""}`}>
          {message || "your message will appear here"}
        </div>
 
      </div>
    </div>
  );
}

