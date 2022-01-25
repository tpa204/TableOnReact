
import './App.css';
import React, {useEffect} from 'react';
import { useState } from 'react';
import Table from './table/table';
import axios from 'axios';
import Loader from './loader/Loader';
import Details from './table/detail';
function App() {
  const baseUrl="http://www.filltext.com/?rows=6&id={index}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
  const[contactData,setContactData]=useState([]);
  const [isLoading,setIsloading]=useState(true);
  const [ascending,setAscending]=useState(true);
  const [flagSort,setFlagSort]=useState('');
  const [detailItem,setDetailItem]=useState([]);
  
 const sortedData = (field)=>{
setDetailItem(field)
setFlagSort(field);
console.log(`value field: ${field}` );
let result;
const copyData = contactData.concat();
if (typeof(field)==='string') {
  result = copyData.sort(function(a,b){
    const a1=a.firstName.toLowerCase()
    const b1=b.firstName.toLowerCase()
  if (a1<b1) {return -1}
  if (a1>b1) {return 1}
return 0  

})
}

result=copyData.sort(function(a,b){
  
     return (a[field])-(b[field])
     
  }
)


setAscending(!ascending)
ascending?setContactData(result):setContactData(result.reverse());
console.log(`ascendingFromApp: ${ascending}`)




 }
  useEffect(()=>{
    axios(baseUrl)
    .then(response =>{
   setContactData(response.data)
   setIsloading(false)
  } );
  },[])
  const detailComponent = (item)=>{
    // console.log(item);
    setDetailItem(item)
    }
  return (
    <div className="container">
      {isLoading?
          <div style={{display:"flex", justifyContent:'center', marginTop:"50px"}}><Loader/></div>
     :<Table 
     contactData={contactData} 
     sortedData={sortedData} 
     ascending={ascending} 
     flagSort={flagSort}
     detailComponent={detailComponent}
     />}
     <Details detailItem={detailItem} />     
    </div>
  );
}

export default App;
