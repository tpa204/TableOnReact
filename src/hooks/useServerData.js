
import {useState,useEffect} from 'react';
import axios from 'axios';


const useServerData = ({url,isButtonClick}) => {
  
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
  },[url,isButtonClick])
    return [{contactData,isLoading,setContactData,setIsloading},getData]
};

export default useServerData; 