
import { useState } from 'react';

const useServerData = (url) => {
  const[contactData,setContactData]=useState([]);
  const [isLoading,setIsloading]=useState(false);
  const getData = () => {

  }
   
    return [{contactData,isLoading,setContactData,setIsloading},getData]
};

export default useServerData;