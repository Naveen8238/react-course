import React from 'react'

const Frag4 = () => {
    let arr=[<div>
        <h1>Hello-1</h1>
    </div>,<h1>Hello-2</h1>,<h3>Hello-3</h3>]
  return arr.map((item)=>{
    return item;
  })
}

export default Frag4;
