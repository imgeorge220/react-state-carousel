import React, { useState } from 'react';
import './Coin-Container.css';
import Coin from './Coin';

function CoinContainer() {
  const [coinSide, setCoinSide] = useState("queen");
  const [flipCount, setFlipCount] = useState({ total: 0, queen: 0, bear: 0 });

  function flipCoin() {
    let flip = Math.random() < 0.5 ? "queen" : "bear";
    setCoinSide(flip);

    let newCount = { ...flipCount };
    newCount[flip]++;
    newCount.total++;

    setFlipCount(newCount);
  }

  return (
    <div>
      <h1>Let's flip a coin!</h1>
      <Coin side={coinSide} />
      <button onClick={flipCoin} className="Coin-button">Flip Me!</button>
      <p>Out of {flipCount.total} flips, there have been {flipCount.queen} queens and {flipCount.bear} bears.</p>
    </div>
  )
}

export default CoinContainer;