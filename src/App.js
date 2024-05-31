import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import ToggleColorMode from "./Pages/sample";
import Blog_home from "./Pages/Blog_home";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";
import FormExample from "./Pages/FormExample";
import ReactRedux from "./Pages/ReactRedux";
import Advance_react from "./Pages/Advance_react";
import Interview_questions from "./Pages/Interview_questions";
import Myworks from "./Pages/Myworks";
import Myjournal from "./Pages/Myjournal";
import Blog5 from "./Pages/Blog5";
import My_works from "./Pages/My_works";
import mail from "./Pages/mail";
function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/react-hooks" component={ReactHooks} />
            <Route exact path="/ui-ux" component={UiUx} />
            <Route exact path="/ReactRedux" component={ReactRedux} />
            {/* <Route exact path="/sample" component={ToggleColorMode} /> */}
            <Route exact path="/form-example" component={FormExample} />
            <Route exact path="/Advance_react" component={Advance_react} />
            <Route exact path="/Blog_home" component={Blog_home} />
            <Route exact path="/Interview_questions" component={Interview_questions} />
            <Route exact path="/Myworks" component={Myworks} />            
            <Route exact path="/Myjournal" component={Myjournal} />            
            <Route exact path="/Blog5" component={Blog5} />
            <Route exact path="/My_works" component={My_works} />
            <Route exact path="/mail" component={mail} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
// Advance_react
// Blog_home
// Interview_questions