import React, { useState, useEffect } from "react";
import "./Checkout.css";

const Checkout = (props) => {
  /*Initializing state and setting up
  handleChange functions for inputs in the
  checkout menu*/

  const [orderType, setOrderType] = useState("");
  const updateOrderType = (event) => {
    setOrderType(event.target.value);
  };
  const [firstName, setFirstName] = useState("");
  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const [lastName, setLastName] = useState("");
  const updateLastName = (event) => {
    setLastName(event.target.value);
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const updatePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const [email, setEmail] = useState("");
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const [address, setAddress] = useState("");
  const updateAddress = (event) => {
    setAddress(event.target.value);
  };
  const [zipCode, setZipCode] = useState("");
  const updateZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const [paymentMethod, setPaymentMethod] = useState("");
  const updatePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const [cardNumber, setCardNumber] = useState("");
  const updateCardNumber = (event) => {
    setCardNumber(event.target.value);
  };

  const [expirationMonth, setExpirationMonth] = useState("");
  const updateExpirationMonth = (event) => {
    setExpirationMonth(event.target.value);
  };

  const [expirationYear, setExpirationYear] = useState("");
  const updateExpirationYear = (event) => {
    setExpirationYear(event.target.value);
  };

  const [securityCode, setSecurityCode] = useState("");
  const updateSecurityCode = (event) => {
    setSecurityCode(event.target.value);
  };

  const [tip, setTip] = useState();
  const updateTip = (event) => {
    setTip(event.target.value);
  };

  /*Initializing state creating a function for the updated total
  in the case the user is paying by credit card*/
  const [newTotal, setNewTotal] = useState();
  const updateNewTotal = () => {
    if (paymentMethod === "Credit" || paymentMethod === "Debit") {
      setNewTotal(parseFloat(props.total) + parseFloat(tip));
    } else {
      setNewTotal(props.total);
    }
  };
  useEffect(updateNewTotal);

  /*Initializing state and creating a function
  that updates state when the checkout form is completed
  and submitted*/
  const [orderFinalized, setOrderFinalized] = useState(false);
  const finalizeOrder = (event) => {
    event.preventDefault();
    setOrderFinalized(true);
  };

  /*Function to determine the display
  based on whether the checkout form has been
  completed*/
  const display = () => {
    if (orderFinalized === false) {
      return (
        <div>
          <form id="checkout-form" onSubmit={finalizeOrder}>
            <label className="checkout-input-label">
              <select
                className="checkout-input"
                onChange={updateOrderType}
                required
              >
                <option value="" disabled selected>
                  Select Pickup or Delivery
                </option>
                <option value="Pickup">Pickup</option>
                <option value="Delivery">Delivery</option>
              </select>
            </label>
            <label className="checkout-input-label">
              First Name:{" "}
              <input
                className="checkout-input"
                type="text"
                value={firstName}
                onChange={updateFirstName}
                required
              />
            </label>
            <label className="checkout-input-label">
              Last Name:{" "}
              <input
                className="checkout-input"
                type="text"
                value={lastName}
                onChange={updateLastName}
                required
              />
            </label>
            <label className="checkout-input-label">
              Telephone Number:{" "}
              <input
                className="checkout-input"
                type="tel"
                value={phoneNumber}
                onChange={updatePhoneNumber}
                required
              />
            </label>
            <label className="checkout-input-label">
              Email:{" "}
              <input
                className="checkout-input"
                type="email"
                value={email}
                onChange={updateEmail}
                required
              />
            </label>
            <label className="checkout-input-label">
              Address Line 1:{" "}
              <input
                className="checkout-input"
                type="text"
                value={address}
                onChange={updateAddress}
                required
              />
            </label>
            <label className="checkout-input-label">
              Zip Code:{" "}
              <input
                id="zip-code-input"
                className="checkout-input"
                type="number"
                maxLength="5"
                value={zipCode}
                onChange={updateZipCode}
                required
              />
            </label>
            <label className="checkout-input-label">
              <select
                className="checkout-input"
                onChange={updatePaymentMethod}
                required
              >
                <option value="" disabled selected>
                  Select a payment method
                </option>
                <option value="Cash">Cash</option>
                <option value="Credit">Credit Card</option>
                <option value="Debit">Debit Card</option>
              </select>
            </label>
            {cardDisplay()}
            <button id="finalize-order" type="submit">
              Finalize Order{" "}
            </button>
          </form>
          <h1 id="order-summary-header">Order Summary</h1>
          {orderItemList}
          <h2 className="order-summary-data">
            Subtotal: {"$" + props.subtotal.toFixed(2)}
          </h2>
          <h2 className="order-summary-data">
            Tax: {"$" + props.tax.toFixed(2)}
          </h2>
          {tip > 0 && paymentMethod !== "Cash" ? (
            <h2 className="order-summary-data">
              Tip: {"$" + parseFloat(tip).toFixed(2)}
            </h2>
          ) : (
            ""
          )}
          <h2 className="order-summary-data">
            Total:{" "}
            {newTotal ? "$" + newTotal.toFixed(2) : props.total.toFixed(2)}
          </h2>
        </div>
      );
    } else if (orderFinalized === true) {
      return (
        <>
          <h2 className="checkout-message">
            Thank you for ordering from Freddie's Pizza &amp; Burgers
          </h2>
          {orderType === "Pickup" ? (
            <h2 className="checkout-message">
              Your order will be ready for pickup in 20 minutes
            </h2>
          ) : (
            <h2 className="checkout-message">
              Your order should be delivered to {address} in 30 minutes
            </h2>
          )}
        </>
      );
    }
  };

  /*Creating a function for displaying the card form
  if a card is selected as a payment option*/
  const cardDisplay = () => {
    if (paymentMethod === "Credit" || paymentMethod === "Debit") {
      return (
        <>
          <label className="checkout-input-label">
            Card Number:{" "}
            <input
              id="card-number-input"
              className="checkout-input"
              type="number"
              maxLength="16"
              value={cardNumber}
              onChange={updateCardNumber}
              required
            />
          </label>
          <label className="checkout-input-label">
            Expiration Date:{" "}
            <select
              className="checkout-input"
              value={expirationMonth}
              onChange={updateExpirationMonth}
              required
            >
              <option value="" disabled selected>
                Month
              </option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select
              value={expirationYear}
              onChange={updateExpirationYear}
              required
            >
              <option value="" disabled selected>
                Year
              </option>
              <option value="20">2020</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
            </select>
          </label>
          <label className="checkout-input-label">
            Security Code:{" "}
            <input
              id="security-code-input"
              className="checkout-input"
              type="number"
              maxLength="4"
              value={securityCode}
              onChange={updateSecurityCode}
              required
            />
          </label>
          <label className="checkout-input-label">
            Tip:{" $"}
            <input
              id="tip-input"
              className="checkout-input"
              type="number"
              step="0.01"
              value={tip}
              onChange={updateTip}
              required
            />
          </label>
        </>
      );
    } else {
      return "";
    }
  };

  const orderItemList = props.order.map((item) => {
    if (item[0] > 0) {
      return (
        <h2 className="order-summary-data">
          {item[0] + "x " + item[2] + " - $" + item[0] * item[1]}
        </h2>
      );
    }
  });

  return <>{display()}</>;
};

export default Checkout;
