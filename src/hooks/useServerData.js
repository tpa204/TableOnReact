
import {useState,useEffect} from 'react';
import axios from 'axios';


const useServerData = ({url,isButtonClick}) => {
  
  const[contactData,setContactData]=useState([]);
  const [isLoading,setIsloading]=useState(false);
  const [isLoaded,setIsLoaded]=useState(false);
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
   setIsLoaded(true)
   
  } );
  },[url,isButtonClick])
    return [{contactData,isLoaded,isLoading,setContactData,setIsloading},getData]
};

export default useServerData; 