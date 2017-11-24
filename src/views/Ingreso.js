import React, { Component } from 'react';
import {content} from 'react-mdl';
import {BrowserRouter as Router} from 'react-router-dom';

class Home extends Component {
 
  render() {
    return (
    	<Router>
    <div>
    <content>
    <lable>hi hello</lable>
    </content>
    </div>
    </Router>
    );
  }
}

export default Home;
