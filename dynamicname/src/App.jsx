import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [name, setname] = useState("")
  const getName = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    setname(response.data.results[0].name.first + " " + response.data.results[0].name.last);
  }
  useEffect(() => {
    const timer = setInterval(getName, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {name}
    </div>
  )
}

export default App
