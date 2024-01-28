import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can add actual API call here)
    console.log('Form submitted with email:', email);
    // Reset the email state after submission
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Subscribe to our newsletter for updates:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeForm;
