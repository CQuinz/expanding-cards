const panels =document.querySelectorAll(".panel");


// Add an event listener to ech of the .panels

for(let i = 0; i < panels.length; i++){
  panels[i].addEventListener('click', function(){
    for(let i = 0; i< panels.length; i++){
      panels[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}