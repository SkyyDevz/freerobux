opt1 = document.getElementById("opt1");
opt2 = document.getElementById("opt2");
opt3 = document.getElementById("opt3");
opt4 = document.getElementById("opt4");

function clearOthers(){
  opt1.classList.remove("selected");
  opt2.classList.remove("selected");
  opt3.classList.remove("selected");
  opt4.classList.remove("selected");
}

opt1.onclick = function(){
  clearOthers();
  opt1.classList.add("selected");
}
opt2.onclick = function(){
  clearOthers();
  opt2.classList.add("selected");
}
opt3.onclick = function(){
  clearOthers();
  opt3.classList.add("selected");
}
opt4.onclick = function(){
  clearOthers();
  opt4.classList.add("selected");
}
opt1.classList.add("selected");

function generate(){
  window.location.href = `https://youtu.be/w_uo3FyGN3k?si=EIM9qeXGH32ytNBe&t=7s`;
}