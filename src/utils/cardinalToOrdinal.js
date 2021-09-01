const cardinalToOrdinal = (param) => {
   const paramStr = param.toString()
   const lastChar = paramStr.charAt(paramStr.length - 1)
   if (lastChar === "1") {
      return paramStr + "st"
   } else if (lastChar === "2") {
      return paramStr + "nd"
   } else if (lastChar === "3") {
      return paramStr + "rd"
   }
   return paramStr + "th"
}

export default cardinalToOrdinal
