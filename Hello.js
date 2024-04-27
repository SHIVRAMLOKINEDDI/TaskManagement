import React from 'react'

function Hello(props) {
  
  return (
    <div>
        <h1>Hello Klu {props.name} with id {props.id}</h1>
        {props.children}
    </div>
  )
}

export default Hello