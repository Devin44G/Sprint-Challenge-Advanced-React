import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';


function Input() {
  const [inputValue, setInputValue] = useLocalStorage()
  const submitHandler = e => {
    e.preventDefault();
  }
  const changeHandler = e => {
    setInputValue(e.target.value);
  }

  return(
    <form>
      <input
        type="text"
        placeholder='Search for a player'
        value={inputValue}
        onChange={changeHandler}
      />
      <input onClick={submitHandler} type="submit"/>
    </form>
  );
}

export default Input;
