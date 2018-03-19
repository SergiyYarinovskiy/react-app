import React from 'react';

export default ({title, classValue}) =>
  <React.Fragment>
    <h3 className='center'>align-items - {title}:</h3>
    <div className={classValue}>
      <div className='rectangle' style={{height: '20px'}}></div>
      <div className='rectangle' style={{height: '40px'}}></div>
      <div className='rectangle' style={{height: '60px'}}></div>
      <div className='rectangle' style={{height: '80px'}}></div>
    </div>
  </React.Fragment>
