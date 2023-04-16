import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomMemeNumber = Math.floor(Math.random() * memesArray.length)
        const randomMeme = memesArray[randomMemeNumber].url
        setMeme(prevMeme => ({
            prevMeme,
            randomImage: randomMeme, 
        }))
    }


    return (
        <main>
            <div className="meme">
                <input type="text" placeholder="Top Text" className="meme--input"></input>
                <input type="text" placeholder="Bottom Text" className="meme--input"></input>
                <button onClick={getMemeImage} className="meme--button">Get a new meme image 🗿</button>
            </div>
            <img src={meme.randomImage} className="meme--image"></img>
        </main>
    )
}