import { useState } from "react";
// import { createElement } from "react";

import Catalog from "./components/Catalog.js";
import CreateGame from "./components/CreateGame.js";
import ErrorPage from "./components/ErrorPage.js";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import WelcomeWorld from "./components/WelcomeWorld.js";

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWorld />,
        '/games': <Catalog />,
        '/create': <CreateGame />,
        '/login': <Login />,
        '/register': <Register />
    };

    const navigationChangeHandler = (path) => {
        console.log(path);
        setPage(path);
    }
    
    return (
        <div id="box">
            <Header 
                navigationChangeHandler={navigationChangeHandler} 
            />
            
            <main id="main-content">
                { routes[page] || <ErrorPage /> }
                {/* { routes[page] || <ErrorPage>Some info</ErrorPage> } */}
                {/* { createElement(routes[page]) || <ErrorPage /> } */}
            </main>
        </div>
    );
}

export default App;
