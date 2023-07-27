import { useState, useEffect } from "react";

function SVGIcon({ name, alt, filled = false }) {
    const [svgCode, setSvgCode] = useState("");
    const [svgAttributes, setSvgAttributes] = useState([]);

    useEffect(() => {
        let filename = filled ? name + "_filled" : name;
        // Chargez le code SVG à partir du fichier
        fetch("./assets/icons/" + filename + ".svg")
        .then((response) => response.text())
        .then((text) => {
            const elmt = document.createElement("div");
            elmt.innerHTML = text;
            const svg = elmt.querySelector("svg");
            const attributes = [...svg.attributes].reduce((acc, { name, value }) => {
                acc[name] = value;
                return acc;
            }, {});
            setSvgCode(svg.innerHTML)
            setSvgAttributes(attributes);
        });
    }, [name, filled]);

    return (
        <svg dangerouslySetInnerHTML={{ __html: svgCode }} aria-label={alt} {...svgAttributes} />
    );
}

export default SVGIcon;