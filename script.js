var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//   CREATING A NEW LIST ITEM
//   TESTING OUT THE CODE
//   console.log(input.value);
//   CHECKING TO SEE IF THE FIELD IS EMPTY

// RE-FACTORING CODE

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  // EMPTYING OUT THE TEXT FIELD
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  //   console.log(event);
  if (inputLength() > 0 && event.code === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

// ENTER BUTTON ON THE KEYBOARD PRESSED
input.addEventListener("keypress", addListAfterKeypress);
