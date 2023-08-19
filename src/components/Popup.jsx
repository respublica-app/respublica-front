import "./Popup.scss"

function togglePopup(id) {
    document.getElementById(id).classList.toggle("showed");
}

function showPopup(id) {
    document.getElementById(id).classList.add("showed");
}

function hidePopup(id) {
    document.getElementById(id).classList.remove("showed");
}

function Popup(props) {
    return (
        <div id={props.id} className={props.className + " popup"}>
            <div className="popup-background" onClick={() => togglePopup(props.id)}></div>
            <div className="popup-content">
                <button className="close-btn" onClick={() => togglePopup(props.id)}>&times;</button>
                <div className="popup-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

function Tooltip(props) {
    function handleClick(e) {
        console.log(e.target);
        e.target.focus();
    }

    return (
        <span className="tooltip" onClick={handleClick} tabIndex={0}>
            {props.children}
            <span className="tooltip-content">{props["data-content"]}</span>
        </span>
    );
}

export { togglePopup, showPopup, hidePopup, Popup, Tooltip };