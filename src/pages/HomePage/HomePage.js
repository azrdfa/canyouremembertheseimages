import { useState } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { GoChevronLeft } from "react-icons/go"
import longText from "../../constants/longText"
import "./HomePage.css"

const imagesPath = process.env.PUBLIC_URL + `/assets/images`
const HomePage = () => {
  const [initBatch, setInitBatch] = useState({
    showCategory: true,
    category: null,
  })
  const setCategory = (value) => {
    setInitBatch({
      showCategory: false,
      category: value
    })
  }
  const resetCategory = () => {
    setInitBatch({
      showCategory: true,
      category: null
    })
  }
  return (
    <div className="hp-container">
      <h1 className="hp-h1">Can You Remember These Images?</h1>
      <p className="hp-p">{longText.main_description}</p>
      {
        initBatch.showCategory &&
        <>
          <h1 className="hp-h1-sc">Select Category</h1>
          <div className="hp-flex-container">
            <div
              className="hp-flex-item"
              onClick={() => setCategory("brand_logo")}
            >
              <img
                className="hp-img"
                src={`${imagesPath}/category/brand_logo.jpg`}
                alt={`${imagesPath}/category/brand_logo.jpg`}
              />
              <h3 className="hp-h3">Brand Logo</h3>
            </div>
            <div
              className="hp-flex-item"
              onClick={() => setCategory("anime")}
            >
              <img
                className="hp-img"
                src={`${imagesPath}/category/anime.jpg`}
                alt={`${imagesPath}/category/anime.jpg`}
              />
              <h3 className="hp-h3">Anime</h3>
            </div>
            <div
              className="hp-flex-item"
              onClick={() => setCategory("video_game")}
            >
              <img
                className="hp-img"
                src={`${imagesPath}/category/video_game.jpg`}
                alt={`${imagesPath}/category/video_game.jpg`}
              />
              <h3 className="hp-h3">Video Game</h3>
            </div>
          </div>
        </>
      }
      {
        initBatch.showCategory === false &&
        <>
          <h1 className="hp-h1-sc">Select Difficulty</h1>
          <div className="hp-flex-container">
            <LinkContainer to={`test/${initBatch.category}/easy`}>
              <div className="hp-flex-item">
                <img
                  className="hp-img"
                  src={`${imagesPath}/difficulty/easy.jpg`}
                  alt={`${imagesPath}/difficulty/easy.jpg`}
                />
                <h3 className="hp-h3">Easy</h3>
              </div>
            </LinkContainer>
            <LinkContainer to={`test/${initBatch.category}/medium`}>
              <div className="hp-flex-item">
                <img
                  className="hp-img"
                  src={`${imagesPath}/difficulty/medium.jpg`}
                  alt={`${imagesPath}/difficulty/medium.jpg`}
                />
                <h3 className="hp-h3">Medium</h3>
              </div>
            </LinkContainer>
            <LinkContainer to={`test/${initBatch.category}/hard`}>
              <div className="hp-flex-item">
                <img
                  className="hp-img"
                  src={`${imagesPath}/difficulty/hard.jpg`}
                  alt={`${imagesPath}/difficulty/hard.jpg`}
                />
                <h3 className="hp-h3">Hard</h3>
              </div>
            </LinkContainer>
          </div>
          <h2
            className="hp-h2"
            onClick={resetCategory}
          >
            <GoChevronLeft className="hp-icon"/>
            Select Category
          </h2>
        </>
      }
    </div>
  )
}

export default HomePage
