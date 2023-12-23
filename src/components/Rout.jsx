import React from 'react'
import Firstmap from './Firstmap';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';
import Section from './Section';
const Rout = () => {
  return (
    <div>
      <div className='row'>
            <div className=' lg:w-8/12 w-full px-3'>
            <Section />
            <Firstmap />
            <Second/>
            </div>
            <div className='lg:w-4/12 w-full  px-3'>
              <Third/>
              <Forth/>
            </div>
          </div>
    </div>
  )
}

export default Rout
