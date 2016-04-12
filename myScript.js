


//alert("Have a nice day");



var piclist = new Array(6);
var locationlist = new Array(6);
var captionlist = new Array(6);

var fButtonListener;
var bButtonListener;

var whichPic = 0;





window.onload = function() {

	

	piclist[0] = "images/Mai1.jpg";
	piclist[1] = "images/Mai2.jpg";
	piclist[2] = "images/Mai3.jpg";
	piclist[3] = "images/Mai4.jpg";
	piclist[4] = "images/Mai5.jpg";
	piclist[5] = "images/Mai6.jpg";
	




	locationlist[0] = "Location: Petco, Acworth,GA";
	locationlist[1] = "Location: Dallas,GA";
	locationlist[2] = "Location: Dallas,GA";
	locationlist[3] = "Location: Dallas,GA";
	locationlist[4] = "Location: Dallas,GA";
	locationlist[5] = "Location: Dallas,GA";


	captionlist[0] = "Mom taking Mai to her first check up";
	captionlist[1] = "Mai taking a nap";
	captionlist[2] = "Mai post nap";
	captionlist[3] = "Mai posing for the picture";
	captionlist[4] = "Mai guarding the fridge";
	captionlist[5] = "Mai chilling on the couch";

	whichPic = 0;



	document.getElementById("cap").innerHTML = captionlist[whichPic];
	document.getElementById("loc").innerHTML = locationlist[whichPic];
	document.getElementById("ImgBox").src = piclist[whichPic];


	fButtonListener = document.getElementById("forwardButton");
	bButtonListener = document.getElementById("backButton");




	fButtonListener.addEventListener('click', function(event) {
			
			
			++whichPic;
			if (whichPic >= piclist.length ){
				whichPic = 0;
			}
			document.getElementById("cap").innerHTML = captionlist[whichPic];
			document.getElementById("loc").innerHTML = locationlist[whichPic];
			document.getElementById("ImgBox").src = piclist[whichPic];
 
	});



	bButtonListener.addEventListener('click', function(event) {
			
			whichPic = whichPic - 1;
			if(whichPic < 0){
				whichPic = piclist.length-1;
			}
		document.getElementById("cap").innerHTML = captionlist[whichPic];
		document.getElementById("loc").innerHTML = locationlist[whichPic];
		document.getElementById("ImgBox").src = piclist[whichPic];
	});


};


