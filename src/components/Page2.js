import React, { useState } from 'react';
import '.page2.css';

function ClientPage() {
    const [bikeId, setBikeId] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reservationId, setReservationId] = useState("");
    const [issueDescription, setIssueDescription] = useState("");
  
    function handleReserveBike() {
      // Send a reservation request to the server
      // ...
  
      // Display a confirmation message to the user
      alert("Bike reserved successfully! Your reservation ID is 123456.");
    }
  
    function handleCheckout() {
      // Send a checkout request to the server
      // ...
  
      // Display a confirmation message to the user
      alert("Bike checked out successfully!");
    }
  
    function handleReturnBike() {
      // Send a return request to the server
      // ...
    }
  
    function handleReportIssue() {
      // Send a report issue request to the server
      // ...
    
return (
    <div>
        <h1>Client Page</h1>

<h2>Reserve a Bike</h2>
<form>
  <label for="bike-id">Bike ID:</label>
  <input type="text" id="bike-id"></input>
  <br/><br/>
  <label for="start-date">Start Date:</label>
  <input type="date" id="start-date"></input>
  <br/><br/>
  <label for="end-date">End Date:</label>
  <input type="date" id="end-date"></input>
  <br/><br/>
  <button type="button" onclick="reserveBike()">Reserve Bike</button>
</form>

<h2>Checkout</h2>
<form>
  <label for="reservation-id">Reservation ID:</label>
  <input type="text" id="reservation-id"></input>
  <br/><br/>
  <button type="button" onclick="checkout()">Checkout</button>
</form>

<h2>Return a Bike</h2>
<form>
  <label for="bike-id">Bike ID:</label>
  <input type="text" id="bike-id"></input>
  <br/><br/>
  <button type="button" onclick="returnBike()">Return Bike</button>
</form>

<h2>Report Lost or Damaged Bike</h2>
<form>
  <label for="bike-id">Bike ID:</label>
  <input type="text" id="bike-id"></input>
  <br/><br/>
  <label for="description">Description:</label>
  <input type="text" id="description"></input>
  <br/><br/>
  <button type="button" onclick="reportIssue()">Report Issue</button>
</form>

</div>
  );
 }
}