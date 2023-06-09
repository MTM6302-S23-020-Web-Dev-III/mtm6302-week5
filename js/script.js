// creating an array using [] and comma separated list of values
// index of an array starts with 0
const myColors = ["red", "green", "blue", "white", "black", "tomato"]

// access the element with id and save in a variable
const messageList = document.getElementById("colorMessages")

messageList.children[0].innerHTML += myColors[3]

// modifying value in an array using square bracket notation
myColors[4] = "cyan"

messageList.children[1].innerHTML += myColors[4]
// messageList.children[1].style.background = myColors[4]

// adding a value at the end of the array using push()
myColors.push("darksalmon")

messageList.children[2].innerHTML += myColors

// deleting a value from the end of the array using pop()
myColors.pop()
messageList.children[3].innerHTML += myColors

// deleting a value from the start of the array using shift()
myColors.shift()
messageList.children[4].innerHTML += myColors

// adding a value at the start of the array using unshift()
myColors.unshift("hotpink")
messageList.children[5].innerHTML += myColors

// add a new value at index 2, using splice() start index 2, delete 0, new value "royalblue"
myColors.splice(2, 0, "royalblue")
messageList.children[6].innerHTML += myColors

// sorting array using sort() method, default for all lowercase text is ascending alphabetical 
myColors.sort()
messageList.children[7].innerHTML += myColors

// Concatenating arrays using  concat()
const darkColors = ["darkseagreen", "darkgreen", "darkred"]

const allColors = myColors.concat(darkColors)
// messageList.children[8].innerHTML += allColors
messageList.children[8].innerHTML += allColors.join(" - ")
// console.log(allColors)

// Searching in an array
const searchMessage = document.getElementById("colorResponse")

/* function doYouHaveColor (colorName) {
  let colorIndex = allColors.indexOf(colorName)
  if (colorIndex >= 0) {
    searchMessage.innerHTML = "Yes, we have " + colorName + " color"
  } else {
    searchMessage.innerHTML = `No, we do not have ${colorName} color`
  }
}
 */

function doYouHaveColor (colorName) {
  if (allColors.includes(colorName)) {
    searchMessage.innerHTML = "Yes, we have " + colorName + " color"
  } else {
    searchMessage.innerHTML = `No, we do not have ${colorName} color`
  }
}

const scores = [43, 68, 35, 82]

const scoreMessageList = document.getElementById("scoreMessages").children

/* 
create a new array passingScores out of the scores array by filtering the values based on the function that returns the values that are greater than 50 */
const passingScores = scores.filter(score => score > 50)
scoreMessageList[0].innerHTML += passingScores

// map each value of the array based on a function using map() 
const doubleScores = scores.map(score => score * 2)
scoreMessageList[1].innerHTML += doubleScores

const totalDoubleScore = doubleScores.reduce((accumulator, score) => accumulator + score)
scoreMessageList[2].innerHTML += totalDoubleScore

for (let i = 0; i < 3; i++) {
  console.log("Ta")
  for (let j = 0; j < 2; j++) {
    console.log("Ra")
  }
}

const coloredBoxSection = document.getElementById("coloredBoxes")

for (let color of allColors) {
  coloredBoxSection.innerHTML += `<div class="box" style="background-color: ${color}"></div>`
}