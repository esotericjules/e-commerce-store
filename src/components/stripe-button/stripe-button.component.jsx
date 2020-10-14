import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 1000;
  const publishableKey = "pk_test_51HSGU0Bshz4G5YcOsV0mIGi93gPsScYM0hWUfxBPruG3GMnRbCnH9QIkKKkjHpnM0N1odVOqxJNRK6oZDzGM1NQD00dermMKWS";
  const onToken = token => {
    alert('Payment Successful')
  };
  
  return (
    <StripeCheckout
      label={'Pay Now'}
      name={'CRWN Clothing Ltd.'}
      billingAddress
      shippingAddress
      image={'https://sendeyo.com/up/d/f3eb2117da'}
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel={'Pay Now'}
      token={onToken}
      stripeKey={publishableKey}
      
    />
  );
};

export default StripeCheckoutButton;