import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    let data={
        id:1,
        title:"this is data passed from parents component"
    }
  return (
    <div>
        <h1>This is Parent Component</h1>
        <ChildComponent data={data}/>
    </div>
  )
}

export default ParentComponent;
