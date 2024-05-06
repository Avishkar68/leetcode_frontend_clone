import React from 'react'

function Secondarycard(props) {
  return (
    <div className='secondarycard-container'>
      <div className='part-1'>
        <div className='part-1-img'><img src={props.secimg} /></div>
      </div>
      <div className='part-2'>
        <p>{props.text1}</p>
        <p>{props.text2.length >= 32 ? `${props.text2.slice(0,28)}...` : props.text2}</p>
      </div>
    </div>
  )
}

export default Secondarycard
