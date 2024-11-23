import React, { useState } from 'react';
import './Payment.css';

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount] = useState(5000); 
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cardNumber.length === 16 && expiryDate && cvv.length === 3) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setMessage('Paiement effectué avec succès !');
      }, 2000); 
    } else {
      setMessage('Veuillez vérifier vos informations.');
    }
  };

  return (
    <div className="payment">
      <h1>Paiement</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Numéro de carte</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
          />
        </div>
        <div>
          <label>Date d'expiration (MM/AA)</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>
        <div>
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="3"
            required
          />
        </div>
        <div>
          <label>Montant</label>
          <input
            type="text"
            value={`$${(amount / 100).toFixed(2)}`}
            readOnly
          />
        </div>
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? 'Traitement en cours...' : `Payer $${(amount / 100).toFixed(2)}`}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Payment;




