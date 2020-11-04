import { Link } from 'react-router-dom'

import { useCreateRoutes } from '@/utils/utils'
import routes from '@/router'
import './App.scss';

function App() {

  const routesList = useCreateRoutes(routes)

  return (
    <div className="App">
      <header>
        <Link to="/home">首页</Link>
        <Link to="/profile">我的</Link>
      </header>

      <main> {routesList} </main>

      <footer>
        <a
          className="App-link"
          href="https://github.com/coderlfm/react-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          To view the document
        </a>
      </footer>
    </div>
  );
}

export default App;
