function importAll(r) {
    return r.keys().map(r)
}

const imagesFilename = {
    "brand_logo": importAll(require.context('../../public/assets/images/brand_logo', false, /\.(png|jpe?g|webp)$/)),
    "anime": importAll(require.context('../../public/assets/images/anime', false, /\.(png|jpe?g|webp)$/)),
    "video_game": importAll(require.context('../../public/assets/images/video_game', false, /\.(png|jpe?g|webp)$/))
}

export default imagesFilename
