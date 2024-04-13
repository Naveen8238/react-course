import React from 'react'

const ChildComponent = (props) => {
    const {id,title}=props
  return (
    <div key={id}>
        <h1>{title}</h1>
    </div>
  )
}


export default ChildComponent;