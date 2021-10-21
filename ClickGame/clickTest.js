	
let ino = document.getElementsByClassName("text")[0];
ino.addEventListener("click",clk)
console.log(ino)
let bool=true;
let count = 0 ;
let arrLead=[];
let arrPerson=[];
function timer(){
	console.log("go")
	setTimeout( function(){  
		bool=false;
		let result =  document.getElementsByClassName("result")[0];
		let p = document.createElement("P")
		p.textContent = "congradulation you clik "+document.getElementsByClassName("text")[0].textContent+" times that mean that your CPS is: "+ cpsResult();
		result.appendChild(p)
		resetLead();
	}, 10000)
}
function clk(){
	count++;
	if(count==1){
		timer();
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
	p.textContent= arrPerson[co]+" is in the first place with "+max+" CPS"
}

