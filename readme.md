# how to use?

`npm i theword --save`

```js
  import theword from 'theword'
  pageElement.onclick= e => {
    const {word, rect} = theword(e)
    console.log(word) // the click's word
    console.log(rect) // {left,top,height,width}
  }
```