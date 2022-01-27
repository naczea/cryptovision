import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/Header';
import Crypto from './containers/Crypto';
import NewCrypto from './containers/NewCrypto';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/crypto" component={Crypto} />
        <Route exact path="/crypto/new" component={NewCrypto} />
      </Switch>
    </Router>
  );
}

export default App;
