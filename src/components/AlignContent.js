import React from 'react';

export default ({title, classValue}) =>
  <React.Fragment>
    <h3>align-content - {title}:</h3>
    <div className={classValue}>
      <div className='rectangle-horizontal' style={{width: '20px'}}></div>
      <div className='rectangle-horizontal' style={{width: '40px'}}></div>
      <div className='rectangle-horizontal' style={{width: '60px'}}></div>
      <div className='rectangle-horizontal' style={{width: '80px'}}></div>
      <div className='rectangle-horizontal' style={{width: '20px'}}></div>
      <div className='rectangle-horizontal' style={{width: '40px'}}></div>
      <div className='rectangle-horizontal' style={{width: '60px'}}></div>
      <div className='rectangle-horizontal' style={{width: '80px'}}></div>
      <div className='rectangle-horizontal' style={{width: '20px'}}></div>
      <div className='rectangle-horizontal' style={{width: '40px'}}></div>
      <div className='rectangle-horizontal' style={{width: '60px'}}></div>
      <div className='rectangle-horizontal' style={{width: '80px'}}></div>
    </div>
  </React.Fragment>
