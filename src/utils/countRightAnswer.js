const countRightAnswer = (answerArr) => {
    let rightAnswer = 0
    const answerArrLen = answerArr.length
    for (let i = 0; i < answerArrLen; i++) {
        if (answerArr[i] === true) {
            rightAnswer += 1
        }
    }
    const result = "/" + rightAnswer.toString() + "/" + answerArrLen.toString()
    return result
}

export default countRightAnswer
