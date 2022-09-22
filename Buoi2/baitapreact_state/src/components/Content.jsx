import React, { Component } from 'react'
import customData from './data/dataGlasses.json'


export default class Content extends Component {
  state = {
    imgGlass: ''
  }
  renderGlass = () => {
    return customData.map((item) => {
      return (
        <div>
          <img key={item.id} id={item.id} src={'img/' + item.url} alt="..." width={50} height={50} onClick={()=>{
                    this.handleChangeGlass(item.id)
                }}/>
        </div>
              
      );
    });
  }

  handleChangeGlass = (image) => {
    this.setState({
      imgGlass:`./img/glassesImage/v${image}.png`
    })
    console.log(this.state.imgGlass)
  }

  render() {
    return (
      <div>
        <div className='glass_Model'>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
              <div className='content-left'>
                
              </div>
              <div className='content-right' >
                  <img src={this.state.imgGlass} alt="" />
              </div>
          </div>
        </div>
        
        <div className='glass_Pick d-flex flex-row flex-wrap justify-content-center'>
            {this.renderGlass()}
        </div>
      </div>
    )
  }
}
