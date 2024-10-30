import React from "react";
import { Link } from "react-router-dom";

const Skittles = () => {
  return (
    <div>
      <h1>🌈🌈 Taste the rainbow!! 🌈🌈</h1>
      <img 
      src="https://t4.ftcdn.net/jpg/03/80/56/99/360_F_380569969_hSF4B5mjVm6lfQMp4FkOOoBucu3Q5C2c.jpg" 
      alt="Skittles bag" />
      <button><Link to="/">Go Back</Link></button>
    </div>
  )
}

export default Skittles;