import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const heros = [ "Ford", "BMW", "Fiat" , "Tesla" ]

  const product = [ 
    {name:'Photoshop', price:'$20.22'},
    {name:'InDesign', price:'$254.22'},
    {name:'Ilustrator', price:'$820.22'},
    {name:'PDF', price:'$820.22'}
   ]
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter></Counter>
        <Users></Users>
        <UserId></UserId>

  {/* <ul>
    {
    
    heros.map(heros => <li>{heros}</li>) 
    
  }
  </ul>

  <ul>
    {
    
    products.map(products => <li>{products.name}</li>) 
    
  }
  </ul> */}

  {
    product.map(product =><Product product={product}></Product>)
  }
        
        
  
        
        
        
        
        
      </header>
    </div>
  );
}

function Counter() {

  const [count, setCount] = useState(5);
  const handleIncrease = () =>  setCount (count+1);
  const handleDecrease = () =>  setCount (count-1);

  return (
    <div>

      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Add Cart</button>
      <button onClick={ handleDecrease}>Remove Cart</button>

    </div>
  )
  
}

function UserId() {

  const [userId, serUserId] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>serUserId(data))
  },[])
  
return(
  <div>
    <h2>UserID:{userId.length}</h2>
    <ul style={{listStyle:'none'}} >
      {
        userId.map(id => <li>{id.title}</li>)
      }
    </ul>
    
  </div>
)

}

function Users() {

const [users, setUser] = useState([]);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=> setUser(data))
},[])
  return(
    <div>
      <h3>Users:{users.length}</h3>
      <ul style={{listStyle:'none'}}>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
  
}

function Product(props) {

  const personStyle={

    backgroundColor: 'gray',
    border: '2px solid white',
    borderRadius:'10px',
    margin: '10px',
    padding: '30px',
    width: '500px',

  }
   const {name, price} = props.product;
  return(
    <div style={personStyle}>
    <h1>{name}</h1>
    <h4>{price}</h4>
    <button style={{backgroundColor: 'yellow'}}>Buy Now</button>
    
    
    </div>
  )
  
}


export default App;
