import React, { Component } from 'react'
import { useDispatch } from 'react-redux';
import { addNewStudent } from '../../Redux/Reducer/StudenReducer';
import { connect } from 'react-redux';
class CreateStudent extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
        studentID: '',
        inputName: '',
        inputPhone: '', 
        inputEmail: '',
    };

    this.onFormSubmit = this.onFormSubmit.bind(this); 
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  onFormSubmit = (e) => {
    e.preventDefault();
    const action = addNewStudent(this.state);
    console.log(action);
    //Gửi dữ liệu lên redux
    this.props.dispatch(action);
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={ this.onFormSubmit }>
            <div className='bg-dark text-white p-1 mb-3'><h2>Thông tin sinh viên</h2></div>

            <div className="mb-3 row">
                
               <div className="col-6">
                    <div>
                        <label htmlFor="inputName" className="col-4 col-form-label">Mã SV</label>
                        <input type="text" className="form-control" name="studentID" value={ this.state.studentID} placeholder="Nhập mã sinh viên"
                          onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="inputName" className="col-4 col-form-label">Họ Tên</label>
                        <input type="text" className="form-control"  name="inputName" placeholder="Nhập họ tên" 
                          onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <label htmlFor="inputName" className="col-4 col-form-label">Số điện thoại</label>
                        <input type="text" className="form-control"  name="inputPhone" placeholder="Nhập SĐT" 
                          onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="inputName" className="col-4 col-form-label">Email</label>
                        <input type="text" className="form-control" name="inputEmail" placeholder="Nhập Email" 
                          onChange={this.handleChange}
                        />
                    </div>
                </div>

            </div>
            
            <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">Action</button>
                </div>
            </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
    
});


// => { return {} }   <=> => ({})



export default connect(mapStateToProps)(CreateStudent)