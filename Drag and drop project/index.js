let lists = document.getElementsByClassName("list");
let right_Box = document.getElementById("right");
let left_Box = document.getElementById("left");

for (list of lists) {
  list.addEventListner("dragstart", function (e) {
    let selected = e.target;

    right_Box.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    right_Box.addEventListener("drop", function (e) {
      right_Box.appendChild(selected);
      selected = null;
    });
  });
}
