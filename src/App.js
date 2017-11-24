import React, { Component } from 'react';

import Login from './views/Login';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
       username:'',
      password:'',
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Login parentContext={this} appContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}



export default App;