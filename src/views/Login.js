import axios from 'axios';
import UploadPage from './UploadPage';
import lo from '../Logo/logo_splash.png';
import React, { Component } from 'react';
import {Layout, Content, Textfield, Button, Header} from "react-mdl";

class Login extends Component {
	constructor(props){
        super(props);
        this.state={
                    username:'',
                    password:'',
                    main:[],
                    Role:'',
                    isloggedin : false,
                    draweropen: false
                    }
                  }
handleClick(event){
      //event.preventDefault();
        var apiBaseUrl = "http://172.17.1.25:7070/FitPwappReceptor/rest/sig";
        var self = this;
        var config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer token',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    }
                  }
        var payload={
                      user:this.state.username,
                      password:this.state.password
                    }
            axios.post(apiBaseUrl, payload, config)
              .then(function (response) {
              if(response.data.responseCode === '0'){
                    const { user, password} = response.data;
                    localStorage.setItem('users',user);
                    localStorage.setItem('passwords',password);
                     var uploadScreen=[];
       uploadScreen.push(<UploadPage appContext={self.props.appContext} />)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
               }
                      else if(response.data.responseCode === 'SEC003'){
                          console.log("Username password do not match");
                            alert("username password do not match")
                            self.setState({
                              username : ' ',
                              password : ' '
                            })
                            }
                          else{
                            console.log("Username does not exists");
                            alert("Username does not exist");
                             self.setState({
                              username : ' ',
                              password : ' '
                            })
                            }
                        })
                          .catch(function (error) {
                            console.log(error);
                             const user= self.state.username;
                           const password=self.state.password;
                           const users=localStorage.getItem('users',user);
            const passwords=localStorage.getItem('passwords',password);
                            console.log(users);
                            console.log(passwords);
                            if(user === users && password === passwords){
                              var uploadScreen=[];
       uploadScreen.push(<UploadPage appContext={self.props.appContext} />)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
                            }else{
                              console.log("no");
                            }
                             self.setState({
                              username : ' ',
                              password : ' '
                            })
                            });
 }

  render() {
    
    return (
       <div className="App">
        <Layout fixedHeader>
         <Header className="App-header" >
  			<img src={lo} alt="FIT-COOP"  className="img"/>          
          </Header>
          <Content>
        <div>
                 <br/>
                 <Textfield label="Username" floatingLabel value = {this.state.username} style={{width: 'auto',display: 'block'}} onChange = {e => this.setState({username: e.target.value})}/>
                  <br/>
                 <Textfield type="password" label="Password" floatingLabel value = {this.state.password} style={{width: 'auto',display: 'block',margin: '-3px'}} onChange = {e => this.setState({password: e.target.value})} /><br/>
                  <Button raised accent ripple primary={true}  onClick={(event) => this.handleClick(event)}>Login</Button>
        {this.state.draweropen}
        </div>
          </Content>
        </Layout>
    </div>
    );
  }
}

export default Login;