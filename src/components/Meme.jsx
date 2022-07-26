import { useEffect, useState } from "react"

const Meme = () => {

  const [allMemeImages, setAllMemeImages] = useState('')

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemeImages(data))
  }, [])

  const [meme, setMeme] = useState({
    topText: 'They turned off the TV',
    bottomText: 'So I turned on the Stove',
    randomImage: 'https://i.imgflip.com/23ls.jpg'
  })

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const getRandomMemeImg = (e) => {
    e.preventDefault()
    const memesArray = allMemeImages.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const imgUrl = memesArray[randomNum].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: imgUrl
    }))
  }

  return (
    <div className='container'>
      <form className="meme">
        <div className="meme-inputs">
          <input
            type="text"
            placeholder="Top text"
            onChange={handleChange}
            name='topText'
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom text"
            onChange={handleChange}
            name='bottomText'
            value={meme.bottomText}
          />
        </div>
        <button
          className="meme-inputs-btn"
          onClick={getRandomMemeImg}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme-img-div">
        <img className="meme-img" src={meme.randomImage} alt="" />
        <h3 className="meme-text top-text">{meme.topText}</h3>
        <h3 className="meme-text bottom-text">{meme.bottomText}</h3>
      </div>
    </div>
  )
}

export default Meme