const calculateResult = (answerArr) => {
    let rightAnswer = 0
    const answerArrLen = answerArr.length
    for (let i = 0; i < answerArrLen; i++) {
        if (answerArr[i] === true) {
            rightAnswer += 1
        }
    }
    return [rightAnswer, answerArrLen]
}

const restyleLabel = (string) => {
    const string_word = string.split("_")
    for (let i = 0; i < string_word.length; i++) {
        string_word[i] = string_word[i].charAt(0).toUpperCase() + string_word[i].slice(1)
    }
    return string_word.join(" ")
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const cacheImages = async (imageSrcArr, setLoading) => {
    const promises = imageSrcArr.map((imageSrc) => {
        return new Promise(function (resolve, reject) {
            const img = new Image()
            img.src = imageSrc
            img.onload = resolve()
            img.onerror = reject()
        })
    })
    await Promise.all(promises)
    setTimeout(() => {
        setLoading(false)
    }, 1500)
}

export {
    calculateResult,
    restyleLabel,
    shuffleArray,
    cacheImages
}