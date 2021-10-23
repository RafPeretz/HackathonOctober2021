	
let ino = document.getElementsByClassName("text")[0];
ino.addEventListener("click",clk)
console.log(ino)
let bool=true;
let count = 0 ;
let arrLead=[];
let arrPerson=[];
getName();
let cnt=0
let frame;
function timer(){
	console.log("go")
	setTimeout( function(){  
		bool=false;
		let result =  document.getElementsByClassName("result")[0];
		let p = document.createElement("P")
		p.setAttribute("class","leTextEnBas")
		p.textContent = "congradulation you clik "+document.getElementsByClassName("text")[0].textContent+" times that mean that your CPS is: "+ cpsResult();
		result.appendChild(p)
		resetLead();
		clearInterval(frame);
		countdownEl.innerHTML=`00 : 0${time}`
		time--;
	}, 10000)
}
function clk(){
	count++;
	if(count==1){
		timer();
		frame = setInterval(updateCounter,1000);
	}
	if(bool == true ){
		document.getElementsByClassName("text")[0].textContent++;
	}
}
function cpsResult(){
	let num = (document.getElementsByClassName("text")[0].textContent)/(10);
	arrLead.push(num)
	return num;
}
function getName(){
	let btn = document.getElementsByClassName("btn")[0];
	btn.addEventListener("click",addName);
}
function addName(){
	let ino = document.getElementsByTagName("input")[0].value;
	console.log(ino)
	arrPerson.push(ino);
}
function resetLead(){
	let max = arrLead[0]
	let co = 0;
	for(let i = 0 ; i < arrLead.length; i++){
		if(max < arrLead[i] ){
			max =arrLead[i] 
			co=i;
		}
	}
	let p = document.getElementsByTagName("h5")[0];
	p.textContent= arrPerson[co]+" is in the first place with "+max+" CPS";
}
let para = document.getElementsByClassName("clear")[0];
para.addEventListener("click",clear);
function clear(){
	document.getElementsByClassName("text")[0].textContent =0;
	document.getElementsByClassName("leTextEnBas")[cnt].textContent="";
	count = 0;
	bool=true;
	cnt++;
	time=9;
	countdownEl.innerHTML=`00 : ${time}`;
}
let time = 9;
let countdownEl = document.getElementsByClassName("zimer")[0];


function updateCounter(){
	if(time >= 0&&time<=10 ){
		countdownEl.innerHTML=`00 : ${time}`;
		time--;
	}
}