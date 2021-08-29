const determineResultURL = (answerArr) => {
    let rightAnswer = 0
    const answerArrLen = answerArr.length
    for (let i = 0; i < answerArrLen; i++) {
        if (answerArr[i] === true) {
            rightAnswer += 1
        }
    }
    const resultURL = "/result/" + rightAnswer.toString() + "/" + answerArrLen.toString()
    return resultURL
}

export default determineResultURL
