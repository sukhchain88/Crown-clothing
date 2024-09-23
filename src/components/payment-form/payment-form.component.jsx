import React, { useState, Fragment } from "react";
import Button from "../button/button.component";
import PaymentFormItem from "../payment-form-item/payment-form-items.component";
import "./payment-form.style.scss";

const PaymentForm = () => {
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false);

  const openPaymentForm = () => setIsPaymentFormVisible(true);
  const closePaymentForm = () => setIsPaymentFormVisible(false);

  return (
    <Fragment>
      <Button onClick={openPaymentForm}>Open Payment Form</Button>
      {isPaymentFormVisible && (
        <div className="payment-popup">
          <div className="payment-container">
            <PaymentFormItem closePaymentForm={closePaymentForm} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PaymentForm;
