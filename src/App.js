import React, { Component } from 'react';
import AlignItems from './components/AlignItems'
import AlignContent from './components/AlignContent'

class App extends Component {
  render() {
    return (
      <div>
        <ul className='links'>
          <li className='home'><a>Home</a></li>
          <li className='elements'><a>Elements</a></li>
          <li className='generic'><a>Generic</a></li>
        </ul>

        <div className='wrapper'>
          <AlignItems title='flex-start' classValue='parent-start'/>
          <hr/>
          <AlignItems title='flex-end' classValue='parent-end'/>
          <hr/>
          <AlignItems title='center' classValue='parent-center'/>
          <hr/>
          <AlignItems title='baseline' classValue='parent-baseline'/>
          <hr/>
          <AlignContent title='flex-start' classValue='parent-horizontal-start'/>
          <hr/>
          <AlignContent title='flex-end' classValue='parent-horizontal-end'/>
          <hr/>
          <AlignContent title='center' classValue='parent-horizontal-center'/>
          <hr/>
          <AlignContent title='space-around' classValue='parent-horizontal-around'/>
          <hr/>
          <AlignContent title='space-between' classValue='parent-horizontal-between'/>
        </div>
      </div>
    );
  }
}

export default App;
