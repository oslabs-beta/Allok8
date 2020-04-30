import React, { Component } from 'react';
import { render } from 'react-dom';

import Fetch from './containers/FetchContainer/Fetch.jsx'; 
import Sidebar from './containers/SidebarContainer/Sidebar.jsx';
import '../client/style.css'


class App extends Component {
    render() {
        return(
            <div>
                <p id="title">Jordanetes</p>
                <Fetch />
                <Sidebar />
                <footer className="footer">An Allok8 Iteration</footer>
            </div>
        )
    } 
}

render(<App />, document.querySelector('#container'));

export default App 