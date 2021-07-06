import logo from "./logo.svg";
import "./App.css";
import Mcqs from "./mcqs/mcqs";
import Paints from "./paints/paints";
import Splash from "./../src/splash/index";
import Level2 from "./../src/level2/level2";
import Level3 from "./../src/level3/index";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
function App() {
  return (
    // <div>
    //   <Splash />
    //   <Mcqs />

    //   <Level2 />

    // </div>

    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/mcqs" component={Mcqs} />
          <Route exact path="/level2" component={Level2} />
          <Route exact path="/level3" component={Level3} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
