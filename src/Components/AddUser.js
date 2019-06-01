import React, { Component } from 'react';

class AddUser extends Component {
constructor(props) {
  super(props);
  this.state={
    trangthaiHienThi:true
  }
}
thaydoiTrangThai =()=>{
  this.setState({
    trangthaiHienThi:!this.state.trangthaiHienThi
  });
}
HienthiNut=()=>{
  if(this.state.trangthaiHienThi === true){
    return <div onClick={()=>this.thaydoiTrangThai()} className="btn btn-block btn-danger">Đóng lại</div>
  }
  else{
    return <div onClick={()=>this.thaydoiTrangThai()} className="btn btn-block btn-info">Thêm mới</div> 
  }
}
hienThiForm=()=>{
  if(this.state.trangthaiHienThi === true){
    return <div className="card text-left">
    <div className="card border-primary mb-3" >
      <div className="card-header">Thêm mới User vào hệ thống</div>
      <div className="card-body text-primary">
        <div className="form-group">
          <input type="text" className="form-control" name="true"  aria-describedby="helpId" placeholder="User" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="true"  aria-describedby="helpId" placeholder="SĐT" />
        </div>
        <div className="form-group">
          <select className="custom-select" >
            <option value >Chọn quyền mặc định</option>
            <option value={1} >Admin</option>
            <option value={2} >Modrator</option>
            <option value={3} >Normal</option>
          </select>
        </div>
        <div className="form-group">
          <div className="btn btn-group btn-primary"> Thêm mới</div>
        </div> 
      </div>
    </div>
  </div>
  }
}
     render() {
      return (
 <div className="col-3">
{this.HienthiNut()}
{this.hienThiForm()}

    </div>
           
        );
    }
}

export default AddUser;