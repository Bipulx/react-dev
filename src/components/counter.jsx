import React, {useState} from 'react'

const Counter = (props) => {
    const btn = document.getElementById('btn')
    const [count ,setcount] = useState(0)
    function increment(){

        setcount(count+1)
    }
    if(count >=5){
        btn.disabled = true
    }
  return (
    <>
     <div>
        <h1>hello {props.name}</h1>
        Count - {count}
     </div>

     <button id='btn' onClick={increment}>Increment</button>
    </>
  )
}

export default Counter
