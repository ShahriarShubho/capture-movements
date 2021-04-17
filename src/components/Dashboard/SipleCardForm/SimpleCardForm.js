import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const SimpleCardFOrm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null)

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
    } else {
        setPaymentError(null)
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
      <>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
        paymentError && <p>{paymentError}</p>
    }
    </>
  );
};

export default SimpleCardFOrm