import logo from './logo.svg';
import './App.css';

// const number = 555;
// const singer = { name: 'Dr. Mahfuz', job: 'Singer' }
// const singer2 = { name: 'Eva Rahaman', job: 'Singer' }

// const singerStyle = {
//   color: 'purple',
//   backgroundColor: 'bisque',
//   borderRadius: '20px',
//   padding: '20px',
// }
// const singerStyle2 = {
//   color: 'black',
//   backgroundColor: 'aqua',
//   borderRadius: '20px',
//   padding: '20px',
// }

const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahaman', job: 'Singer' },
  { name: 'Agun', job: 'Shopno' },
  { name: 'Shuvro', job: 'Pathor' },
]

function App() {
  const nayoks = ['Rubel', 'Bappa Raz', 'Kuber', 'Jashim', 'Salman Shah', 'Riaz', 'Razzak', 'Anwar']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {
        singers.map(singer => <Singer name={singer.name} job={singer.job}></Singer>)
      }

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello, React, How are you?</h3>
        </div>

        <div className="music">
          <p style={singerStyle2}>Name: {222 + number}</p>
          <p style={singerStyle}>Name: {singer.name} ({singer.job})</p>
          <p style={{
            color: 'red',
            backgroundColor: 'yellow',
            borderRadius: '20px',
            padding: '20px',
          }}>Name: {singer2.name} ({singer2.job})</p>
        </div>
      </header> */}
      {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person> */}
      <h5>New Component, Yay...</h5>
      <p id='totoCompany'>Rock Mama, React Mama</p>
      {/* <Friend phone="01777"></Friend>
      <Friend phone="01999"></Friend> */}
      {/* <Singer></Singer> */}
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h3>Name: {props.name}</h3>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className='friend'>
      <h3>Name: Ajay Devgan</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
function Singer(props) {
  // console.log(props);
  return (
    <div className='friend'>
      <h3>Name: {props.name}</h3>
      <p>Job: {props.job}</p>
    </div>
  )
}

export default App;
