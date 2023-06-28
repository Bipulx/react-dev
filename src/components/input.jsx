// import React,{useRef,useEffect} from 'react'

// const Input = () => {
//     const Input = useRef(null)
//     useEffect(()=>{
//         if(Input.current){
//             Input.current.focus()
//         }
//     },[])

//   return (
//     <div>
//       <input type="text" ref={Input} />
//     </div>
//   )
// }

// export default Input

// OR
import React, { useRef, useState } from "react"
const Input = () => {
  const [show, setshow] = useState(true)
  const inputRef = useRef(null)
   
  const clickRef = useRef('')

  function focusClick() {
    inputRef.current.focus()
  }

  function toggle() {
    setshow(!show)
  }

 const clickUpper=()=>{
    clickRef.target.value.toUpperCase() 


 }
  
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusClick}>Focus Input</button>

      <button onClick={toggle}>{show ? 'Hide' : 'show'}</button>
      {show && <p>hide the element</p>}

     <button onClick={clickUpper}>Upeercase</button>
      <p ref={clickRef}>hello bipul </p>
    </>
  )
}
export default Input