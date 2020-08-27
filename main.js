// grab user input from html
const userInput = document.querySelector(".user-input");
// item list
const itemList = document.querySelector(".item-list");
// list item
const listItem = document.querySelector(".item-list li");
// submit button
const submitBtn = document.querySelector(".submit-btn");

// user input is added to new li
submitBtn.addEventListener("click", function () {
  // variable for creating brand new li node
  const li = document.createElement("li");
  li.classList.add("user-li");

  // finds length of userInput
  function liLength() {
    return userInput.value.length;
  }

  // if userInput length is over 0, then this function can be called
  function addLi() {
    if (liLength() > 0) {
      // the user's input that is stored in liContent is being appended to the new li node
      li.appendChild(document.createTextNode(userInput.value));
      // append the new li node (containing the user's input) to the item-list
      itemList.appendChild(li);
      // clear input box after new list item is added
      userInput.value = "";
    }
  }

  // calls addLi function
  addLi();

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // delete button
  const delBtn = document.createElement("button");
  li.appendChild(delBtn);
  delBtn.innerHTML = "X";
  // delBtn.classList.add('del-edit');
  delBtn.setAttribute("id", "delete-btn");

  // when delBtn is clicked, li will be deleted
  delBtn.addEventListener("click", function () {
    // when clicked, add class 'delete'?
    li.classList.add("delete");
  });

  li.addEventListener("click", function () {
    delBtn.classList.toggle("completed");
  });

  // edit button
  // const editBtn = document.createElement('button');
  // li.appendChild(editBtn);
  // editBtn.innerHTML = 'Edit';
  // editBtn.setAttribute('id', 'edit-btn');
  // // editBtn.classList.add('del-edit');

  //   // when editBtn is clicked, user can edit li text
  //   editBtn.addEventListener('click', function() {
  //     // makes content on li editable
  //     li.contentEditable = 'true';
  //     li.setAttribute('contenteditable', 'true');
  //     // makes edit and delete buttons uneditable
  //     editBtn.contentEditable = 'false';
  //     delBtn.contentEditable = 'false';
  //   });
});
