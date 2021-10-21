let colors = ["white","beige","red","darkred","skyblue","blue","lime","green","yellow","lightgoldenrodyellow","orange","lightsalmon","brown","darkgray","black"]
let cont = document.getElementsByClassName("color")[0]
for(let elem of colors){
	let div = document.createElement("div");
	div.setAttribute("class","cl");
	div.setAttribute("id",elem);
	div.style.backgroundColor = elem;
	div.addEventListener("click",colorSelector)
	cont.appendChild(div);
}
let clr=[];
function colorSelector(){
	let id= event.target.id;
	clr.push(id);
	console.log(clr);
	

}

let gri = document.getElementsByClassName("right")[0];
for(let i = 0 ; i < 800 ; i++){
	let box = document.createElement("div");
	box.setAttribute("class","bx");
	box.addEventListener("mousedown",setColorSelector)
	box.addEventListener("mousemove",glisse)
	box.addEventListener("mouseup",monte)
	gri.appendChild(box);
}
let isDrawing = false;
let arr = [];
function setColorSelector(event){
	let couleur = clr[clr.length-1]
	event.target.style.backgroundColor = couleur;
	arr.push(event.target);
	isDrawing = true;

}
let bbtn = document.getElementsByTagName("button")[0]
bbtn.addEventListener("click",function(event){
	for(let element of arr){
		element.style.backgroundColor = "white";
	}
})
function glisse(event){
	if( isDrawing===true){
		setColorSelector(event)
	}

}
function monte(event){
	isDrawing=false;

}