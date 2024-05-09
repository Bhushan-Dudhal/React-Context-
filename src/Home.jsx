// import React, { useRef, useState } from 'react'

// function Home() {

//     var op1='LTH 1'
//     var op2='LTH 2'
//     var op3='LTH 3'

//     const [data, setData] = useState(op1)
    
//     var selectvalue = useRef(null)
    

//     function changeop() {
//         var a = selectvalue.current.value;
//         if (a == 'op1') {
//             setData(op1);
//         }
//         else if (a == 'op2') {
//             setData(op2);

            
//         }


//         else if (a == 'op3') {
//             setData(op3);

            
//         }
//     }

//   return (
//       <>

          
//           <select onChange={()=>changeop()} ref={selectvalue}>

//             <option value="op1">option 1</option>  
//             <option value="op2">option 2</option>  
//             <option value="op3">option 3</option>  

//           </select>

//           <h1>{ data}</h1>
      
//       </>
//   )
// }

// export default Home