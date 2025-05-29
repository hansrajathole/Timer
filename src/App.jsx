import React, { useState, useEffect } from 'react';

function App() {
  let date = new Date()
  const [currentTime, setCurrentTime] = useState(date);


  useEffect(() => {
    setInterval(()=>{
        setCurrentTime(new Date())
    },1000)
    return () => {
      clearInterval()
    }
  }, [])
  
  return (
    <>
      
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      
    </>
  );
}

export default App;
