  import axios from 'axios';
  import Ingreso from './Ingreso';
  import UploadScreen from './Revision';
  import Supervision from './Supervision';
  import Login from './Login';
  import React, { Component } from 'react';
  import lo from '../Logo/logo_splash.png';
  import {Layout, Header} from "react-mdl";

  class UploadPage extends Component {
    constructor(props) {
      super(props);
      this.state = {draweropen: false,currentScreen:[],role : []};
    }
    componentDidMount(){
      var Url = "http://172.17.1.25:7070/FitPwappReceptor/rest/test";
              var config = {
                           headers: {'Content-Type': 'application/x-www-form-urlencoded',
                                      'Authorization': 'Bearer token',
                                      'Access-Control-Allow-Origin': '*',
                                      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                                      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                                      }
                            }
              const user=localStorage.getItem('users',user);
              const password=localStorage.getItem('password',password);
              var payload={
                            user: user,
                            password: password
                          }
                  axios.post(Url, payload, config)
                  .then((response) => {
                    this.setState({user:response.data.user,
                      nick:response.data.nick,
                      role:response.data.tasks})
                    
                    var currentScreen=[];
      currentScreen.push(<UploadScreen role={this.state.role} user={this.state.user} nick={this.state.nick}/>);
      this.setState({currentScreen})
                    }).catch((err) => {
                                    console.log(err)
                                    }) 
                                    var currentScreen=[];
      currentScreen.push(<UploadScreen role={this.state.role}/>);
      this.setState({currentScreen})
    }
    toggleDrawer(event){
    this.setState({draweropen: !this.state.draweropen})
    }
    handleMenuClick(event,page){
      switch(page){
        case "rivision":
        var currentScreen=[];
        currentScreen.push(<UploadScreen appContext={this.props.appContext} />);
        this.setState({currentScreen})
        break;
        case "supervision":
       
        currentScreen.push(<Ingreso appContext={this.props.appContext}/>);
        this.setState({currentScreen})
        break;
         case "ingreso":
        
        currentScreen.push(<Supervision appContext={this.props.appContext} />);
        this.setState({currentScreen})
        break;
        case "logout":
        var loginPage =[];
        loginPage.push(<Login appContext={this.props.appContext}/>);
        this.props.appContext.setState({loginPage:loginPage,uploadScreen:[]})
        break;
        default:
                        console.log("default");
      }
      var user=localStorage.getItem("user")
      if(user === "Admin"){this.setState({draweropen: !this.state.draweropen})}
      document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
    }
    render() {
      return (
        <div>
         <Layout fixedHeader>
           <Header className="App-header" >
            <img src={lo} alt="Hi"  className="img"/>          
            </Header>
          <div>
            <br />
            {this.state.currentScreen}
          </div>
        </Layout>
        </div>
      );
    }
  }

  export default UploadPage;
   
   
