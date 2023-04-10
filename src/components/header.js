import React from "react"

export default function App() {
    return (
        <header className="header">
            <img 
                src={require("../images/trollface.png")}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}