import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import HomePageConnected from '../containers/Homepage';
import ActorPage from './ActorPage';
import Search from './Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Search />
        <Switch>
          <Route path="/" exact component={HomePageConnected} />
          <Route path="/actor/:id" component={ActorPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
