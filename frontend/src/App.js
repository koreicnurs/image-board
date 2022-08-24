import {Route, Switch} from "react-router-dom";
import ImageBoards from "./containers/ImageBoards/ImageBoards";

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={ImageBoards}/>
            <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
    );
}

export default App;
