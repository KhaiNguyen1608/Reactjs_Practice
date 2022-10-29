import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
class StudentView extends PureComponent {

  renderRow = () => {
    const { studentList } = this.props;
    return studentList.map((value, index) => {
      return <tr key={index}>
        <td>{value.studentID}</td>
        <td>{value.inputName}</td>
        <td>{value.inputPhone}</td>
        <td>{value.inputEmail}</td>
     </tr>
    })
  }  

  render() {
    
    console.log(this.props.studentList)

    return (
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
           {this.renderRow()}
          </tbody>
        </table>
      </div>
      
    )
  }

  componentDidUpdate(prevProps,prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState',prevState);
  }
}




const mapStateToProps_StudenView = (state) => ({
    studentList: state.StudenReducer.studentList,
    
})


export default connect(mapStateToProps_StudenView)(StudentView)