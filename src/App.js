// import { useState } from "react";
// import { createElement } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Catalog from "./components/Catalog/Catalog.js";
import CreateGame from "./components/CreateGame.js";
// import ErrorPage from "./components/ErrorPage.js";
import GameDetails from "./components/GameDetails.js";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import WelcomeWorld from "./components/WelcomeWorld.js";

function App() {
    // const [page, setPage] = useState('/home');

    // const navigationChangeHandler = (path) => {
    //     console.log(path);
    //     setPage(path);
    // };

    // const router = (path) => {
    //     let pathNames = path.split('/');

    //     let rootPath = pathNames[1];
    //     let argument = pathNames[2];

    //     const routes = {
    //         'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />,
    //         'games': <Catalog navigationChangeHandler={navigationChangeHandler} />,
    //         'create': <CreateGame />,
    //         'login': <Login />,
    //         'register': <Register />,
    //         'details': <GameDetails id={argument} />
    //     };

    //     return routes[rootPath];
    // }
    
    return (
        <div id="box">
            {/* <Header 
                navigationChangeHandler={navigationChangeHandler} 
            /> */}

            <Header />
            
            <main id="main-content">
                {/* { router(page) || <ErrorPage /> } */}
                {/* { routes[page] || <ErrorPage>Some info</ErrorPage> } */}
                {/* { createElement(routes[page]) || <ErrorPage /> } */}
                
                <Switch>
                    <Route path="/" exact component={WelcomeWorld} />
                    <Route path="/games" exact component={Catalog} />
                    <Route path="/create" component={CreateGame} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/games/:gameId" component={GameDetails} />
                    <Route path="/custom">
                        <h2>Custom page</h2>
                        <p>kjhgfddfghjk</p>
                    </Route>
                    <Route path="/logout" render={(props) => {
                        console.log('Logged out');

                        return <Redirect to="/" />
                    }} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
