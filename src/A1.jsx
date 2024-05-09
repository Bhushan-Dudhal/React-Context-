import React, { createContext } from 'react'
import A2 from './A2'


// const data = [
//     {
//         name: 'Xyz',
//         age: '20',
//         id: 1
//     },

// ]


var name1=createContext()
var name2=createContext()
var name3=createContext()



function A1() {
  return (
      <div>
          
   
          <name1.Provider value='Welcome' >
          <name2.Provider value='To' >
          <name3.Provider value='Frien' >

               <A2 />
              </name3.Provider >
              
              </name2.Provider>
              
              </name1.Provider >

          

          {/* <A2    name={data[0].name} age={data[0].age}  id={data[0].id} /> */}

    </div>
  )
}

export default A1
export {name1,name2,name3}