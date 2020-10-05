import React, { useState } from "react";
import "./App.css";

const App = () => {
  /*Arrays with the days of the week
  and months with the number of days in
  each month for displaying options for 
  reservation dates*/
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    ["January", 31],
    ["February", 28, 29],
    ["March", 31],
    ["April", 30],
    ["May", 31],
    ["June", 30],
    ["July", 31],
    ["August", 31],
    ["September", 30],
    ["October", 31],
    ["November", 30],
    ["December", 31],
  ];

  /*Function to get the day of the week converted
  to the name of the day of the week*/
  const dayArray = () => {
    let d = new Date();
    let today = d.getDay();
    let tomorrow = today + 1;
    let array = [];
    if (tomorrow == 6) {
      array.push(days[tomorrow]);
      for (let x = 0; x <= tomorrow; x++) {
        array.push(days[x]);
      }
    } else if (tomorrow == 0) {
      for (let x = 0; x <= 6; x++) {
        array.push(days[x]);
      }
    } else if (tomorrow > 0 || tomorrow < 6) {
      for (let x = tomorrow; x <= 6; x++) {
        array.push(days[x]);
      }
      for (let x = 0; x < tomorrow; x++) {
        array.push(days[x]);
      }
    }
    return array;
  };

  let dayList = dayArray();

  /*Function to convert the date to include the month and
  day in words*/
  const dateArray = () => {
    let d = new Date();
    let today = d.getDate();
    let tomorrow = today + 1;
    let currentMonth = d.getMonth();
    let currentYear = d.getFullYear();
    let leapCalcualtor = currentYear % 4;
    let array = [];
    if (currentMonth == 1 && leapCalcualtor == 0) {
      let daysInMonth = months[currentMonth][2];
      let remainder = daysInMonth - tomorrow;
      if (remainder >= 7) {
        for (let x = 0; x <= 6; x++) {
          array.push(months[currentMonth][0] + " " + tomorrow);
          tomorrow = tomorrow + 1;
        }
      } else {
        for (let x = 0; x <= remainder; x++) {
          array.push(months[currentMonth][0] + " " + tomorrow);
          tomorrow = tomorrow + 1;
        }
        let len = array.length;
        let difference = 7 - len;
        tomorrow = 1;
        for (let x = 0; x <= difference; x++) {
          array.push(months[currentMonth + 1][0] + " " + tomorrow);
          tomorrow = tomorrow + 1;
        }
      }
    } else {
      let daysInMonth = months[currentMonth][1];
      let remainder = daysInMonth - tomorrow;
      if (remainder >= 7) {
        for (let x = 0; x <= 6; x++) {
          array.push(months[currentMonth][0] + " " + tomorrow);
          tomorrow = tomorrow + 1;
        }
      } else {
        for (let x = 0; x <= remainder; x++) {
          array.push(months[currentMonth][0] + " " + tomorrow);
          tomorrow = tomorrow + 1;
        }
        let len = array.length;
        let difference = 7 - len;
        tomorrow = 1;
        for (let x = 0; x <= difference; x++) {
          array.push(months[currentMonth + 1][0] + " " + tomorrow);
          tomorrow = tomorrow + 1;
        }
      }
    }
    return array;
  };

  let dateList = dateArray();

  /*Function that adds the day and date into one array
  of arrays*/
  const combineArrays = () => {
    let array = [];
    for (let x = 0; x <= 6; x++) {
      array.push([dayList[x], dateList[x]]);
    }
    return array;
  };

  let combinedArray = combineArrays();

  /*Function that maps through the array defined above and 
  concatenates the day of the week and the day of the month
  for the reservation form*/
  const dayInputs = combinedArray.map((day) => {
    return (
      <option value={day[0] + ", " + day[1]}>{day[0] + ", " + day[1]}</option>
    );
  });
  /*Initializing state and creating functions to update state
  for the checkout form inputs*/
  const [time, setTime] = useState("");
  const updateTime = (event) => {
    setTime(event.target.value);
  };

  const [day, setDay] = useState("");
  const updateDay = (event) => {
    setDay(event.target.value);
  };

  const [guests, setGuests] = useState("");
  const updateGuests = (event) => {
    setGuests(event.target.value);
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

  /*Initializing state and updating state based on whether the checkout 
  form has been completed and submitted*/
  const [finalizeReservation, setFinalizeReservation] = useState(false);
  const updateFinalizeReservation = (event) => {
    event.preventDefault();
    setFinalizeReservation(true);
  };

  /*Funtion that displays a a confirmation message or 
  the checkout form based on whether the checkout 
  form has been completed and submitted*/
  const display = () => {
    if (finalizeReservation == true) {
      return (
        <>
          <h2 className="reservation-message">
            Thank you for scheduling your reservation at Freddie's Pizza &amp;
            Burgers.
          </h2>
          {day === "today" ? (
            <h2 className="reservation-message">
              We look forward to seeing you {day} at {time}.
            </h2>
          ) : (
            <h2 className="reservation-message">
              We look forward to seeing you on {day} at {time}.
            </h2>
          )}
        </>
      );
    } else {
      return (
        <div>
          <form id="reservation-form" onSubmit={updateFinalizeReservation}>
            <label className="reservation-input-label">
              Time:{" "}
              <select
                className="reservation-input"
                value={time}
                onChange={updateTime}
                required
              >
                <option value="" disabled selected>
                  Please select a time
                </option>
                <option value="11:00 am">11:00 am</option>
                <option value="11:30 am">11:30 am</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="12:30 pm">12:30 pm</option>
                <option value="1:00 pm">1:00 pm</option>
                <option value="1:30 pm">1:30 pm</option>
                <option value="2:00 pm">2:00 pm</option>
                <option value="2:30 pm">2:30 pm</option>
                <option value="3:00 pm">3:00 pm</option>
                <option value="3:30 pm">3:30 pm</option>
                <option value="4:00 pm">4:00 pm</option>
                <option value="4:30 pm">4:30 pm</option>
                <option value="5:00 pm">5:00 pm</option>
                <option value="5:30 pm">5:30 pm</option>
                <option value="6:00 pm">6:00 pm</option>
                <option value="6:30 pm">6:30 pm</option>
                <option value="7:00 pm">7:00 pm</option>
                <option value="7:30 pm">7:30 pm</option>
                <option value="8:00 pm">8:00 pm</option>
                <option value="8:30 pm">8:30 pm</option>
                <option value="9:00 pm">9:00 pm</option>
              </select>
            </label>
            <label className="reservation-input-label">
              Day:{" "}
              <select
                className="reservation-input"
                value={day}
                onChange={updateDay}
                required
              >
                <option value="" disabled selected>
                  Please select a day
                </option>
                <option value="today">Today</option>
                {dayInputs}
              </select>
            </label>
            <label className="reservation-input-label">
              Number of guests:{" "}
              <select
                className="reservation-input"
                value={guests}
                onChange={updateGuests}
                required
              >
                <option value="" disabled selected>
                  Please select number of guests
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </label>
            <label className="reservation-input-label">
              First Name:{" "}
              <input
                className="reservation-input"
                type="text"
                value={firstName}
                onChange={updateFirstName}
                required
              />
            </label>
            <label className="reservation-input-label">
              Last Name:{" "}
              <input
                className="reservation-input"
                type="text"
                value={lastName}
                onChange={updateLastName}
                required
              />
            </label>
            <label className="reservation-input-label">
              Telephone Number:{" "}
              <input
                className="reservation-input"
                type="tel"
                value={phoneNumber}
                onChange={updatePhoneNumber}
                required
              />
            </label>
            <button id="submit" type="submit">
              Make Reservation
            </button>
          </form>
        </div>
      );
    }
  };

  return <>{display()}</>;
};

export default App;
