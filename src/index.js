export default event => {
  const isWord = str => str && /[a-zA-Z'’]/.test(str)

  const { clientX, clientY } = event

  const range = document.caretRangeFromPoint(clientX, clientY)

  const data = range.startContainer.data
  const point = range.startOffset

  if (!isWord(data[point])) return {}

  let j = point - 1
  let k = point + 1
  let wordArr = [data[point]]

  while (isWord(data[j])) {
    wordArr.unshift(data[j])
    j--
  }

  range.setStart(range.startContainer, j + 1)

  while (isWord(data[k])) {
    wordArr.push(data[k])
    k++
  }

  range.setEnd(range.endContainer, k)

  const s = window.getSelection()
  s.removeAllRanges()
  // s.addRange(range)

  const word = wordArr.join('')

  const rect = range.getBoundingClientRect()

  return {
    word,
    rect
  }
}
