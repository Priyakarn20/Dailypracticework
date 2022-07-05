import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('Priyansh');
    const [age, setAge] = useState(24);
    const[pincode, setPincode] = useState(852125);
    const[count,setCount] = useState(0);
const[data, setData] = useState([]);

    function handleClick() {
        setCount(count + 9);
      };
      function handleclick() {
        setCount(count - 2 );
      }
      function reset() {
        setCount(1);
      }
    async function fetchData(){
        const res = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
   const result = await res.json();
   console.log(result);
   setData(result);
    }

    useEffect(() => {
        fetchData();
      console.log('page displayed again............!'); 
    }, [age, pincode] );
    // dependency array []... used for rendering page
    return(
        <div className = 'App'>
            <h1>{name}</h1>
            <button type="button" onClick={() => setName('Ashish')}>Change name1</button>
            <button type="button" onClick={() => setName('Priya')}>Change name2</button>
            <button type="button" onClick={() => setName('Soni')}>Change name3</button>
            <button type="button" onClick={() => setName('Jayesh')}>Change name4</button>

            <h2>{age}</h2>
            <button type="button" onClick={() => setAge('35')}>Change age</button>
            <button type="button" onClick={() => setAge('45')}>Change age</button>
            <button type="button" onClick={() => setAge('27')}>Change age</button>

            <h2>{pincode}</h2>
            <button type="button" onClick={() => setPincode('543657')}>Change pincode</button>
            <button type="button" onClick={() => setPincode('768456')}>Change pincode</button>

            <h3>{count}</h3>
            <button onClick={handleClick}>Increase</button>
      <button onClick={handleclick}>Decrease</button>
      <button onClick={reset}>Reset</button>
   
   {data.map((item)=>(
    <h1 key={item.id}>{item.id}</h1>
   ))}
   
        </div>
    );
}

export default App;
