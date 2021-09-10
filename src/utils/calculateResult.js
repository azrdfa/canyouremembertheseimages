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

export default calculateResult
