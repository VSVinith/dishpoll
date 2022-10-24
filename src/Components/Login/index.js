import { Component } from 'react'
import './index.css'

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <br></br>
                <label htmlFor="username">Password</label>
                <input id="username" type="password"></input>
            </div>
        )
    }
}

export default Login