import React from 'react';
import './Form.css'

export default function Form() {
  return (
    <form className="form">
      <input type="text" className="form-input" name="Login" placeholder="login"/>
      <input type="password" className="form-input" name="password" placeholder="password"/>
      <button className="button">let me in</button>
    </form>
  );
}