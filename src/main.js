// grab user input from html
const userInput = document.querySelector('.user-input');
// item list
const itemList = document.querySelector('.item-list');
// list item
const listItem = document.querySelector('.item-list li');
// submit button
const submitBtn = document.querySelector('.submit-btn');


// user input is added to new li
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

  // delete button
  const delBtn = document.createElement('button');
  li.appendChild(delBtn);
  delBtn.innerHTML = 'Delete';

  // when delBtn is clicked, li will be deleted
    delBtn.addEventListener('click', function() {
      // when clicked, add class 'delete'?
      li.classList.add('delete-Btn');
    });

  // edit button
  const editBtn = document.createElement('button');
  li.appendChild(editBtn);
  editBtn.innerHTML = 'Edit';

  // when editBtn is clicked, user can change innerHTML of that li




});

