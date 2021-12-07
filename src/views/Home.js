import React, { Component } from 'react';
import setTitle from '../components/functions/setTitle';

export class Home extends Component {
    componentDidMount() {
  
      //this helps us to add custom title to website tab
      setTitle("Home");
    }
  
    render() {
    return <div>
        <h1>Home</h1>
    </div>
    }
}