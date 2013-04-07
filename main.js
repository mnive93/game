var flag;
var w3c=(document.getElementById)?true:false;
var ns4=(document.layers)?true:false;
var ie4=(document.all && !w3c)?true:false;
var ie5=(document.all && w3c)?true:false;
var id;
var dtag,ctag,cimg,count,count1,seconds;
var cntr,doc,sh,tim;
var images=new Array();
for(a=2;a<5;a++){
images[a]=new Image(); 
images[a].src="pic"+a+".gif";
}
var targets=[2,2,2,2,2,2,2,2,2,2,2,2];
function load()
{
doc = document.images;
flag=1;
count=0;
count1=0;
seconds=30;
turn=0;
if(ns4)document.captureEvents(Event.KEYPRESS);
document.onkeypress=showkey;
cntr=7;
sh=300;
}
function showkey(keypress)
{
wk=(ie4||ie5)?event.keyCode:keypress.which;
switch(wk)
{
case 32 : shoot();
break;
}

}
function shoot()
{
var  d;

d = document.getElementById("arrow");
//var d2 = new Audio('shoot.wav');
//d2.play();
if(cntr>0)
{

sh=sh-50;

d.style.top = sh + "px";
d.style.background='url(pic0.gif)';
d.style.visibility="visible";
cntr--;
//alert(cntr);
setTimeout(shoot,40);
}
else
{
var a2 = new Audio("shoot.wav");
a2.play();
var d1= document.getElementById("cr_60");
switch(targets[6])
{
case 2: break;
case 3: 
d1.src="pic2.gif";
if(flag==2)
{
count-=1;
var d2 = document.getElementById("sco");
d2.innerHTML=count;
}
else
{
count1+=1;
var d2 = document.getElementById("sco1");
d2.innerHTML=count1;

}
break;
case 4 : 
d1.src="pic2.gif";
if(flag==2)
{
count+=1;
var d2 = document.getElementById("sco");
d2.innerHTML=count;
}
else
{
count1-=1;
var d2 = document.getElementById("sco1");
d2.innerHTML=count1;

}
break;
case 5: 
var a = new Audio("fart.wav");
a.play();
d1.src="pic2.gif";
if( flag==2)
{
if(count>0)
{
count-=1;
var d2 = document.getElementById("sco");
d2.innerHTML=count;
}
}
else
{
if(count>0)
{
count1-=1;
var d2 = document.getElementById("sco1");
d2.innerHTML=count1;

}
}
break;
}
targets[6]=2;

d.style.visibility='hidden';
setTimeout(hide,400);
}
}


function hide()
{
var  d;

d = document.getElementById("arrow");

cntr=7;
sh=300;

d.style.top='300px';

}
function startscroll(){

var d;
for(q=12;q>=1;q--)
{
targets[q]=targets[q-1];
var name = 'cr_'+q+0;
 d = document.getElementById(name);
var name2="pic"+targets[q-1]+".gif";
d.src=name2;

}
targets[0]=Math.floor(Math.random()*3+3);

document.getElementById("cr_00").src="pic"+targets[0]+".gif";

}

		function show() {
	var a;

if(flag!=2)
{

		var cat=document.getElementById("farm-09_");
		cat.style.background='url(cat2.png)';
		cat.style.left='410px';
	
	did=	setInterval('startscroll()',400);
tim=setInterval("timer()",1000);		
		flag=2;

		}
		
		

		}
		function timer()
		{
	if(seconds!=0)	
		{
		seconds-=1;
		d3 = document.getElementById("time");
		if(seconds < 10)
		{
		d3.style.color="red";
		}
		else
		{
		d3.style.color="yellow";
		
		}
		d3.innerHTML=seconds;
		
		}
		else
		{
		seconds=30;
clearInterval(tim);

		setTimeout("return_back()",1000);		
		}
		}
	function return_back()
	{
	if(turn!=2)
	{
	if(flag==2)
	{
clearInterval(did);
	var cat=document.getElementById("farm-09_");
	cat.style.background='url(cat1.png)';
	cat.style.left='-100px';
turn+=1;
	}	
	else
	{
	clearInterval(did);
			 
			 var mouse=document.getElementById("farm-12_");
	mouse.style.background="url(mou2.png)";
	mouse.style.left='1150px';
turn+=1;
	}
}
else
{
if(count>count1)
{

}
}
	}
function show2()
	{
	if(flag!=1)
	{
			
var mou= document.getElementById("farm-12_");
		mou.style.background="url(mou1.png)";
		mou.style.left='550px';
	
	did=	setInterval('startscroll()',400);
		tim=setInterval("timer()",1000);
		
flag=1;

			 }
	}

