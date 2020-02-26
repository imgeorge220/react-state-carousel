import React, { useState } from 'react';
import './Coin.css';
import queenImg from './tooney-queen.jpeg'
import bearImg from './tooney-bear.jpeg'

function Coin(props) {
  console.log("rerendering")
  return (
    <img className="Coin-img"
    alt={props.side === "queen" ? "Queen" : "Bear"}
    src={props.side === "queen" ? queenImg : bearImg}></img>
  )
}

export default Coin;