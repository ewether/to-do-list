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
  const li = document.createElement('li');
// user's input is now stored in liContent to be used in a second
// the user's input that is stored in liContent is being appended to the new li node
  li.appendChild(document.createTextNode(userInput.value));
// append the new li node (containing the user's input) to the item-list
  itemList.appendChild(li);
// clear input box after new list item is added
  userInput.value='';
// add delete button to each li
// will be added automatically with each new li entered, so should go inside event listener above
});


const button = document.createElement("button");

button.addEventListener('click', function(){
    button.parentElement.remove()
    return;
};
