import React, { Fragment } from "react";
import Arrow from "../svg/arrow";


const Table = ({sortedData,contactData,ascending,flagSort,detailComponent,currentBlockRows}) => {
  
   
    return (
    <table className='table'>
       <thead>
         <tr>
         <th onClick = {()=>{sortedData('id')
        flagSort='id'}}>id {flagSort==='id'?<Arrow ascending={ascending}/>:<Fragment/>}</th>
         <th onClick = {()=>{sortedData('firstName')
        flagSort='firstName'}}>firstName {flagSort==='firstName'?<Arrow ascending={ascending}/>:null}</th>
         <th onClick = {()=>{sortedData('lastName')
        flagSort='lastName'
        }}>lastName {flagSort==='lastName'?<Arrow ascending={ascending}/>:null}</th>
         <th>email</th>
         <th>phone</th>
         </tr>       
         </thead>
         <tbody className="tbody">
          {contactData.map((item)=>(
              
             <tr key = {item.phone} onClick={()=>detailComponent(item)}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
         </tbody>
     </table>
     
     )
     
}
export default Table