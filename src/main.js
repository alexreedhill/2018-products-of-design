var button = document.getElementsByTagName('button')[0]

button.onclick = function() {
  var list = document.getElementsByClassName('numbers-list')[0]
  var count = list.children.length

  var newListItem = document.createElement('li')
  var newNumber = document.createTextNode(count + 1)

  //newListItem.classList.add('animated', 'fadeIn')

  newListItem.appendChild(newNumber)
  list.appendChild(newListItem)
}
