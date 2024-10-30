import React from "react";
import { Link } from "react-router-dom";

const KitKat = () => {
  return (
    <div>
      <h1>BREAK ME OFF A PIECE!!!</h1>
      <img 
      src="https://i.pinimg.com/736x/23/d2/b0/23d2b0e5e34e37d749636fa8b478486b.jpg" 
      alt="KitKat" />
      <button><Link to="/">Go Back</Link></button>
    </div>
  )
}

export default KitKat;