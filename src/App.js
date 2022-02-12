// @ts-nocheck

import './App.css';
import React from 'react';
import { useState,Fragment } from 'react';

import useServerData from "./hooks/useServerData.js"
import Switcher from './switcher/switcher';
import TableBody from './tableBody/tableBody';

function App() {
  
  
  const [ascending,setAscending]=useState(true);
  const[isButtonClick, setIsButtonClick]=useState(false); 
  const[isShowDetail, setIsShowDetail]=useState(false); 
  const [flagSort,setFlagSort]=useState('');
  const [url,setUrl]=useState("http://www.filltext.com/?rows=6&id={index}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}");
  const [detailItem,setDetailItem]=useState([]);
  // const [{contactData,isLoading,setContactData,setIsloading},getData]=useServerData({url,isButtonClick})
  const [{contactData,isLoading,setContactData,}]=useServerData({url,isButtonClick})
  
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
 }
  const buttonHandler = (url)=>{
    setUrl(url)
    setIsButtonClick(true)
    setIsShowDetail(false)
    console.log(url);
    console.log(contactData);
    console.log(`isButtonClick: ${isButtonClick}`);
  }
  const detailComponent = (item)=>{
    // console.log(item);
    setDetailItem(item)
    setIsShowDetail(true)
    }
  return (
    <div className="container">
  {
      !isButtonClick?
      <Switcher  buttonHandler={buttonHandler}/>:
      <Fragment>
       <Switcher  buttonHandler={buttonHandler}/>
        <TableBody 
      contactData={contactData}
      sortedData={sortedData}
      isLoading={isLoading}
      flagSort={flagSort}
      ascending={ascending}
      isShowDetail={isShowDetail}
      detailItem={detailItem}
      detailComponent={detailComponent}
      />
      </Fragment>
      }
         
    </div>
  );
}

export default App;
