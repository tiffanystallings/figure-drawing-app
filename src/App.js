import { Redirect, Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/main/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/session">
            Hello session!
          </Route>

          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
