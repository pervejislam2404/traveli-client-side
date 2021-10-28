import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import PlaceOrder from './components/PlaceOrders/PlaceOrder';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAll from './components/ManageAll/ManageAll';
import NewService from './components/NewService/NewService';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import AuthContext from './Context/AuthContext';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthContext>
     <Router>
      <Header/>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <PrivateRoute path="/placeOrder">
              <PlaceOrder/>
          </PrivateRoute>
          <Route path="/myOrder" component={MyOrders}/>
          <Route path="/manageAll" component={ManageAll}/>
          <Route path="/newService" component={NewService}/>
          <Route path="/login" component={Login}/>
          <Route path="*" component={NotFound}/>
       </Switch>
       <Footer/>
     </Router>
     </AuthContext>
    </div>
  );
}

export default App;
