import React, { Component } from 'react'

class Registeration extends Component {
    render(){
        return(
            <body className="hold-transition register-page">
                <div className="register-box">
                    <div className="login-logo">
                        <a href="/"><b>Amader news</b>24</a>
                    </div>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">Register a new member</p>
                            <form action="/" method="post">
                                <div className="input-group mb-3">
                                <input type="number" className="form-control" placeholder="Phone number"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-phone"></span>
                                    </div>
                                </div>
                                </div>
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
                                <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Retype password"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                    <input type="checkbox" id="agreeTerms" name="terms" value="agree"/>
                                    <label for="agreeTerms">
                                    I agree to the <a href="#0">terms</a>
                                    </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-sm">Register</button>
                                </div>
                                </div>
                            </form>
                            <a href="/login" className="text-center">I already have a membership</a>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default Registeration
