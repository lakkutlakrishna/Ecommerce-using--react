import React, { useState } from "react";
import "../../styles/AddressBook.css";

const AddressBook = () => {
  // Sample data for saved addresses
  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", address: "123 Main St, City, Country", isDefault: true },
    { id: 2, type: "Work", address: "456 Office St, City, Country", isDefault: false },
  ]);

  const [newAddress, setNewAddress] = useState({ type: "", address: "" });
  const [editingId, setEditingId] = useState(null);

  // Add a new address
  const handleAddAddress = () => {
    if (newAddress.type && newAddress.address) {
      const updatedAddresses = [
        ...addresses,
        { id: Date.now(), type: newAddress.type, address: newAddress.address, isDefault: false },
      ];
      setAddresses(updatedAddresses);
      setNewAddress({ type: "", address: "" }); // Reset form
    }
  };

  // Set an address as default
  const setDefaultAddress = (id) => {
    const updatedAddresses = addresses.map((address) =>
      address.id === id ? { ...address, isDefault: true } : { ...address, isDefault: false }
    );
    setAddresses(updatedAddresses);
  };

  // Delete an address
  const deleteAddress = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
  };

  // Edit an address
  const startEdit = (id) => {
    const addressToEdit = addresses.find((address) => address.id === id);
    setNewAddress({ type: addressToEdit.type, address: addressToEdit.address });
    setEditingId(id);
  };

  const saveEdit = () => {
    const updatedAddresses = addresses.map((address) =>
      address.id === editingId ? { ...address, type: newAddress.type, address: newAddress.address } : address
    );
    setAddresses(updatedAddresses);
    setNewAddress({ type: "", address: "" });
    setEditingId(null); // Exit edit mode
  };

  return (
    <div className="address-book">
      <h2>Address Book</h2>

      {/* Display Saved Addresses */}
      <div className="saved-addresses">
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <div key={address.id} className="address-card">
              <div className="address-header">
                <span>{address.type}</span>
                {address.isDefault && <span className="default-badge">Default</span>}
              </div>
              <p>{address.address}</p>
              <div className="address-actions">
                <button onClick={() => setDefaultAddress(address.id)}>Set as Default</button>
                <button onClick={() => startEdit(address.id)}>Edit</button>
                <button onClick={() => deleteAddress(address.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No addresses saved yet.</p>
        )}
      </div>

      {/* Add/Edit Address Form */}
      <div className="add-address-form">
        <h3>{editingId ? "Edit Address" : "Add New Address"}</h3>
        <div className="form-group">
          <label>Type:</label>
          <select
            value={newAddress.type}
            onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
          >
            <option value="">Select Type</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={newAddress.address}
            onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
            placeholder="Enter full address"
          />
        </div>
        <button onClick={editingId ? saveEdit : handleAddAddress}>
          {editingId ? "Save Changes" : "Add Address"}
        </button>
      </div>
    </div>
  );
};

export default AddressBook;