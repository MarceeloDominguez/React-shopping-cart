import { useEffect } from "react";
import { AppGlobalStyle } from "./App.styles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { GlobalState } from "./context/GlobalState";
//@Componets
import { Home } from "./pages/Home";
import { Headphones } from "./pages/Headphones";
import { Speakers } from "./pages/Speakers";
import { Earphones } from "./pages/Earphones";
import { CartPages } from "./pages/CartPages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <AppState>
      <Router>
        <AppGlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/Headphones" exact={true}>
            <Headphones />
          </Route>
          <Route path="/Speakers" exact={true}>
            <Speakers />
          </Route>
          <Route path="/Earphones" exact={true}>
            <Earphones />
          </Route>
          <Route path="/CartPages" exact={true}>
            <CartPages />
          </Route>
        </Switch>
      </Router>
    </AppState>
  );
};

const AppState = ({ children }) => {
  return <GlobalState>{children}</GlobalState>;
};

export default App;
