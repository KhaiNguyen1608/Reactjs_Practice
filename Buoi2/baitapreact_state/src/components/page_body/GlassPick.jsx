import React, { Component } from 'react'
import customData from '../page_body/data/dataGlasses.json'
export default class GlassPick extends Component {

  state = {
    imgGlass: ''
  }
  handleChangeGlass = (image) => {
    this.setState({
      imgGlass:`./img/glassesImage/v${image}.png`
    })
  }
  render() {
    return customData.map((item) => {
      return (
        <div>
          <img key={item.id} id={item.id} src={'img/' + item.url} alt="..." width={50} height={50} onClick={()=>{
                    console.log('123')
                }}/>
        </div>
              
      );
    });
  }
}


