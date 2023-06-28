import React,{useState} from 'react'

const Event = (props) => {
    const [message, Setmessage] = useState('hello')
    const [change, Setchange] = useState()

   function click(){
    Setmessage('goodbye')
   }

   function clickOnchange(e){
    Setchange(e.target.value)
   }

   function alertClick(){
    alert( `hello ${props.name}`)
   }
    
  return (
    <>
        <p>{change}</p>
        <p>{message}</p>
      <button onClick={click}>click</button>
      <input style={{margin :'2rem' ,outline:'none'}} onChange={clickOnchange}></input>

      {/* props */}
      <button onClick={alertClick}>alert</button>
    </>
  )
}

export default Event
