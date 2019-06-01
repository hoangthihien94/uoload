import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
  
    <div className="col-9">
      <table className="table table-striped table-hover ">
        <thead className="thead-inverse">
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Điện thoại</th>
            <th>Quyền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >1</td>
            <td>Hoàng Thị Hiên</td>
            <td>03892845</td>
            <td>Admin</td>
            <td>
              <div className="btn btn-group">
                <div className="btn btn-warning sua">
                  <i className="fa fa-edit " />
                  Sửa
                </div>
                <div className="btn btn-danger xoa">
                  <i className="fa fa-delete " />
                  Xóa
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td >1</td>
            <td>Đinh Công Thường</td>
            <td>03892845</td>
            <td>Admin</td>
            <td>
              <div className="btn btn-group">
                <div className="btn btn-warning sua">
                  <i className="fa fa-edit " />
                  Sửa
                </div>
                <div className="btn btn-danger xoa">
                  <i className="fa fa-delete " />
                  Xóa
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td >2</td>
            <td>Trần Văn Huỳnh</td>
            <td>03892845</td>
            <td>Admin</td>
            <td>
              <div className="btn btn-group">
                <div className="btn btn-warning sua">
                  <i className="fa fa-edit " />
                  Sửa
                </div>
                <div className="btn btn-danger xoa">
                  <i className="fa fa-delete " />
                  Xóa
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td >3</td>
            <td>Hoàng Văn Giảng</td>
            <td>03892845</td>
            <td>Admin</td>
            <td>
              <div className="btn btn-group">
                <div className="btn btn-warning sua">
                  <i className="fa fa-edit " />
                  Sửa
                </div>
                <div className="btn btn-danger xoa">
                  <i className="fa fa-delete " />
                  Xóa
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td >4</td>
            <td>Nguyễn Văn Lưu</td>
            <td>03892845</td>
            <td>Admin</td>
            <td>
              <div className="btn btn-group">
                <div className="btn btn-warning sua">
                  <i className="fa fa-edit " />
                  Sửa
                </div>
                <div className="btn btn-danger xoa">
                  <i className="fa fa-delete " />
                  Xóa
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
 


           
        );
    }
}

export default TableData;