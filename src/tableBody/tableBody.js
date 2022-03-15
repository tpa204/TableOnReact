import React, { Fragment } from 'react';
import Loader from '../loader/Loader';
import Details from '../table/detail';
import Table from '../table/table';

const TableBody = ({sortedData,isLoading,flagSort,ascending,detailItem,detailComponent,isShowDetail,pages,currentBlockRows}) => {
    return (
        isLoading?
       <Loader/>:
        <Fragment>
        
     <Table 
     currentBlockRows={currentBlockRows}
     
     sortedData={sortedData}  
     ascending={ascending} 
     flagSort={flagSort}
     detailComponent={detailComponent}
     />
     <Fragment>
{isShowDetail?<Details  detailItem={detailItem}/>:null}
         </Fragment>
         

     
         
        </Fragment>
    );
};

export default TableBody;