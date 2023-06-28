import React,{useState} from 'react'

const Form = () => {
  const [input , setinput] = useState('')
  const [topic, settopic] = useState('select')
  function onchangehandle(e){
    setinput(e.target.value)
  }

  function topicChange(e){
    settopic(e.target.value)
  }

  function handlesubmit(e){
    e.preventDefault()
    alert('your form has been submitted')
  }
  return (
    <>
    <form className='form-content' onSubmit={handlesubmit}>
      <label placeholder='username' className='name' htmlFor="">your name :{input}</label> <br />
      <input placeholder='username' onChange={onchangehandle} type="text" /> <br />
       <div >
      <label htmlFor=""> skils :{topic}</label>
      <select  id="" onChange={topicChange}>
        <option value="react">react</option>
        <option value="python">python</option>
        <option value="vue">vue</option>
        <option value="vue">sql</option>
        <option value="c++">c++</option>
      </select>
    </div>

    <button>submit</button>

    </form>
   
    </>
  )
}

export default Form 
