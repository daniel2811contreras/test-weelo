import CryptoCurrency from "@src/views/CryptoCurrency";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <CryptoCurrency />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers