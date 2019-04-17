function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target) {
  return document.querySelector('#nested').querySelector('.target')
}

function deepestChild() {
  var i = 0;
  var test = document.querySelector('#grand-node').querySelectorAll('div')
    return test[test.length-1]
}
