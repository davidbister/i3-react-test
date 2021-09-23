import Navbar from './components/Navbar';
import FirstPage from './components/pages/FirstPage';
import SecondPage from './components/pages/SecondPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={FirstPage}/>
        <Route path='/secondpage' component={SecondPage}/>
        
      </Switch>
    </Router>
  );
}

export default App;
