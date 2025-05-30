import React, { useState, useEffect, use } from 'react';

function App() {
  let date = new Date()
  const [currentTime, setCurrentTime] = useState(date);
  const [todo, settodo] = useState([])
  const [taks, settaks] = useState('')
  const [isEdit, setisEdit] = useState(false)
  useEffect(() => {
    setInterval(()=>{
        setCurrentTime(new Date())
    },1000)
    return () => {
      clearInterval()
    }
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault();
    let time = currentTime.toLocaleTimeString()
    let obj = {
      time : time,
      taks : taks
    }

    settodo((prev)=> [...prev , obj])
    settaks('')

  }
  
  const handleEdit = (taks) =>{
      settaks(taks)
      setisEdit(!isEdit)
  }
  const handleDelete = (taks)=>{
    settodo((prev)=>prev.filter((list)=> list.taks !== taks))
  }
  return (
    <>
      
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      <form onSubmit={handleSubmit} >
        <input type="text" value={taks} onChange={(e)=>settaks(e.target.value)}/>
        <button>Add</button>
      </form>
      <div>
        {
          todo.map((list , idx)=> <div className='list'>
            <div>{list.taks}</div>
            <p disabled={isEdit}>{list.time}</p>
        
            <button disabled={isEdit} onClick={()=>handleEdit(list.taks)}>edit</button>
            <button onClick={()=>handleDelete(list.taks)}>X</button>
          </div>)
        }
      </div>

    </>
  );
}

export default App;
