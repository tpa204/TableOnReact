
import {useState,useEffect} from 'react';
import axios from 'axios';


const useServerData = ({url,isButtonClick}) => {
  const url2="http://www.filltext.com/?rows=6&id={index}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
  const[contactData,setContactData]=useState([]);
  const [isLoading,setIsloading]=useState(false);
  const getData = () => {

  }
  useEffect(()=>{
    
    if(!isButtonClick) {
       return
    }
    setIsloading(true)
    axios.get(url)
    .then(response =>{
 
   setContactData(response.data)
   setIsloading(false)
   
  } );
  },[url])
    return [{contactData,isLoading,setContactData,setIsloading},getData]
};

export default useServerData; 