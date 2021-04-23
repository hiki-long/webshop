import React from "react";
import LoginShow from './LoginShow';
import RegisterShow from './RegisterShow';
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
                ? <LoginShow switchForm={this.switchForm} />
                : <RegisterShow switchForm={this.switchForm} />}
            </div>
        );
    }
}
export default LoginForm;