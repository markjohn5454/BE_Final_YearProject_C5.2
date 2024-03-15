import './App.css';
import LoginMain from './components/LoginMain.js';
import {BrowserRouter ,  Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import AgentLogin from "./components/AgentLogin"
import StudentLogin from './components/StudentLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import Certificate from './components/Certificate.js';
import Web3 from 'web3';
import React,{Component} from 'react';
import OCertificate from "./truffle_abis/OCertificate.json"

class App extends Component{
  
  async UNSAFE_componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockchainData()
  }

  
  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('No Ethereum')
    }
  }

  async loadBlockchainData(){
    const web3 = window.web3
    const account = await web3.eth.getAccounts()
    this.setState({account:account[0]})
    console.log(account)
  }
  
  constructor(props){
    super(props)
    this.state = {
      account: '0x0',
      tether:{},
      rwd:{},
      decetralBank:{},
      tetherBalance:'0',
      rwdBalance:'0',
      stakingBalance:'0',
      loading: true
    }
  }
  
  render(){
    return (
      <div>
        
        <BrowserRouter>
        <Header account={this.state.account}/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path = "/LoginMain"  element = {<LoginMain/>}/>
          <Route path = "/AgentLogin"  element = {<AgentLogin/>}/>
          <Route path = "/StudentLogin"  element = {<StudentLogin/>}/>
          <Route path = "/LoginMain"  element = {<LoginMain/>}/>
          <Route path = "/Certificate"  element = {<Certificate/>}/>
        </Routes>
      </BrowserRouter>
        <div className='text-center'></div>
      
      </div>
    )
  }
}



export default App;
