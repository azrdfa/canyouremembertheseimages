const restyleLabel = (string) => {
    const string_word = string.split("_")
    for (let i=0; i < string_word.length; i++) {
        string_word[i] = string_word[i].charAt(0).toUpperCase() + string_word[i].slice(1)
    }
    return string_word.join(" ")
}

export default restyleLabel
