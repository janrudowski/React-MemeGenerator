import React from 'react';

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        setAllMemeImages(data.data.memes);
      });
  }, []);

  const getMemeImage = function () {
    let randomNumber = ~~(Math.random() * allMemeImages.length);
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: allMemeImages[randomNumber].url,
      };
    });
  };

  const handleChange = function (event) {
    console.log('s');
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className='main--container'>
      <div className='inputs--container'>
        <input
          onChange={handleChange}
          name='topText'
          type='text'
          placeholder='Top text'
          value={meme.topText}
        />
        <input
          onChange={handleChange}
          name='bottomText'
          type='text'
          placeholder='Bottom text'
          value={meme.bottomText}
        />
      </div>
      <button onClick={getMemeImage} className='main--button'>
        Get a new meme image
      </button>
      <div className='meme--container'>
        <span className='text top'>{meme.topText}</span>
        <span className='text bottom'>{meme.bottomText}</span>
        <img src={meme.randomImage} alt='' />
      </div>
    </div>
  );
}
