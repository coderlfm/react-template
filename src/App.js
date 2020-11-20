import { Link } from 'react-router-dom'
import useToken from '@/store/useToken'

import { useCreateRoutes } from '@/utils/utils'
import routes from '@/router'
import './App.scss';

function App() {

  const routesList = useCreateRoutes(routes)

  return (
    <useToken.Provider>
      <div className="App">
        <header>
          <Link to="/home">首页</Link>
          <Link to="/profile">我的</Link>
          <Link to="/login">登录</Link>
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
    </useToken.Provider>
  );
}

export default App;
