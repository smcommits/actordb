import axios from 'axios';
import HomePageConnected from '../containers/Homepage';
import Search from './Search';

function App() {
  return (
    <>
      <Search />
      <HomePageConnected />
    </>
  );
}

export default App;
