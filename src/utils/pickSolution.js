import {
    abstractArtSolution,
    animeSolution,
    videoGameSolution
} from "../constants"

const pickSolution = (category, difficulty) => {
    let currCategory = null
    switch (category) {
        case "abstract_art":
            currCategory = abstractArtSolution
            break
        case "anime":
            currCategory = animeSolution
            break
        case "video_game":
            currCategory = videoGameSolution
            break
        default:
            break
    }
    switch (difficulty) {
        case "easy":
            return currCategory.easy
        case "medium":
            return currCategory.medium
        case "hard":
            return currCategory.hard
        default:
            break
    }
}

export default pickSolution
