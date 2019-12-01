

var count;
let color;


function showme(count){
	
	document.getElementById('box').innerHTML=count;
	document.getElementById('colozz').innerHTML=count;
	color=count;

}
//increment and decrement
var value = 0;

function plus() {
	value++;
	if(value<10){
	document.getElementById("btwn").innerHTML = ""+value;
   }else{
    document.getElementById("btwn").innerHTML = value;
	}
}

function minus(){
   if(value!=0){
	value--;
	document.getElementById("btwn").innerHTML=value;
  }
}
var c=document.getElementById('box');

document.getElementById("AddToCart").addEventListener('click',function(){

	if(c.innerHTML.length>0){
		document.getElementById("colozz").innerHTML=color;
		document.querySelector('.bg-modal').style.display='flex';
     }
});

document.querySelector('.Cancel').addEventListener('click',function(){
	document.querySelector('.bg-modal').style.display='none';
});

document.querySelector('.agree').addEventListener('click',function(){
	document.getElementById('counter').innerHTML=value;
	if(value!=0){
		document.getElementById('AddToCart').innerHTML='Checkout Now';
	}
   else{
	   document.getElementById('AddToCart').innerHTML='Add To Cart';
		}


	for(var i=0;i<value;i++){
		
		if(value!=0){
			var x=document.createElement('button');
			var y=document.createTextNode('');
		x.appendChild(y);
		x.setAttribute('class','dot');
		x.setAttribute('style', "background-color: " + color+";border:none;") ;
		
		document.getElementById('empty').appendChild(x);
	}
		else{

		}
		
	}
	document.querySelector('.bg-modal').style.display='none';
});
