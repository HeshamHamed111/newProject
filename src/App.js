import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Index from './pages/Index/index';
import MainNav from './component/Header/MainNav';
import NavTop from './component/Header/NavTop';
import MenuCart from './pages/MenuCart/MenuCart';
import NotFound from './NotFound';

import './App.css';


class App extends Component {

  state = {
    imgState: '', 
    name: '', 
    quantity: 0, 
    price: 0, 
    counter: 0
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
    render() {
        return (
          <Router>     
          <div className="App">
          <NavTop />
          <MainNav counter={this.state.counter} />
          
          <Routes>

              <Route path="/" element={<Index handelState={this.handlerState} handelImage={this.handlerImageState} handlerCounter={this.handlerCounter} />} />
              <Route path="/MenuCart" element={<div><Index handelState={this.handlerState} handelImage={this.handlerImageState} /><MenuCart statePro={this.state} /> </div> } />
              <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
          </Router>
       
        )
    } 

}

export default App;
