import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories'
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Action from './components/Action/Action';
import Comedy from './components/Comedy/Comedy'; 
import Details from './components/Details/Details'; 
import Drama from './components/Drama/Drama';
import Thriller from './components/Thriller/Thriller';
import Player from './components/Player/Player';


function App(props) {


  return(
    <div className='App'>
      <BrowserRouter forceRefresh={true}>
        <Navbar {...props}/>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                {...props}
                ></Home>
              )}
            ></Route>
            <Route
              exact
              path="/signin"
              render={(props) => (
                <Signin
                {...props}
                ></Signin>
              )}
            ></Route>
            <Route
              exact
              path="/signup"
              render={(props) => (
                <Signup
                  {...props}
                ></Signup>
              )}
            ></Route>
            <Route
              exact
              path="/categories"
              render={(props) => (
              <Categories
                {...props}
              ></Categories>
              )}
            ></Route>
            <Route
              exact
              path="/categories/action"
              render={(props) => (
              <Action
                {...props}
              ></Action>
              )}
            ></Route>
            <Route
              exact
              path="/categories/comedy"
              render={(props) => (
              <Comedy
                {...props}
              ></Comedy>
              )}
            ></Route>
            <Route
              exact
              path="/categories/drama"
              render={(props) => (
              <Drama
                {...props}
              ></Drama>
              )}
            ></Route>
            <Route
              exact
              path="/categories/thriller"
              render={(props) => (
              <Thriller
                {...props}
              ></Thriller>
              )}
            ></Route>
            <Route
              exact
              path="/details/:id/:Title"
              render={(props) => (
              <Details
                {...props}
              ></Details>
              )}
            ></Route>
            <Route
              exact
              path="/play"
              render={(props) => (
                <Player
                {...props}
                ></Player>
              )}
            ></Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;