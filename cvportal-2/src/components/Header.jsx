import MyNavBar from "./Navbar";

function Header() {
    return (
        <>
        <header>
            <h1>Elina Jonsson</h1>
            <MyNavBar />

           {/* <div className="nav-wrapper">
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/about-me">About Me</a>
                    <a href="/cv">CV</a>
                    <a href="/portfolio">Portfolio</a>
                </nav>
            </div>*/}
        </header>
        </>
    );
}
export default Header;
