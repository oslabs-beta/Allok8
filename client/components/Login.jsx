import React, { Component } from 'react';
import Auth from './Auth';
import Sidebar from './Sidebar';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      link: '',
      token: '',
      warning: ''   
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClick = () => {
    const { link, token } = this.state;

    if(link === '' || token === ''){
      alert('Input Values!!');
    } else {
      fetch('/')
      Auth.login(() => {
        this.props.history.push('/')
      }, this.state.link);
    }
  }

  render(){
    return (
      <div>
        <p id="title">Jordanetes</p>
        <div className='fetch'>

          <input type='text' className='input' placeholder='API' id='link' name='link' onChange={ this.handleChange }/>
          <br />
          <br />
          <input type='password' className='input' placeholder='TOKEN' id='token' name='token' onChange={ this.handleChange }/>

          <p>{ this.state.warning }</p>

          <button className='clickable' onClick={ this.handleClick }>FETCH</button>
        </div>
        <Sidebar />
        <footer className="footer">An Allok8 Iteration</footer>
      </div>
    );
  }
}

export default Login;