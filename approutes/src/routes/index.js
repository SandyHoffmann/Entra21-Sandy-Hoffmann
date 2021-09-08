
import {BrowserRouter as Router,
            Route,
            Switch
} from "react-router-dom";
import { Menu } from "../components/Menu"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { NotFound } from "../pages/NotFound"
import { Produto } from "../pages/Products"
import { Home } from "../pages/Home";

export function Routes(){
    return(
        <div>
        <Router>
            <Menu/>
        <Switch>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/login" component={Login}></Route>
            <Route exact path="/">
            <Home/>
            </Route>
            <Route path="/products/:id" component={Produto}></Route>
            <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
        </div>
    )
}

