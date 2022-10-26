import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
class StudentView extends PureComponent {
  state = {
    tmpList: ''
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
            {this.props.studentList.map((value, index) => {
                <tr key={index}>
                 <td>{value.studentID}</td>
                 <td>R1C3</td>
                 <td>R1C3</td>
                 <td>R1C3</td>
               </tr>

            })}
           
           
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




const mapStateToProps = (state) => ({
    studentList: state.StudenReducer.studentList
})


export default connect(mapStateToProps)(StudentView)