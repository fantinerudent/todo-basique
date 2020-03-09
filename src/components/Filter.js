import React from 'react';

const Filter = ({todoListFiltered}) => {

  const handleChange = event => {
   let value = event.target.value;
    todoListFiltered(value);
  };

  return (  
    <div>
      <p> Filter :</p>
      <select onChange={handleChange} name="todoSelect" id="filtreTodo">
        <option value=""> - all los todos -</option>
        <option value="notChecked"> - todos not checked -</option>
        <option value="checked"> - todos checked - </option>
      </select>
    </div>
    
  )
};

export default Filter;