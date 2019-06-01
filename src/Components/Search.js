import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                  <div className="col-12 ">
              
                    <div className="form-group">
                        <div className="btn-group">
                        <input  type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập tên cần tìm  " />
                        <div className="btn btn-info"  >Tìm</div>
                       
                        </div>
                        <div className="form-group">
                
                        </div>
                       
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Search;