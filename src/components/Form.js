import React from 'react';

    
const Form = ({handleSubmit, handleChange}) => {
  // let newTodo;

  // const handleChange = (event) => {
  //   let newTodo = event.currentTarget.value;
  //   console.log(newTodo)
  // }
  
   return(
     <form onSubmit={handleSubmit}>
     <label> nouvelle todo :   
     <input type='text' placeholder='nouvelle task' onChange={handleChange}/>
     </label>
      <button> Ajouter </button>
   </form>
   )
 };

export default Form