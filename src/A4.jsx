import React from 'react'
import { name1, name2, name3 } from './A1'
import { useContext } from 'react'

function A4() {


    var name11=useContext(name1)
    var name22=useContext(name2)
    var name33=useContext(name3)

 
  return (
      <div>
          
          {/* <h1>{ props.name }</h1>
          <h1>{ props.age}</h1>
          <h1> {props.id }</h1> */}



          <h1>{ name11} { name22} { name33}</h1>

    </div>
  )
}

export default A4























