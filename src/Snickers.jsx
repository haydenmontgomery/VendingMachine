import React from "react";
import { Link } from "react-router-dom";

const Snickers = () => {
  return (
    <div>
      <h1>You aren't yourself. Eat a snickers!</h1>
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/9/97/Snickers-broken.png" 
      alt="Open Snickers bar" />
      <button><Link to="/">Go Back</Link></button>
    </div>
  )
}

export default Snickers;