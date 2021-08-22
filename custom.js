/* Completed Missions */
function completedMission() {
  let ulDOM = document.querySelector("#list");
  ulDOM.addEventListener(
    "click",
    function (item) {
      if (item.target.tagName === "LI") {
        item.target.classList.toggle("checked");
      }
    },
    false
  );
}
completedMission();
/* Completed Missions */

/* Delete Mission*/
function deleteMission() {
  let closeButton = document.getElementsByClassName("close");
  for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", function () {
      let li = this.parentElement;
      li.style.display = "none";
    });
  }
}
deleteMission();
/* Delete Mission */

/* Add New Mission */
function newElement() {
  let inputDOM = document.querySelector("#task");
  let inputValue = inputDOM.value;
  let ulDOM = document.querySelector("#list");

  if (inputValue.replace(/^\s+|\s+$/g, "").length == 0 || inputValue === "") {
    let errorToast = document.getElementById("errorToast");
    let bsAlert = new bootstrap.Toast(errorToast);
    bsAlert.show();
  } else {
    let successToast = document.getElementById("successToast");
    let bsAlert1 = new bootstrap.Toast(successToast);
    bsAlert1.show();

    let liDOM = document.createElement("li");
    let liDOMText = document.createTextNode(inputValue);
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liDOM.appendChild(span);
    liDOM.appendChild(liDOMText);
    ulDOM.appendChild(liDOM);

    let toDos = localStorage.getItem("missions")
      ? JSON.parse(localStorage.getItem("missions"))
      : [];
    toDos.push(inputValue);
    localStorage.setItem("missions", JSON.stringify(toDos));
  }
  deleteMission();
  inputDOM.value = "";
}
/* Add New Mission */
