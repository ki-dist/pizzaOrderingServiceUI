import React from 'react';

function PizzaImage() {
    return (
 
      <img
        src="/slice-of-pizza.svg"
        alt="Half Pizza"
        style={{
          width: '30px',
          height: 'auto',
          marginBottom: '20px',
          position: 'absolute',
          top: '0%',
          left: '56%',
          transform: 'rotate(-90deg)'
        }}
      />
    );
  }
  
  export default PizzaImage;
  