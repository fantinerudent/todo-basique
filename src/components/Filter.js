import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: #003399;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  @media screen and (min-width: 200px) and (max-width: 640px)  {
    position: fixed;
    text-align: center;
  }
  @media screen and (min-width: 640px) {
    position: fixed;
    text-align: center;
  }
`;

const SelectStyled= styled.select`
  background: linear-gradient(#e66465, #9198e5);
  border-radius:20px;
  text-align: center;
`;

const Filter = ({todoListFiltered}) => {

  const handleChange = event => {
   let value = event.target.value;
    todoListFiltered(value);
  };

  return (  
    <StyledDiv>
      <p> Filter :</p>
      <SelectStyled onChange={handleChange} name="todoSelect" id="filtreTodo">
        <option value=""> - all los todos -</option>
        <option value="notChecked"> - todos not checked -</option>
        <option value="checked"> - todos checked - </option>
      </SelectStyled>
    </StyledDiv>
    
  )
};

export default Filter;