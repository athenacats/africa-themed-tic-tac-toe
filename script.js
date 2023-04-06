function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

function hide() {
    const firstForm =document.querySelector(".choosePlayers")
    firstForm.style.display = 'none'; 
}