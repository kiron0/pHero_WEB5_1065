import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'Laptop', price: 153000 },
    { name: 'phone', price: 93000 },
    { name: 'watch', price: 3000 },
    { name: 'tablet', price: 5000 },
    { name: 'desktop', price: 25000 },
  ]
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="Laptop" price="90000"></Product>
      <Product name="iphone" price="75000"></Product>
      <Product name="watch" price="3500"></Product> */}
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <User id={user.id} name={user.name} email={user.email} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div className='user'>
      <h3>ID: {props.id}</h3>
      <h3>Name: {props.name}</h3>
      <p>User Name: {props.username}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
