function importAll(r) {
    return r.keys().map(r)
}

const imagesFilename = {
    "brand_logo": importAll(require.context('../../public/assets/images/brand_logo', false, /\.(png|jpe?g|webp)$/)),
    "anime": importAll(require.context('../../public/assets/images/anime', false, /\.(png|jpe?g|webp)$/)),
    "video_game": importAll(require.context('../../public/assets/images/video_game', false, /\.(png|jpe?g|webp)$/))
}

const longText = {
    "main_description": "This web is a challange for your brain. Here's how it works. There's 2 phase. First, the remembering phase. you'll be shown some images and you have to remember as many image as possible. Second, the question phase. There will be 2 images that appear for each question. One is an image that you have seen and the other that you have not seen. Choose an image you've seen.",
    "about_description": "It's a brain challange. Couple of Images will be shown to you for about 2 seconds each. Remember as many images as possible!. You might be surprised how smart you actually are.",
    "project_owner": "This project is made by Azhar Difa Arnanda"
}

export {
    imagesFilename,
    longText
}
