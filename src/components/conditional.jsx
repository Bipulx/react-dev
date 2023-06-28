import React,{useState} from 'react'

const conditional = () => {
    const greet = {
        isLogged : false
    }
  return  greet.isLogged ? <h3>hello david</h3> : <h3>hello guest</h3>
 
}
export default conditional
