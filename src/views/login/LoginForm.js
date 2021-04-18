import React from "react";
import Login from './Login';
import Register from './Register';
class LoginForm extends React.Component{
    constructor(){
        super();
        this.state = {
            formType: "login"
        };
    }

    switchForm = (value) => {
        this.setState({
            formType: value
        })
    }

    render(){
        return(
            <div className="form-warp">
                {this.state.formType === 'login' 
                ? <Login switchForm={this.switchForm} />
                : <Register switchForm={this.switchForm} />}
            </div>
        );
    }
}
export default LoginForm;