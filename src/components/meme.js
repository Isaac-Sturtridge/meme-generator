import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        }, [])

    function getMemeImage() {
        const randomMemeNumber = Math.floor(Math.random() * allMemes.length)
        const randomMeme = allMemes[randomMemeNumber].url
        setMeme(prevMeme => ({
            prevMeme,
            randomImage: randomMeme, 
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    onChange={handleChange}
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🗿
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}