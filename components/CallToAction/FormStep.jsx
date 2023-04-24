import React from "react";

function FormStep({ formData, onChange }) {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={onChange}
      />
    
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={onChange}
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={onChange}
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={onChange}
      />
      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        name="state"
        value={formData.state}
        onChange={onChange}
      />
      <label htmlFor="zip">Zip:</label>
      <input
        type="text"
        id="zip"
        name="zip"
        value={formData.zip}
        onChange={onChange}
      />
    </div>
  );
}

export default FormStep;
