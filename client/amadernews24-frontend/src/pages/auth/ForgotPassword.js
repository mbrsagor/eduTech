import React, { Component } from 'react'

class ForgotPassword extends Component {
    render(){
        return(
            <body className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="/"><b>Amader news</b>24</a>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                        <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                        <form action="/" method="post">
                            <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block btn-sm">Request new password</button>
                                </div>
                            </div>
                        </form>
                        <p className="mb-1">
                            <br />
                            <a className="mr-5" href="/login">Login</a> <a href="/registration" className="text-center">Register a new member</a>
                        </p>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default ForgotPassword
