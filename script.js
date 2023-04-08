const addBtn = document.querySelector("#addBtn");
const inputName = document.querySelector("#inputName");
const list = document.querySelector("#list");

addBtn.addEventListener("click", function () {
  addTask();
  taskInput.value = "";
});

doneTask();
deleteTasl();

function addBtn() {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = taskInput.value;
  list.append(newItem);

  const itemBtns = document.createElement("div");
  newItem.append(itemBtns);
  itemBtns.className = "item__btns";

  const doneBtn = document.createElement("i");
  doneBtn.className = "fa-regular fa-square-check";
  itemBtns.append(doneBtn);

  function doneTask() {
    list.addEventListener("click", function (event) {
      let target = event.target;
      if (target.classList.contains(fa - square - check)) {
        target.closest("li").classList.toggle("done");
        localStorage.setItem("hrmILS", list.innerHTML);
      }
    });
  }

  function doneTask() {
    list.addEventListener("click", function (event) {
      let target = event.target;

      if (target.classList.contains("fa-square-check")) {
        target.closest("li").classList.toggle("done");
        localStorage.setItem("htmlILS", list.innerHTML);
      }
    });
  }
}

function deleteTasl() {
  list.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("fa-trash-can")) {
      target.closest("li").remove();
    }
  });
}
