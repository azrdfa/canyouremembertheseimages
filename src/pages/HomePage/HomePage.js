import { useState } from "react"
import { useHistory } from "react-router"
import { GoChevronLeft } from "react-icons/go"
import { longText } from "../../constants"
import { SmallCard } from "../../components"
import "./HomePage.css"

const imagesPath = process.env.PUBLIC_URL + `/assets/images`
const HomePage = () => {
  const [initBatch, setInitBatch] = useState({
    showCategory: true,
    category: null,
  })
  const history = useHistory()
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
    { "label": "brand_logo", "src": `${imagesPath}/category/brand_logo.jpg`, "handleClick": () => setCategory("brand_logo") },
    { "label": "anime", "src": `${imagesPath}/category/anime.jpg`, "handleClick": () => setCategory("anime") },
    { "label": "video_game", "src": `${imagesPath}/category/video_game.jpg`, "handleClick": () => setCategory("video_game") }
  ]
  const difficultyArr = [
    { "label": "easy", "src": `${imagesPath}/difficulty/easy.jpg`, "handleClick": () => history.push(`test/${initBatch.category}/easy`) },
    { "label": "medium", "src": `${imagesPath}/difficulty/medium.jpg`, "handleClick": () => history.push(`test/${initBatch.category}/medium`) },
    { "label": "hard", "src": `${imagesPath}/difficulty/hard.jpg`, "handleClick": () => history.push(`test/${initBatch.category}/hard`) }
  ]
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
              return <SmallCard
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
              return <SmallCard
                key={dif_elem.label}
                label={dif_elem.label}
                src={dif_elem.src}
                handleClick={dif_elem.handleClick}
              />
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
