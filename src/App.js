import { Switch } from 'react-router-dom'

import useCreateRoutes from '@/utils/useCreateRouter'

import logo from './assets/images/logo.svg';
import './App.css';

import routes from '@/router'

function App() {

  const routesList = useCreateRoutes(routes())

  return (
    <div className="App">

      <header className="App-header">
        <Switch>
          {routesList}
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
