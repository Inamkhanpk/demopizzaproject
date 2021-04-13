import React, { Component } from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route,withRouter} from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import { GlobalProvider } from './contextAPI/GlobalState';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./pageTransition/slideTransition.scss";

class App extends Component {
  constructor(props) {
    super(props);
   this.state = {
    prevDepth: this.getPathDepth(this.props.location)
  };

}
  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }
  
  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };
  return (
   
    <div >
      <GlobalProvider>
      {/* <Router> */}
      <TransitionGroup component="div" className="App">
    <CSSTransition
      key={currentKey}
      timeout={timeout}
      classNames="pageSlider"
      mountOnEnter={false}
      unmountOnExit={true}
    >
<div
className={
this.getPathDepth(location) - this.state.prevDepth >= 0
  ? "left"
  : "right"
}
>
      <Switch >
      
      
      <Route exact path="/">
        <Home /> 
      </Route>
      <Route path="/list">
        <List/>
      </Route>
     
      </Switch>
      </div>
      </CSSTransition>
      </TransitionGroup>

      {/* </Router> */}
      </GlobalProvider>
    </div>
  );
}
}
export default  withRouter(App);
