import React, { Fragment } from 'react';
import Loader from '../loader/Loader';
import Details from '../table/detail';
import Table from '../table/table';

const TableBody = ({contactData,sortedData,isLoading,flagSort,ascending,detailItem,detailComponent}) => {
    return (
        isLoading?
       <Loader/>:
        <Fragment>
           
     <Table 
     contactData={contactData} 
     sortedData={sortedData} 
     ascending={ascending} 
     flagSort={flagSort}/>
     <Details  detailItem={detailItem}
      detailComponent={detailComponent} />  
        </Fragment>
    );
};

export default TableBody;