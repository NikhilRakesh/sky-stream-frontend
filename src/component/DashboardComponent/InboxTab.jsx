import React, { useState } from "react";

function InboxTab({ name, email, contact, message, _id, onCheckboxChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onCheckboxChange(_id, !checked); // Pass _id and checkbox state to parent
  }

  return (
    <div className="border-b-2 border border-b-gray shadow-lg flex w-full justify-between bg-white rounded-lg px-10 h-16 items-center">
      <div className="name flex gap-3 items-center font-semibold">
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={checked}
          onChange={handleChange}
        />
        <h1>{name}</h1>
      </div>
      <div className="email text-red">
        <h1>{email}</h1>
      </div>
      <div className="phone">
        <h1>{contact}</h1>
      </div>
      <div className="message min-w-[300px] max-w-[200px]">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default InboxTab;
