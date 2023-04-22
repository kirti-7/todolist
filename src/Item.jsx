import React, { useState } from 'react'


const Item = (props) => {

   

  return (
    <>
    <div className='todo_style'>
        <button className='cancel' onClick={()=>{props.onSelect(props.id)}}>x</button>
        <li>{props.items}</li>
    </div>
    </>
  )
}

export default Item