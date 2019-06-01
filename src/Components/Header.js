import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h1 className="display-3">Project quản lý thành viên bằng Reacjs</h1>
                        <p className="lead">với dữ liệu json</p>
                        <hr className="my-2" />
                        <p>More info</p>
                        <p className="lead">
                        <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                        </p>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Header;
