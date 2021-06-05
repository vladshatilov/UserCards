import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Header} from "./components/Header";
import {Step1} from "./Step1";
import {Step2} from "./Step2";
import {Step3} from "./Step3";
import {Result} from "./Result";
import {Main} from "./Main";
import 'react-fancybox/lib/fancybox.css'

// const Step1 = () => <>Step one</>
// const Step2 = () => <>Step two</>
// const Step3 = () => <>Step three</>
// const Result = () => <><Link to={'/'}>To the start</Link></>

// const Header = () => <h1>Please fill all forms</h1>

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/step1' component={Step1}/>
          <Route path='/step2' component={Step2}/>
          <Route path='/step3' component={Step3}/>
          <Route path='/result' component={Result}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
