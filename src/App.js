import React, {Component} from 'react';

import Index from './pages/Index/index';
import MainNav from './component/Header/MainNav';
import NavTop from './component/Header/NavTop';
import MenuCart from './pages/MenuCart/MenuCart';


import './App.css';


class App extends Component {

  state = {
    imgState: '', 
    name: '', 
    quantity: 0, 
    price: 0, 
    counter: 0, 
    toggle: false
  }
  handlerState = (imgUrl, name, quantity, price) => {
    this.setState({imgState: imgUrl, name: name, quantity: quantity, price: price})
  }
  handlerImageState = (imgUrl) => {
    this.setState({...this.state, imgState: imgUrl})
  }
  handlerCounter = (num) => {
    this.setState({...this.state, counter: num})
}
  handlerToggle = () => {
    this.setState({...this.state, toggle: !this.state.toggle})
  }
    render() {
        return (
     
          <div className="App">
            <NavTop />
            <MainNav counter={this.state.counter} handlerToggle={this.handlerToggle} />
            <Index handelState={this.handlerState} handelImage={this.handlerImageState} handlerCounter={this.handlerCounter} />
            
            {this.state.toggle && <MenuCart statePro={this.state} handlerToggle={this.handlerToggle} /> }
          
        
          </div>
    
       
        )
    } 

}

export default App;
