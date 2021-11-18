const Header = () => {
    return (
        <header>
            <h1><a className="home" href="a">GamesPlay</a></h1>
            <nav>
                <a href="a">All games</a>
                <div id="user">
                    <a href="a">Create Game</a>
                    <a href="a">Logout</a>
                </div>
                <div id="guest">
                    <a href="a">Login</a>
                    <a href="a">Register</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;