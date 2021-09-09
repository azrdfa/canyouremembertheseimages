function importAll(r) {
    return r.keys().map(r)
}

const imagesFilename = {
    "brand_logo": {
        "right": importAll(require.context('../../public/assets/images/brand_logo/right', false, /\.(png|jpe?g|webp)$/)),
        "wrong": importAll(require.context('../../public/assets/images/brand_logo/wrong', false, /\.(png|jpe?g|webp)$/))
    },
    "anime": {
        "right": importAll(require.context('../../public/assets/images/anime/right', false, /\.(png|jpe?g|webp)$/)),
        "wrong": importAll(require.context('../../public/assets/images/anime/wrong', false, /\.(png|jpe?g|webp)$/))
    },
    "video_game": {
        "right": importAll(require.context('../../public/assets/images/video_game/right', false, /\.(png|jpe?g|webp)$/)),
        "wrong": importAll(require.context('../../public/assets/images/video_game/wrong', false, /\.(png|jpe?g|webp)$/))
    }
}

export default imagesFilename
