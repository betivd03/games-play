import { Link, NavLink } from "react-router-dom";

import './Header.css';

const Header = ({
    navigationChangeHandler,
}) => {
    let activeLinkStyles = {
        textDecoration: 'underline'
    };

    // const onHeaderClick = (e) => {
    //     e.preventDefault();

    //     if (e.target.tagName === 'A') {
    //         // console.log(e.target.href);

    //         let url = new URL(e.target.href);
    //         navigationChangeHandler(url.pathname);
    //         // console.log(url.pathname);
    //     }
    // };

    return (
        // <header onClick={onHeaderClick}>
        //     <h1><a className="home" href="/home">GamesPlay</a></h1>
        //     <nav>
        //         <a href="/games">All games</a>
        //         <div id="user">
        //             <a href="/create">Create Game</a>
        //             <a href="/logout">Logout</a>
        //         </div>
        //         <div id="guest">
        //             <a href="/login">Login</a>
        //             <a href="/register">Register</a>
        //         </div>
        //     </nav>
        // </header>



        // <header>
        //     <h1><Link className="home" to="/">GamesPlay</Link></h1>
        //     <nav>
        //         <Link to="/games">All games</Link>
        //         <div id="user">
        //             <Link to="/create">Create Game</Link>
        //             <Link to="/logout">Logout</Link>
        //         </div>
        //         <div id="guest">
        //             <Link to="/login">Login</Link>
        //             <Link to="/register">Register</Link>
        //         </div>
        //     </nav>
        // </header>



        <header>
        <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
        <nav>
            <NavLink activeStyle={activeLinkStyles} activeClassName="active-navigation-link" to="/games">All games</NavLink>
            {/* <NavLink activeStyle={{textDecoration: 'underline'}} to="/games">All games</NavLink> */}
            <div id="user">
                <NavLink activeStyle={activeLinkStyles} activeClassName="active-navigation-link" to="/create">Create Game</NavLink>
                <NavLink activeStyle={activeLinkStyles} activeClassName="active-navigation-link" to="/logout">Logout</NavLink>
            </div>
            <div id="guest">
                <NavLink activeStyle={activeLinkStyles} activeClassName="active-navigation-link" to="/login">Login</NavLink>
                <NavLink activeStyle={activeLinkStyles} activeClassName="active-navigation-link" to="/register">Register</NavLink>
            </div>
        </nav>
        </header>
    );
};

export default Header;