import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);
  //console.log(allMemes);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <div>
      <Header />
      <main className="form-main">
        <div className="meme-input">
          <input
            type="text"
            placeholder="Top Text"
            className="meme-input"
            value={meme.topText}
            name="topText"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            className="meme-input"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
          <button className="getimage-button" onClick={getMemeImage}>
            Get a new meme image
          </button>
        </div>
        <div class="meme-image-container">
          <img src={meme.randomImage} className="meme-image" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
};
