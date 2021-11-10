import { useState, useEffect } from "react"
import { GoChevronLeft } from "react-icons/go"
import { longText } from "../../constants"
import { CatdifCard, Loading } from "../../components"
import "./HomePage.css"
import { cacheImages } from "../../utils"
import { LinkContainer } from "react-router-bootstrap"

const HomePage = () => {
  const imagesPath = process.env.PUBLIC_URL + `/assets/images`
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const catdifSrcArr = [
      `${imagesPath}/category/brand_logo.png`,
      `${imagesPath}/category/anime.png`,
      `${imagesPath}/category/video_game.png`,
      `${imagesPath}/difficulty/easy.png`,
      `${imagesPath}/difficulty/medium.png`,
      `${imagesPath}/difficulty/hard.png`
    ]
    cacheImages(catdifSrcArr, setLoading)
  }, [imagesPath])
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
  const categoryArr = [
    { "label": "brand_logo", "src": `${imagesPath}/category/brand_logo.png`, "handleClick": () => setCategory("brand_logo") },
    { "label": "anime", "src": `${imagesPath}/category/anime.png`, "handleClick": () => setCategory("anime") },
    { "label": "video_game", "src": `${imagesPath}/category/video_game.png`, "handleClick": () => setCategory("video_game") }
  ]
  const difficultyArr = [
    { "label": "easy", "src": `${imagesPath}/difficulty/easy.png`, "url": `test/${initBatch.category}/easy` },
    { "label": "medium", "src": `${imagesPath}/difficulty/medium.png`, "url": `test/${initBatch.category}/medium` },
    { "label": "hard", "src": `${imagesPath}/difficulty/hard.png`, "url": `test/${initBatch.category}/hard` }
  ]
  if (loading) {
    return <Loading />
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
            {categoryArr.map(cat_elem => {
              return <CatdifCard
                key={cat_elem.label}
                label={cat_elem.label}
                src={cat_elem.src}
                handleClick={cat_elem.handleClick}
              />
            })}
          </div>
        </>
      }
      {
        initBatch.showCategory === false &&
        <>
          <h1 className="hp-h1-sc">Select Difficulty</h1>
          <div className="hp-flex-container">
            {difficultyArr.map(dif_elem => {
              return <LinkContainer key={dif_elem.label} to={dif_elem.url}>
                <div>
                  <CatdifCard
                    label={dif_elem.label}
                    src={dif_elem.src}
                  />
                </div>
              </LinkContainer>
            })}
          </div>
          <h2
            className="hp-h2"
            onClick={resetCategory}
          >
            <GoChevronLeft className="hp-icon" />
            Select Category
          </h2>
        </>
      }
    </div>
  )
}

export default HomePage
