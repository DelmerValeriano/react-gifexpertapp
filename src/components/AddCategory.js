import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
 
  const [inputValue, setinputValue] = useState('');
 
  const handletInputChange =(e)=>{
    setinputValue(e.target.value);
  }

  const handleSubmit =(e)=>{
    //eliminar que se recargue el navegador
    e.preventDefault();
    // console.log("listo")
   
    if (inputValue.trim().length > 2) {
      setCategories(cats=>[inputValue,...cats]);
      setinputValue('');
    }
  }
 
  return (
    
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={inputValue}
        onChange={handletInputChange }
      />
    
    </form>
      
    


  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
  
}

