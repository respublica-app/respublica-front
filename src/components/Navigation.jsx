import { NavLink } from "react-router-dom"
import SVGIcon from "./Icons"
import "./Navigation.scss"

function NavBarItem({ icon, label, to, noLabel=false }) {
    if (noLabel) {
        return (
            <li>
                <NavLink to={to}>
                    {({ isActive }) => (
                        <SVGIcon name={icon} alt={label} filled={isActive} />
                    )}
                </NavLink>
            </li>
        )
    }
    else {
        return (
            <li>
                <NavLink to={to}>
                    {({ isActive }) => (
                        <>
                            <SVGIcon name={icon} alt={label} filled={isActive} />
                            <span className="navbar-item-label">{label}</span>
                        </>
                    )}
                </NavLink>
            </li>
        )
    }
}

function NavTabItem({ icon=undefined, label, to }) {
    if (icon === undefined) {
        return (
            <li>
                <NavLink to={to} className={({ isActive }) => isActive ? "active" : ""}>
                    <span className="navbar-item-label">{label}</span>
                </NavLink>
            </li>
        )
    }
    else {
        return (
            <li>
                <NavLink to={to} className={({ isActive }) => isActive ? "active" : ""}>
                    <>
                        <SVGIcon name={icon} alt={label} />
                        <span className="navbar-item-label">{label}</span>
                    </>
                </NavLink>
            </li>
        )
    }
}

export { NavBarItem, NavTabItem }