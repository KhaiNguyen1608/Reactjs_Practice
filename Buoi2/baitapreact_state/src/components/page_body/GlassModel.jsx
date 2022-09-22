import React, { Component } from 'react'

export default class GlassModel extends Component {
  state = {
      imgGlass: ''
  }
  render() {
    return (
      <div>
        <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <div className='content-left'>
              
            </div>
            <div className='content-right' >
                <img src={this.state.imgGlass} alt="" />
            </div>
        </div>
      </div>
    )
  }
}
