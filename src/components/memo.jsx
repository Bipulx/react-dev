import React from 'react'

const Memo = (props) => {

    console.log('rendering memo componnets')
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  )
}

export default React.memo(Memo)
