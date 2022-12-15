document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const form = document.querySelector("#create-task-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

  //2. grab input

    //option 1
    //const inputDesc = document.querySelector("form > input#new-task-description").value;
    //console.log(inputDesc);

    //OPTION 2
    const inputDesc = e.target.description.value;

    //3. Select DOM task obj
    const tasks = document.querySelector("#tasks")

    //4. create new li element for new task
    const newLi = document.createElement("li");

    //5. insert new todo in li elements
    newLi.textContent = inputDesc;

    //6. append li onto task obj
    tasks.appendChild(newLi);

    //add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "no thank you";
    newLi.append(deleteBtn);

    deleteBtn.addEventListener("click", (e) => {
      const removingLi = e.target.parentNode;
      removingLi.remove();
    });

    //7.  reset
    e.target.reset();


});