function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target) {
  return document.querySelector('#nested').querySelector('.target')
}

function deepestChild() {
  var test = document.querySelector('#grand-node').querySelectorAll('div')
    return test[test.length-1]
}

function increaseRankBy(n) {
  var ranked = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranked.length; i++) {
    
  }
}
