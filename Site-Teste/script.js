let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
	
}

let header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 100);
})

document.querySelector(".ri-user-fill").addEventListener("click", function(){
	perfil.classList.toggle('open');
	console.log("teste")
})









	
