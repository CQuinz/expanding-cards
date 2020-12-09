
const panels =document.querySelectorAll(".panel");
// ****MY VERSION*****
// // Add an event listener to ech of the .panels
// for(let i = 0; i < panels.length; i++){
//   panels[i].addEventListener('click', function(){
//     for(let i = 0; i< panels.length; i++){
//       panels[i].classList.remove("active");
//     }
//     this.classList.add("active");
//   });
// }

panels.forEach((panel)=>{
  panel.addEventListener('click',()=>{
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses(){
  panels.forEach((panel)=>{
    panel.classList.remove('active');
  });
}