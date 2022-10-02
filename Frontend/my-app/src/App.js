import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
function App() {
  const[adress,setData1] = useState(null)
  const[Link,setData2] = useState(null)
  const[name,setData3] = useState(null)
  const[uname,setData4] = useState(null)
  const[tunits,setData5] = useState(null)
  const[notes,setData6] = useState(null)
  const[create,setData7] = useState(false)
  function pupkey(val)
  {
    setData1(val.target.value)
    console.warn(val.target.value)
  }
  
  return (
    <div className="App">
      <header className="App-header">
       <h6>The adress of citificate creator</h6>
       <input type= 'pup-key' onChange={pupkey}></input>
       <h6>Link adress of cirtificate </h6>
       <input type= 'pup-key' onChange={pupkey}></input>
       <h6>cirtificate Name</h6>
       <input type= 'pup-key' onChange={pupkey}></input>
       <h6>Unit Name</h6>
       <input type= 'pup-key' onChange={pupkey}></input>
       <h6>Total units</h6>
       <input type= 'pup-key' onChange={pupkey}></input>
       <h6>Notes</h6>
       <input type= 'pup-key' onChange={pupkey}></input>
       <button>Creat asset</button>
       <h2>{adress}</h2>
       
      
       
    
      </header>
    </div>
  );
}

export default App;
