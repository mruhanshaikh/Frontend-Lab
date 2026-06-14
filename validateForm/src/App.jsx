import React, { useState } from 'react'
import Form from './components/Form';
import Showsec from './components/Showsec';

const dummyData={
    name:"john",
    email:"john@gmail.com",
    password:"********",
    age:"20",
    date:"1-01-2001",
    hobby:"dancing",
    gender:"male",
    terms:"yes",
    desc:"This is Sample Data ,Fill Form and Submit for Real data"
}
const App = () => {
const [data, setdata] = useState(dummyData)
  function handleclick(e){
    e.preventDefault();
    console.log(e)
  }
  return (
    <div className='fullWFormLayout'>
      <div className='formPlaceholder'>
        <div className="leftCol">
          <h1>Your Form</h1>
          <Form getData={setdata}/>
        </div>
        <div className="rightCol">
          <Showsec showData={data}/>  
        </div>
      </div>
    </div>
  )
}

export default App
