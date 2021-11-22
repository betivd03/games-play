import Catalog from "./components/Catalog.js";
import CreateGame from "./components/CreateGame.js";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import WelcomeWorld from "./components/WelcomeWorld.js";

function App() {
    const routes = {
        '/home': WelcomeWorld,
        '/games': Catalog,
        '/create': CreateGame,
        '/login': Login,
        '/register': Register
    };
    
    return (
        <div id="box">
            <Header />
            <main id="main-content"></main>
        </div>
    );
}

export default App;
