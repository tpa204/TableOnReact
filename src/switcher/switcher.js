import React, { Fragment } from 'react';
import   "./switcher.css"

const Switcher = ({buttonHandler}) => {
    const url="http://www.filltext.com/?rows=90&id={index}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    const URL="http://www.filltext.com/?rows=500&id={index}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    return (
      <Fragment >
        <div className='containerrr'>
        <button  onClick={() => {buttonHandler(URL)}}  className='btn btn-danger btns'>500rows</button>
        <button onClick={() => {buttonHandler(url)}}  className='btn btn-warning btns'>90rows</button>
        </div>
        
      </Fragment>
    );
};

export default Switcher;