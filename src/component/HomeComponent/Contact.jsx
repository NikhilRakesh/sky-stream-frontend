import React, { useState } from 'react';

function Contact({ view, handleClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    console.log(name, email, phone, message);
  };

  const obj = [
    { name: 'NAME', handleFunction: handleName },
    { name: 'EMAIL', handleFunction: handleEmail },
    { name: 'PHONE', handleFunction: handlePhone },
    { name: 'MESSAGE', handleFunction: handleMessage },
  ];

  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-full justify-center flex items-center z-10">
      <div
        className={`w-[55rem] shadow-emerald-200xl h-[36rem] pb-3 contact-box-gradiant ${
          view ? 'z-10' : '-z-10'
        }`}
      >
        <div className="inputVlues w-[50%] h-full px-4 py-8 flex flex-col items-center justify-center">
        
        </div>
      </div>
    </div>
  );
}

export default Contact;
