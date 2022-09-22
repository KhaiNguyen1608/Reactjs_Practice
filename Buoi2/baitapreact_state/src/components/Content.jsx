import React, { Component } from 'react'
import GlassModel from './page_body/GlassModel'
import GlassPick from './page_body/GlassPick'
export default class Content extends Component {
  render() {
    return (
      <div>
        <div className='glass_Model'>
          <GlassModel/>
        </div>
        
        <div className='glass_Pick d-flex flex-row flex-wrap justify-content-center'>
          <GlassPick/>
        </div>
      </div>
    )
  }
}
