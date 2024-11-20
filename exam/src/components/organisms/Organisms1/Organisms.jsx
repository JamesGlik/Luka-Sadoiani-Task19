import React, { useState, useEffect } from 'react';
import card1 from '../../../assets/Group 10.png';
import card2 from '../../../assets/Group 13.png';

const Organisms = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [holderName, setHolderName] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');

  useEffect(() => {
    document.title = holderName || 'Cardholder Name';
  }, [holderName]);

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formattedValue);
  };

  const handleHolderNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setHolderName(value);
  };

  return (
    <div className="card-section">
      <div className="left">
        <div className="first-card">
          <img src={card1} alt="Credit Card Front" />
          <div className="card-state">
            <div className="card-number">{cardNumber || '0000 0000 0000 0000'}</div>
            <div className="bottom-text">
              <div className="holder-name">{holderName || 'Cardholder Name'}</div>
              <div className="data">{`${expMonth || 'MM'}/${expYear || 'YY'}`}</div>
            </div>
          </div>
        </div>

        <div className="second-card">
          <img src={card2} alt="Credit Card Back" />
          <div className="cvc">{cvc || '000'}</div>
        </div>
      </div>

      <div className="right">
        <div>
          <p>Cardholder Name</p>
          <input
            type="text"
            placeholder="Luka Sadoiani"
            value={holderName}
            onChange={handleHolderNameChange}
          />
        </div>

        <div>
          <p>Card Number</p>
          <input
            type="text"
            placeholder="1234 5678 9123 4567"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>

        <div className="expiration-and-cvc">
          <div>
            <p>Exp. Date (MM/YY)</p>
            <div className="exp-date" style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                placeholder="MM"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
                style={{ width: '70px', height: '45px' }}
              />
              <input
                type="text"
                placeholder="YY"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
                style={{ width: '70px', height: '45px' }}
              />
            </div>
          </div>

          <div>
            <p>CVC</p>
            <input
              type="text"
              placeholder="123"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              style={{ width: '191px', height: '45px' }}
            />
          </div>
        </div>

        <div className="confirm-button">
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Organisms;