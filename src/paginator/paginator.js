import React from 'react';

const Paginator = ({pages,currentPage,onPrevClick,onNextClick}) => {
    return (
        <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1" onClick={()=>{onPrevClick()}}>Previous</a>
          </li>
         {pages.map(p=>{
             return (
                <li className="page-item" key = {p}><a className="page-link" onClick={()=>{currentPage(p)}} href="#">{p}</a></li>
             )
         })}
          <li className="page-item">
         
      <a className="page-link" href="#" onClick={()=>{onNextClick()}}>Next</a>
    </li>
        </ul>
      </nav>
    );
};

export default Paginator;