import React from "react";
import "./VendingMachine.css"
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className='VendingMachine'>
      <button><Link to="/snickers">Snickers</Link></button>
      <button><Link to="/skittles">Skittles</Link></button>
      <button><Link to="/kitkat">KitKat</Link></button>
      <img src="https://media.sketchfab.com/models/d09df0200e5b4b85857bc900be2d1232/thumbnails/3dd68d2b3cb24222a343a836ff472f0a/8823747fbc814df6bbbd0f7a1c064e80.jpeg"
      alt="Vending Machine" />
    </div>
  )
}

export default VendingMachine;