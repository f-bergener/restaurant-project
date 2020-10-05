import React, { useState, useEffect } from "react";
import "./App.css";
import Checkout from "./components/Checkout";

const App = () => {
  /*The below code initializes state for the 
  desired quantity of each item in the appetizer section
  of the menu*/
  const [nachos, setNachos] = useState(0);
  const [onionRings, setOnionRings] = useState(0);
  const [brusselSprouts, setBrusselSprouts] = useState(0);
  const [friedPickles, setFriedPickles] = useState(0);
  const [friedCalamari, setFriedCalamari] = useState(0);
  const [garlicBread, setGarlicBread] = useState(0);

  /*The below code takes user input to update
  the state of the quantity
  that is initialized above*/

  const updateNachos = (event) => {
    setNachos(event.target.value);
  };

  const updateOnionRings = (event) => {
    setOnionRings(event.target.value);
  };

  const updateBrusselSprouts = (event) => {
    setBrusselSprouts(event.target.value);
  };

  const updateFriedPickles = (event) => {
    setFriedPickles(event.target.value);
  };

  const updateFriedCalamari = (event) => {
    setFriedCalamari(event.target.value);
  };

  const updateGarlicBread = (event) => {
    setGarlicBread(event.target.value);
  };

  /*The below code initializes state for the 
  desired quantity of each item in the entree section
  of the menu*/
  const [pepperoniPizza, setPepperoniPizza] = useState(0);
  const [cheeseBurger, setCheeseBurger] = useState(0);
  const [chiliCheeseFries, setChiliCheeseFries] = useState(0);
  const [cheesePizza, setCheesePizza] = useState(0);
  const [lobsterRoll, setLobsterRoll] = useState(0);
  const [ultraNachos, setUltraNachos] = useState(0);

  /*The below code takes user input to update
  the state of the quantity
  that is initialized above*/
  const updatePepperoniPizza = (event) => {
    setPepperoniPizza(event.target.value);
  };

  const updateCheeseBurger = (event) => {
    setCheeseBurger(event.target.value);
  };

  const updateChiliCheeseFries = (event) => {
    setChiliCheeseFries(event.target.value);
  };

  const updateCheesePizza = (event) => {
    setCheesePizza(event.target.value);
  };

  const updateLobsterRoll = (event) => {
    setLobsterRoll(event.target.value);
  };

  const updateUltraNachos = (event) => {
    setUltraNachos(event.target.value);
  };

  /*The below code initializes state for the 
  desired quantity of each item in the drink section
  of the menu*/
  const [cocaCola, setCocaCola] = useState(0);
  const [sprite, setSprite] = useState(0);
  const [fanta, setFanta] = useState(0);
  const [rootBeer, setRootBeer] = useState(0);
  const [lemonade, setLemonade] = useState(0);
  const [icedTea, setIcedTea] = useState(0);

  /*The below code takes user input to update
  the state of the quantity
  that is initialized above*/
  const updateCocaCola = (event) => {
    setCocaCola(event.target.value);
  };

  const updateSprite = (event) => {
    setSprite(event.target.value);
  };

  const updateFanta = (event) => {
    setFanta(event.target.value);
  };

  const updateRootBeer = (event) => {
    setRootBeer(event.target.value);
  };

  const updateLemonade = (event) => {
    setLemonade(event.target.value);
  };

  const updateIcedTea = (event) => {
    setIcedTea(event.target.value);
  };

  /*The below array contains the state of the desired quantity
  of each menu item and the price of each menu item. This array is used
  in the updateSubtotal function to calculate the subtotal of the order*/
  const menu = [
    [nachos, 7.99, "Nachos"],
    [onionRings, 6.99, "Onion Rings"],
    [brusselSprouts, 7.99, "Brussel Sprouts"],
    [friedPickles, 5.99, "Fried Pickles"],
    [friedCalamari, 9.99, "Fried Calamari"],
    [garlicBread, 5.99, "Garlic Bread"],
    [pepperoniPizza, 13.99, "Pepperoni Pizza"],
    [cheeseBurger, 12.99, "Cheeseburger"],
    [chiliCheeseFries, 10.99, "Chili Cheese Fries"],
    [cheesePizza, 11.99, "Cheese Pizza"],
    [lobsterRoll, 19.99, "Lobster Roll"],
    [ultraNachos, 12.99, "Ultra Nachos"],
    [cocaCola, 3.99, "Coca-Cola"],
    [sprite, 3.99, "Sprite"],
    [fanta, 3.99, "Fanta"],
    [rootBeer, 3.99, "Root Beer"],
    [lemonade, 3.99, "Lemonade"],
    [icedTea, 3.99, "Iced Tea"],
  ];

  /*The below code initializes state for subtotal, tax, and total*/
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  /*The below function updates the subtotal based on user input
  and then updates the tax (8% tax) and total based on the subtotal*/
  const updateSubtotal = () => {
    setSubtotal(
      menu[0][0] * menu[0][1] +
        menu[1][0] * menu[1][1] +
        menu[2][0] * menu[2][1] +
        menu[3][0] * menu[3][1] +
        menu[4][0] * menu[4][1] +
        menu[5][0] * menu[5][1] +
        menu[6][0] * menu[6][1] +
        menu[7][0] * menu[7][1] +
        menu[8][0] * menu[8][1] +
        menu[9][0] * menu[9][1] +
        menu[10][0] * menu[10][1] +
        menu[11][0] * menu[11][1] +
        menu[12][0] * menu[12][1] +
        menu[13][0] * menu[13][1] +
        menu[14][0] * menu[14][1] +
        menu[15][0] * menu[15][1] +
        menu[16][0] * menu[16][1] +
        menu[17][0] * menu[17][1]
    );
    setTax(subtotal * 0.08);
    setTotal(subtotal + tax);
  };

  /*The useEffect method below is in place
  to update the state of subtotal, tax, and total*/
  useEffect(updateSubtotal);

  const [checkout, setCheckout] = useState(false);

  const updateCheckout = (event) => {
    event.preventDefault();
    if (subtotal > 0) {
      setCheckout(true);
    }
  };

  const display = () => {
    if (checkout === false) {
      return (
        <div className="menu">
          <form onSubmit={updateCheckout}>
            <h3 className="section-header">Appetizers</h3>
            <div className="button-section">
              <div id="column-1" className="column">
                <div className="item">
                  <input
                    id="nachos"
                    className="quantity"
                    type="number"
                    value={nachos}
                    step="1"
                    min="0"
                    onChange={updateNachos}
                  />
                  <label className="item-label">
                    Nachos ({"$" + menu[0][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="onion-rings"
                    className="quantity"
                    type="number"
                    value={onionRings}
                    step="1"
                    min="0"
                    onChange={updateOnionRings}
                  />
                  <label className="item-label">
                    Onion Rings ({"$" + menu[1][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="brussel-sprouts"
                    className="quantity"
                    type="number"
                    value={brusselSprouts}
                    step="1"
                    min="0"
                    onChange={updateBrusselSprouts}
                  />
                  <label className="item-label">
                    Brussel Sprouts ({"$" + menu[2][1]})
                  </label>
                </div>
              </div>
              <div id="column-2" className="column">
                <div className="item">
                  <input
                    id="fried-pickles"
                    className="quantity"
                    type="number"
                    value={friedPickles}
                    step="1"
                    min="0"
                    onChange={updateFriedPickles}
                  />
                  <label className="item-label">
                    Fried Pickles ({"$" + menu[3][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="fried-calamari"
                    className="quantity"
                    type="number"
                    value={friedCalamari}
                    step="1"
                    min="0"
                    onChange={updateFriedCalamari}
                  />
                  <label className="item-label">
                    Fried Calamari ({"$" + menu[4][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="garlic-bread"
                    className="quantity"
                    type="number"
                    value={garlicBread}
                    step="1"
                    min="0"
                    onChange={updateGarlicBread}
                  />
                  <label className="item-label">
                    Garlic Bread ({"$" + menu[5][1]})
                  </label>
                </div>
              </div>
            </div>

            <h3 className="section-header">Entrees</h3>
            <div className="button-section">
              <div id="column-1" className="column">
                <div className="item">
                  <input
                    id="pepperoni-pizza"
                    className="quantity"
                    type="number"
                    value={pepperoniPizza}
                    step="1"
                    min="0"
                    onChange={updatePepperoniPizza}
                  />
                  <label className="item-label">
                    Pepperoni Pizza ({"$" + menu[6][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="cheeseburger"
                    className="quantity"
                    type="number"
                    value={cheeseBurger}
                    step="1"
                    min="0"
                    onChange={updateCheeseBurger}
                  />
                  <label className="item-label">
                    Cheeseburger ({"$" + menu[7][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="chili-cheese-fries"
                    className="quantity"
                    type="number"
                    value={chiliCheeseFries}
                    step="1"
                    min="0"
                    onChange={updateChiliCheeseFries}
                  />
                  <label className="item-label">
                    Chili Cheese Fries ({"$" + menu[8][1]})
                  </label>
                </div>
              </div>
              <div id="column-2" className="column">
                <div className="item">
                  <input
                    id="cheese-pizza"
                    className="quantity"
                    type="number"
                    value={cheesePizza}
                    step="1"
                    min="0"
                    onChange={updateCheesePizza}
                  />
                  <label className="item-label">
                    Cheese Pizza ({"$" + menu[9][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="lobster-roll"
                    className="quantity"
                    type="number"
                    value={lobsterRoll}
                    step="1"
                    min="0"
                    onChange={updateLobsterRoll}
                  />
                  <label className="item-label">
                    Lobster Roll ({"$" + menu[10][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="ultra-nachos"
                    className="quantity"
                    type="number"
                    value={ultraNachos}
                    step="1"
                    min="0"
                    onChange={updateUltraNachos}
                  />
                  <label className="item-label">
                    Ultra Nachos ({"$" + menu[11][1]})
                  </label>
                </div>
              </div>
            </div>

            <h3 className="section-header">Drinks</h3>
            <div className="button-section">
              <div id="column-1" className="column">
                <div className="item">
                  <input
                    id="coca-cola"
                    className="quantity"
                    type="number"
                    value={cocaCola}
                    step="1"
                    min="0"
                    onChange={updateCocaCola}
                  />
                  <label className="item-label">
                    Coca-Cola ({"$" + menu[12][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="sprite"
                    className="quantity"
                    type="number"
                    value={sprite}
                    step="1"
                    min="0"
                    onChange={updateSprite}
                  />
                  <label className="item-label">
                    Sprite ({"$" + menu[13][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="fanta"
                    className="quantity"
                    type="number"
                    value={fanta}
                    step="1"
                    min="0"
                    onChange={updateFanta}
                  />
                  <label className="item-label">
                    Fanta ({"$" + menu[14][1]})
                  </label>
                </div>
              </div>
              <div id="column-2" className="column">
                <div className="item">
                  <input
                    id="root-beer"
                    className="quantity"
                    type="number"
                    value={rootBeer}
                    step="1"
                    min="0"
                    onChange={updateRootBeer}
                  />
                  <label className="item-label">
                    Root Beer ({"$" + menu[15][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="lemonade"
                    className="quantity"
                    type="number"
                    value={lemonade}
                    step="1"
                    min="0"
                    onChange={updateLemonade}
                  />
                  <label className="item-label">
                    Lemonade ({"$" + menu[16][1]})
                  </label>
                </div>
                <div className="item">
                  <input
                    id="iced-tea"
                    className="quantity"
                    type="number"
                    value={icedTea}
                    step="1"
                    min="0"
                    onChange={updateIcedTea}
                  />
                  <label className="item-label">
                    Iced Tea ({"$" + menu[17][1]})
                  </label>
                </div>
              </div>
            </div>
            <h2 className="total">Subtotal: {"$" + subtotal.toFixed(2)}</h2>
            <h2 className="total">Tax: {"$" + tax.toFixed(2)}</h2>
            <h2 className="total">Total: {"$" + total.toFixed(2)}</h2>
            <button id="submit" type="submit">
              Checkout
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <Checkout order={menu} subtotal={subtotal} tax={tax} total={total} />
      );
    }
  };

  return <>{display()}</>;
};

export default App;
