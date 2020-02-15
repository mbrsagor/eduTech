import React, { Component } from 'react'

class Login extends Component {
    render(){
        return(
            <body className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="/"><b>Amader news</b>24</a>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign In</p>

                        <form action="/" method="post">
                            <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                            </div>
                            <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-lock"></span>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                    <input type="checkbox" id="remember"/>
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" class="btn btn-primary btn-block btn-sm">Sign In</button>
                                </div>
                            </div>
                        </form>
                        <p className="mb-1">
                            <br />
                            <a className="mr-5" href="/forgot-password">Forgot my password</a> <a href="/registration" className="text-center">Register a user</a>
                        </p>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default Login
