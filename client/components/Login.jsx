import React, { Component } from 'react';
import Auth from './Auth.jsx';
import Sidebar from './Sidebar.jsx';
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      link: '',
      token: '',
      warning: ''   
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  //version for prod
  handleClick() {
    const { link, token } = this.state;
    if(link === '' || token === ''){
      alert('Input Values!!');
    } else {
      fetch('/server/getInfo', {
        "method": "POST",
        "headers": {
          "Content-Type":"application/json"
        },
        "body": JSON.stringify({
          "api": link,
          "token": token
        })
      })
      .then(res => {
        Auth.login(() => {
          this.props.history.push('/')
        }, this.state.link);
      })
      
    }
  }
  render(){
    return (
      <div>
        <img src = "https://raw.githubusercontent.com/Jordanetes/Allok8/integration/client/assets/allok8.png"></img>
        <div className='fetch'>

          <input type='text' className='input' placeholder='API' id='link' name='link' onChange={ this.handleChange }/>
          <br />
          <br />
          <input type='password' className='input' placeholder='TOKEN' id='token' name='token' onChange={ this.handleChange }/>

          <p>{ this.state.warning }</p>

          <button className='clickable' onClick={ this.handleClick }>FETCH</button>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Login;