import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { TypeScriptPage } from './components/TypeScriptPage';
import { Home } from './components/Home';


const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/typescript' component={TypeScriptPage} />
    </Switch>
  );
}



export default App;
