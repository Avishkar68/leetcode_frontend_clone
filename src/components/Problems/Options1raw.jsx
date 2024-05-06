import React from 'react'

function Options1raw(props) {
  return (
    <div className='options1'>
      <p>{props.data1}<span>{props.count1}</span></p>
      <p>{props.data2}<span>{props.count2}</span></p>
      <p>{props.data3}<span>{props.count3}</span></p>
      <p>{props.data4}<span>{props.count4}</span></p>
      <p>{props.data5}<span>{props.count5}</span></p>
      <p>{props.data6}<span>{props.count6}</span></p>
      <p>{props.data7}<span>{props.count7}</span></p>
      <button onClick={()=>{props.expand ? props.setexpand(false) : props.setexpand(true)}}>{props.expand ? "Collapse" : (<>expand 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="h-3.5 w-3.5"><path fill-rule="evenodd" d="M12.293 16.293L16.586 12l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414zM9.586 12L5.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 12z" clip-rule="evenodd"/></svg></>) }</button>
    </div>
  )
}

export default Options1raw
