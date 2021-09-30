import { useState, useEffect } from "react"
import { cacheImages } from "../../utils"

const CobaPage = () => {
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
    }, [])
    if (loading) {
        return <h1>Loading</h1>
    }
    return (
        <div>
            Cached Images
        </div>
    )
}

export default CobaPage
