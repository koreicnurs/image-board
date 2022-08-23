import {Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <Switch>
            {/*<Route path="/" exact component={}/>*/}
            <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
    );
}

export default App;
