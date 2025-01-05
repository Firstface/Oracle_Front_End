import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function CoinCalculator() {
  const [amount, setAmount] = useState('');
  const [denominations, setDenominations] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  const fetchMinimumCoins = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const url = `${backendUrl}/coins?amount=${amount}&denominations=${denominations.split(',').join('&denominations=')}`;

    axios.get(url)
      .then(response => {
        setResult(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setError('Amount cannot be less than 0');
      setAmount(''); // 清空内容
    } else {
      setError('');
      setAmount(value);
    }
  };

  const handleDenominationsChange = (e) => {
    const value = e.target.value;
    const denominationsArray = value.split(',').map(Number);
    if (denominationsArray.some(denomination => denomination < 0) || /[-]/.test(value)) {
      setError('Denominations cannot contain negative values');
      setDenominations(''); // 清空内容
    } else {
      setError('');
      setDenominations(value);
    }
  };

  return (
    <div className="App">
      <h1>Minimum Coins Calculator</h1>
      <div>
        <label>
          Target Amount:
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
        </label>
      </div>
      <div>
        <label>
          Coin Denominations (comma separated):
          <input
            type="text"
            value={denominations}
            onChange={handleDenominationsChange}
          />
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={fetchMinimumCoins}>Calculate</button>
      <div>
        <h2>Result:</h2>
        <ul>
          {result.map((coin, index) => (
            <li key={index}>{coin}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CoinCalculator;