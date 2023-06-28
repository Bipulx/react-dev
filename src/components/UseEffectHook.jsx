import React,{useState,useEffect, useRef} from 'react'

const UseEffectHook = () => {
    const [inputValue, setinputValue] = useState('')
    const [second,setsecond] = useState(0)
    const count = useRef(0)

function inputChange(e){
setinputValue(e.target.value)
}

    useEffect(()=>{
        count.current = count.current+1
        document.title = "Learn React"
       
    },[])


      const startTimer = ()=>{
       setInterval(() => {
        setsecond(second => second + 1)
       }, 1000);
      }

      const stopTimer = ()=>{
        clearInterval(setsecond(0))
        document.querySelector('#counter').remove()
      }

  return (
    <div>
      <input type="text" onChange={inputChange} /> <br />
      <h1>Render count : {count.current}</h1>
    
     <button className="start-button" onClick={startTimer}>start</button>
            <button className="stop-button" onClick={stopTimer}>stop</button>
            <p id="counter">{second}</p>
    </div>
  )
}

export default UseEffectHook
