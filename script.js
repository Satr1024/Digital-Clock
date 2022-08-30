//querySelector Shortcut
function _(selector)
{	
	return document.querySelector(selector);
}

//when page fully loaded
window.onload=()=>{

//selecting tags
let hours= _(".hours h1");
let minutes= _(".minutes h1");
let seconds= _(".seconds h1");
let am_pm= _(".am_pm h1");

/* 12-hours format calculation
   22 > (22-2)%10)+10 <=24
   12 > (13-2)%10) < 22 
*/

//updating data
function update()
{

	let today=new Date();

	let h=today.getHours();
	let m=today.getMinutes();
	let s=today.getSeconds();

	// AM-PM 
	(h>=12) ? am_pm.innerText="PM" : am_pm.innerText="AM";
	

	if(h>12 && h<22)
	{
		h=((h-2)%10);
	}
	else if(h>=22 && h<=24)
	{
		h=(((h-2)%10)+10);
	}

	(h<10) ? hours.innerText="0"+h : hours.innerText=h;

	(m<10) ? minutes.innerText="0"+m : minutes.innerText=m;

	(s<10) ? seconds.innerText="0"+s : seconds.innerText=s;

	
}

//calling update function after every 1sec 
setInterval(update,1000);

}