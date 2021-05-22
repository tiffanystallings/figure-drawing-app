import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import Session from "./components/main/Session";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/session">
            <Session />
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
