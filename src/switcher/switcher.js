import React, { Fragment } from 'react';

const Switcher = ({buttonHandler}) => {
    const url="http://www.filltext.com/?rows=16&id={index}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    const URL="http://www.filltext.com/?rows=200&id={index}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    return (
      <Fragment>
        <button onClick={() => {buttonHandler(URL)}}  className='btn btn-danger'>1000rows</button>
        <button onClick={() => {buttonHandler(url)}}  className='btn btn-warning'>16rows</button>
      </Fragment>
    );
};

export default Switcher;