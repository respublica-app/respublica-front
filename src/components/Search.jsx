import SVGIcon from "./Icons"
import "./Buttons.scss"

function SearchButton () {
    return (
        <button className="search-button">
            <SVGIcon name="search" alt="Rechercher" />
        </button>
    )
}

export { SearchButton }