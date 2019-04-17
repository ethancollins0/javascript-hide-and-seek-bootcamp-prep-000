function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target) {
  return document.querySelector('#nested').querySelector('.target')
}

function deepestChild() {
  var i = 0;
  var test = document.querySelector('#grand-node').childNodes[0]
  while (test === document.querySelector('#grand-node').childNodes[0])
  {
    i++
    test = document.querySelector('#grand-node').childNodes[i]
  }
  return test
}
