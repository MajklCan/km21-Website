var url_string = window.location.href
var url = new URL(url_string);
var hash = url.searchParams.get("hash");
var index;

fetch('https://nove.jidlopodnos.cz/api/campaign/'+hash)
  		.then(response => response.json())
  		.then(data => {
			console.log(data)
			if(data.status=="ok"){
				document.getElementsByClassName('loading')[0].classList.add('d-none');
				document.getElementsByClassName('mainbox')[0].classList.remove('d-none');
				document.getElementsByClassName('heading')[0].classList.remove('d-none');
				document.getElementsByClassName('code')[0].innerHTML = "Slevový kód: "+data.code+"<br> <a href='https://www.jidlopodnos.cz/cerpani-kreditu/' target='_blank'>Jak čerpat kredity?</a>";
				document.getElementsByClassName('result-string')[0].innerHTML =data.reward + " kreditů";
				index = data.index;
			}else{
				document.getElementsByClassName('loading')[0].classList.add('d-none');
				document.getElementsByClassName('error')[0].classList.remove('d-none');
			}
		}).catch(e=>{
			console.log("Chyba")
		});



function spin(){

	fetch('https://nove.jidlopodnos.cz/api/campaign/'+hash,{
		method:"DELETE"
	})

	var min = -22; 
	var max = 22; 
		
	var i = index;
	var deg =2160+(45*i)+Math.random() * (max - min) + min;

	let box = document.getElementById('box')
	box.style.transform = "rotate("+deg+"deg)";
	box.style.webkitTransform = "rotate("+deg+"deg)";
	box.style.MozTransform ="rotate("+deg+"deg)";
	box.style.msTransform = "rotate("+deg+"deg)";
	box.style.OTransform = "rotate("+deg+"deg)";
	box.style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
      var element2 = document.getElementsByClassName('alert-result')[0];
	element2.classList.remove('d-none');
	}, 5000); 
  

}
