
import { useState } from 'react';
import './App.css';


function App() {

  const [quantity, setQuantity] = useState(0);
/*

const [value, setValue] = useState(null);

The hook returns an array with two values: 
the state value you are storing and a function that allows you to update it. 
When instantiating the hook, the initial state value is determined by whatever value you pass it.

*/

  return (
    <>
    < CartItem 
      name={"Apples"} // what appears next to the button
      quantity={quantity} // value
      remove={()=>{
        if (quantity > 0){
          setQuantity(quantity - 1);
        }
      }} // if statement to make sure quantity doesn't go below 0

      add={()=> setQuantity(quantity + 1)}  
      // using set quantity function  to add to the quantity value by 1 each time the button is clicked
       />

    < CartItem 
      name={"Cookies"}
      quantity={quantity}
      remove={()=>{
        if (quantity > 0){
          setQuantity(quantity - 1);
        }
      }}
      add={()=> setQuantity(quantity + 2)}  
  
       />
    </>
  );
}

const CartItem = ({name, quantity, remove, add}) => {
  /* pass through our methods */
  return (
  <>
  <span>{`${name}`}</span>
  {/* an inline container used to mark up a part of a text, or a part of a document */}
  <button onClick={remove}>-</button> 
  {/* button for - ^^, remove is the method name */}
  <input value={quantity} readOnly/>
  {/* The readOnly property sets or returns whether a text field is read-only, or not. */}
  <button onClick={add}>+</button>
  {/* button for + , add is the method name */}
  </>
  );
}


export default App;
