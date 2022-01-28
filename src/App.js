
import './App.css';
import React, {useEffect} from 'react';
import { useState } from 'react';
import Table from './table/table';

import Loader from './loader/Loader';
import Details from './table/detail';
import useServerData from "./hooks/useServerData.js"
import Switcher from './switcher/switcher';
function App() {
  
  // const[contactData,setContactData]=useState([]);
  // const [isLoading,setIsloading]=useState(false);
  const [ascending,setAscending]=useState(true);
  const[isButtonClick, setIsButtonClick]=useState(false); 
  const [flagSort,setFlagSort]=useState('');
  const [url,setUrl]=useState("http://www.filltext.com/?rows=6&id={index}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}");
  const [detailItem,setDetailItem]=useState([]);
  const [{contactData,isLoading,setContactData,setIsloading},getData]=useServerData({url,isButtonClick})
  
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
  const buttonHandler = (url)=>{
    setUrl(url)
    console.log(url);
  }
  const detailComponent = (item)=>{
    // console.log(item);
    setDetailItem(item)
    }
  return (
    <div className="container">
      <Switcher url={url} buttonHandler={buttonHandler}/>
      {isLoading?
          <div style={{display:"flex", justifyContent:'center', marginTop:"50px"}}><Loader/></div>
     :<Table 
     contactData={contactData} 
     sortedData={sortedData} 
     ascending={ascending} 
     flagSort={flagSort}
     detailComponent={detailComponent}
     />}
     <Details  detailItem={detailItem} />     
    </div>
  );
}

export default App;
