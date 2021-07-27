import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import HomePageConnected from '../containers/Homepage';
import ActorPage from '../containers/ActorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePageConnected} />
          <Route path="/actor/:id" component={() => <ActorPage id={192}/>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
