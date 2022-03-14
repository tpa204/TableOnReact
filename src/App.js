// @ts-nocheck

import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import useServerData from "./hooks/useServerData.js";
import Switcher from './switcher/switcher';
import TableBody from './tableBody/tableBody';
import Paginator from './paginator/paginator';

function App() {
  const [ascending,setAscending]=useState(true);
  const[isButtonClick, setIsButtonClick]=useState(false); 
  const[isShowDetail, setIsShowDetail]=useState(false); 
  const [flagSort,setFlagSort]=useState('');
  const [currentPageNumber,setCurrentPageNumber]=useState(null);
  const limitCountPage = 50;
  const [totalPages,setTotalPages]=useState(10);
  const [url,setUrl]=useState("");
  const [detailItem,setDetailItem]=useState([]);
  
  const [{contactData,isLoading,setContactData,isLoaded}]=useServerData({url,isButtonClick})
  
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

  useEffect(()=>{
    if (!isLoaded){return}
   
    setTotalPages(Math.ceil(contactData.length/limitCountPage))
    console.log(totalPages)
    
  },[isLoaded, contactData.length, totalPages])
  const currentPage = (pg)=>{
    setCurrentPageNumber(pg)
    
      } 
  const lastBlockRow = currentPageNumber*limitCountPage-1
  const firstBlockRow = lastBlockRow-limitCountPage
  const currentBlockRows = contactData.slice(firstBlockRow,lastBlockRow)
  const onNextClick =()=> {
    if(currentPageNumber<totalPages){
    setCurrentPageNumber(currentPageNumber+1)}
    else return
  }
  const onPrevClick = ()=>{
    if(currentPageNumber>1){
      setCurrentPageNumber(currentPageNumber-1)
    }
    return
  }
  let pages=[]
  for(let i=1; i<=totalPages;i++) {
    pages.push(i)}
  
 
  const detailComponent = (item)=>{
    
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
      contactData={currentBlockRows}
      
      sortedData={sortedData}
      isLoading={isLoading}
      flagSort={flagSort}
      ascending={ascending}
      isShowDetail={isShowDetail}
      detailItem={detailItem}
      detailComponent={detailComponent}
      
          
      />
       <Paginator pages={pages} 
       currentPage={currentPage}
       onPrevClick={onPrevClick}
       onNextClick={onNextClick}
       />
      </Fragment>
      }
     
      
    </div>
  );
}

export default App;
