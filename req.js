// var removefriend = document.querySelector("#remove");
var statuss = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;
btn.addEventListener("click", () => {
  if (check === 0) {
    statuss.innerHTML = "FRIENDS";
    statuss.style.color = "green";
    console.log("pressed");
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "grey";
    check = 1;
  } else {
    statuss.innerHTML = "STRANGER";
    statuss.style.color = "red";
    btn.innerHTML = " Add Friend";
    btn.style.backgroundColor = "blue";
    check = 0;
  }
});
