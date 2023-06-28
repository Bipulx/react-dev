import React,{useEffect, useState} from 'react'
import axios from 'axios'

const URL = "https://jsonplaceholder.typicode.com/photos"

const Axios = () => {
const [post,Setpost] = useState(null)

useEffect(()=>{
    axios.get(URL).then((response)=>{
        Setpost(response.data)
    })
},[])

if(!post) return null
  return (
    <div>
      <p>{post[0].id}</p>
      <h1>{post[0].title}</h1>
      <img style={{height:'300px'}} src={post[0].url} alt="" />


      <p>{post[1].id}</p>
      <h1>{post[1].title}</h1>
      <img style={{height:'300px'}} src={post[1].url} alt="" />


      <p>{post[2].id}</p>
      <h1>{post[2].title}</h1>
      <img style={{height:'300px'}} src={post[2].url} alt="" />
    
    </div>
  )
}

export default Axios
