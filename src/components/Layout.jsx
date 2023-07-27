import { Outlet, Link } from "react-router-dom"
import { NavBarItem } from "./Navigation"
import "./Layout.scss"

function Layout() {
    return (
        <>
            <header>
                <Link to="/">
                    <h1>
                        <span style={{color: "#002654"}}>res</span>
                        <span style={{color: "white"}}>:</span>
                        <span style={{color: "#ce1126"}}>publica</span>
                    </h1>
                </Link>
                <ul>
                    <NavBarItem to="/elections" icon="elections" label="Elections" noLabel={true} />
                    <NavBarItem to="/profil" icon="person" label="Profil" noLabel={true} />
                </ul>
            </header>

            <Outlet />

            <nav className="bottom-bar">
                <ul>
                    <NavBarItem to="/" icon="home" label="Flux" />
                    <NavBarItem to="/politoscope" icon="assignment_ind" label="Politoscope" />
                    <NavBarItem to="/participer" icon="forum" label="Participer" />
                    <NavBarItem to="/outils" icon="handyman" label="Outils" />
                </ul>
            </nav>
        </>
    )
}

export default Layout;