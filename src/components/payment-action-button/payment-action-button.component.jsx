import Button from "../button/button.component";
import "./payment-action-button.style.scss";

const PaymentActionButton = ({ isProcessingPayment, closePaymentForm }) => {
  return (
    <>
      <Button
        type="submit"
        buttonType="inverted"
        disabled={isProcessingPayment}
      >
        {isProcessingPayment ? "Processing..." : "Pay Now"}
      </Button>

      <Button type="button" buttonType="inverted" onClick={closePaymentForm}>
        close
      </Button>
    </>
  );
};

export default PaymentActionButton;
