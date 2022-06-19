import React from 'react';
import memesData from './../memesData';

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  const getMemeImage = function () {
    let randomNumber = ~~(Math.random() * allMemeImages.data.memes.length);
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: allMemeImages.data.memes[randomNumber].url,
      };
    });
  };

  return (
    <div className='main--container'>
      <div className='inputs--container'>
        <input type='text' placeholder='Top text' />
        <input type='text' placeholder='Bottom text' />
      </div>
      <button onClick={getMemeImage} className='main--button'>
        Get a new meme image
      </button>
      <div className='meme--container'>
        <img src={meme.randomImage} alt='' />
      </div>
    </div>
  );
}
