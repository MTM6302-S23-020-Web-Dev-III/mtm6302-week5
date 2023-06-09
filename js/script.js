// creating an array using [] and comma separated list of values
// index of an array starts with 0
const myColors = ["red", "green", "blue", "white", "black", "tomato"]

// access the element with id and save in a variable
const messageList = document.getElementById("colorMessages")

messageList.children[0].innerHTML += myColors[3]

myColors[4] = "cyan"

messageList.children[1].innerHTML += myColors[4]
// messageList.children[1].style.background = myColors[4]

myColors.push("darksalmon")

messageList.children[2].innerHTML += myColors

myColors.pop()
messageList.children[3].innerHTML += myColors

myColors.shift()
messageList.children[4].innerHTML += myColors

myColors.unshift("hotpink")
messageList.children[5].innerHTML += myColors

myColors.splice(2, 0, "royalblue")
messageList.children[6].innerHTML += myColors

