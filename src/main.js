//setInterval(function() { alert('Buy now!') }, 1000)

var button = document.getElementsByTagName('button')[0]

button.onclick = function() {
  var list = document.getElementById('numbers-list')
  var count = list.children.length

  var newListItem = document.createElement('li')
  var newNumber = document.createTextNode(count + 1)

  newListItem.appendChild(newNumber)
  list.appendChild(newListItem)
}
