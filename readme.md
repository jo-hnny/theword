# how to use?

`npm i theword --save`

`theword(event, [regexp])`

regexp: test word ,default `/[a-zA-Z'’]/`

```js
  import theword from 'theword'
  pageElement.onclick= e => {
    const {word, rect} = theword(e)
    console.log(word) // the click's word
    console.log(rect) // {left,top,height,width}
  }
```

or:
  ```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .word {
      position: fixed;
      background-color: #50b354;
      color: #fff;
    }
  </style>
</head>

<body>
  <p>hello welcome to theword</p>
  <div class="word"></div>
  <script src="../dist/index.js"></script>
  <script>
    const wordEle = document.querySelector('.word')
    const pEle = document.querySelector('p')
    pEle.onclick = e => {
      const rsp = theword(e)
      if (!rsp) return
      const { word, rect } = rsp
      wordEle.innerText = word
      wordEle.style.left = rect.left + 'px'
      wordEle.style.top = rect.top + 'px'
    }
  </script>
</body>

</html>
  ```