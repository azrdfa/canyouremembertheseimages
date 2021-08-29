import {
    defaultAnswer,
    animeAnswer,
    kpopAnswer
} from "../constants"

const chooseAnswer = (category, difficulty) => {
    let currDifficulty = null
    if (category === "default") {
        currDifficulty = defaultAnswer
    } else if (category === "anime") {
        currDifficulty = animeAnswer
    } else {
        currDifficulty = kpopAnswer
    }
    if (difficulty === "easy") {
        return currDifficulty.easy
    } else if (difficulty === "medium") {
        return currDifficulty.medium
    } else {
        return currDifficulty.hard
    }
}

export default chooseAnswer
