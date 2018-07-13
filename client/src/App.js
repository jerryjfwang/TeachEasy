import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: ""
        }
    };
    componentDidMount() {
        fetch('/ping')
            .then(result => result.text())
            .then(text => this.setState({test: text}))
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    {this.state.test}
                </p>

                <form method="post" enctype="multipart/form-data" action="/">
                    <input type="file" name="avatar" />
                    <input type="submit" value="Upload!" />
                </form>
            </div>
        );
    }
}

export default App;
