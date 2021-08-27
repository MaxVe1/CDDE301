import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import First from "./First";
import Form from "./Form";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={First}></Route>
                <Route path="/form" component={Form}></Route>
            </Switch>
        </Router>

    );
}

export default App;

