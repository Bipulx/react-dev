import React,{useState,Fragment} from 'react'

const State = () => {
    const [isPlayerA, setIsPlayerA] = useState(true)
  return (
    
      <Fragment>

        <h2>Premier league Points </h2>
       {isPlayerA &&
        <Counter team="liverpool fc" />
      }
      {!isPlayerA ||
        <Counter team="manchster utd" />
      }
      {!isPlayerA ||
        <Counter team="chelsea fc" />
      }
      {!isPlayerA ||
        <Counter team="Arsenal" />
      }
      <button style={{margin:'4rem'}} onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
       {!isPlayerA ? 'Add a point to EPL✅' : 'close the section❌' }
      </button>
    </Fragment>
  )
}

function Counter({team}){
    const [Score,setScore] = useState(0)

    return(
        <Fragment>

            <h1>{team}'s Score : {Score}</h1>
            <button onClick={()=> setScore(Score + 3 )}> Add one</button>
        </Fragment>
    )
}

export default State
