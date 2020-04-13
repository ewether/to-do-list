// grab user input from html
const userInput = document.querySelector('.user-input');
// item list
const itemList = document.querySelector('.item-list');
// list item
const listItem = document.querySelector('.item-list li');
// submit button
const submitBtn = document.querySelector('.submit-btn');


// function to create new list item from user input
// when user submits, their input creates a new li
submitBtn.addEventListener('click', function() {
// create brand new li node
  const newLi = document.createElement('LI');
// user's input is now stored in liContent to be used in a second
// createTextNode creates text out of userInput.value (what user entered)
  const liContent = document.createTextNode(userInput.value);
// the user's input that is stored in liContent is being appended to the new li node
// so, the newLi is created from the value of the user's input
  newLi.appendChild(liContent);
// append the new li node (containing the user's input) to the item-list
  itemList.appendChild(newLi);
// clear input box after new list item is added
// make userInput.value blank
  userInput.value='';
});

// add delete button to user list items

// add edit button to user list items
