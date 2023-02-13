import React, { useState } from 'react';
import '.page1.css';

const AdminPage = () => {
  const [bikeInventory, setBikeInventory] = useState([
    { bikeId: '', location: '' }
  ]);
  const [newBike, setNewBike] = useState({ bikeId: '', location: '' });

  const handleChange = e => {
    setNewBike({ ...newBike, [e.target.id]: e.target.value });
  };

  const addBike = () => {
    setBikeInventory([...bikeInventory, newBike]);
    setNewBike({ bikeId: '', location: '' });
  };

  const deleteBike = index => {
    const updatedInventory = [...bikeInventory];
    updatedInventory.splice(index, 1);
    setBikeInventory(updatedInventory);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Inventory Management</h2>
      <table id="inventory">
        <thead>
          <tr>
            <th>Bike ID</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bikeInventory.map((bike, index) => (
            <tr key={index}>
              <td>{bike.bikeId}</td>
              <td>{bike.location}</td>
              <td>
                <button type="button" onClick={() => deleteBike(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h2>Add New Bike to Inventory</h2>
      <form>
        <label htmlFor="bike-id">Bike ID:</label>
        <input
          type="text"
          id="bikeId"
          value={newBike.bikeId}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={newBike.location}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="button" onClick={addBike}>
          Add Bike
        </button>
      </form>
    </div>
  );
};

  