import '../App.css';
import Login from './Login';
import React, { Component } from 'react';
import {Layout, content} from 'react-mdl';
import { Dropdown, Button, Divider, Card, Table } from 'semantic-ui-react';

const countryOptions =  [ 
{ key: 'Asg', value: 'Asg', text: 'Assigned' },
{ key: 'Sta', value: 'Sta', text: 'Started' },
{ key: 'Sus', value: 'Sus', text: 'Suspended' },
{ key: 'Fin', value: 'Fin', text: 'Finished' } ]
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
                    value : '',
                    user:'',
                    nick:'',
                    tasks: [],currentScreen:[]

                    }
                   
                  }
    _onSelect(e, data){
              this.setState({ value: data.value })
                      } 
                      handleClick(event){
                        console.log("rishi");
                        var self=this;
      var currentScreen=[];
      currentScreen.push(<Login appContext={self.props.appContext}/>);
    self.props.appContext.setState({currentScreen})
                      }   
                      Logout(event){
                        window.location.reload();
                      }        
  
  render() {
    var that = this;
    return (
    <div>
        <Layout>
    <div className="rev-header">
    <div id="ch">Revision De Tareas</div>
    </div>
  
    <content>
    <div > <h5>consultor</h5> <Card  fluid header={that.props.user} meta={that.props.nick} /></div>
    <br/>
    <Divider fitted/>
    <br/>
    <div>
  <h5>Controles</h5>
      <Button onClick={(event) => this.Logout(event)}>
      Logout
      </Button>
      </div>
    <br/>
    <Divider fitted/>
    <br/>
    <Table compact>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Order</Table.HeaderCell>
        <Table.HeaderCell>Teara</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Sub sistema</Table.HeaderCell>
        <Table.HeaderCell>Actividad</Table.HeaderCell>
        <Table.HeaderCell>Cliente</Table.HeaderCell>
        <Table.HeaderCell>H.Est</Table.HeaderCell>
        <Table.HeaderCell>Estado</Table.HeaderCell>
        <Table.HeaderCell>Asignador</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
{that.props.role.map(function(task, index){return(
       <Table.Row>
        <Table.Cell>{task.order}</Table.Cell>
        <Table.Cell >{task.description}</Table.Cell>
        <Table.Cell >{task.teara}</Table.Cell>
        <Table.Cell >{task.subsistema}</Table.Cell>
        <Table.Cell >{task.actividad}</Table.Cell>
        <Table.Cell >{task.cliente}</Table.Cell>
        <Table.Cell >{task.hest}</Table.Cell>
        <Table.Cell key={task.index}><Dropdown placeholder="select the option" value={task.index} onChange={that._onSelect.bind(that)}  selection options={countryOptions}  /></Table.Cell>
        <Table.Cell >{task.asignador}</Table.Cell>
      </Table.Row>
      )})}
      </Table.Body>
  </Table>
    </content>
    </Layout>
    </div>
    );
  }
}

export default Home;