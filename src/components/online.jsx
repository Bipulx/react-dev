import React,{useState,useEffect} from 'react'

const Online = () => {
    const [isonline,setisonline] = useState(true)

    useEffect(()=>{
        function handleonline(){
            setisonline(true)
        }
        function handleoffline(){
            setisonline(false)
        }

        window.addEventListener('online',handleonline)
        window.addEventListener('offline',handleoffline)

        return()=>{
            window.removeEventListener('online',handleonline)
            window.removeEventListener('offline',handleoffline)
        }
    },[])
  return (
    <div>
      <h1>{isonline?  '✅Online' : '❌Disconnected'}</h1>
      <button disabled={!isonline}>Next Page</button>
    </div>
  )
}

export default Online
