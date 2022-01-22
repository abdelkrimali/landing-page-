// chek if there is color option on local storage
let maincolors = localStorage.getItem('color_option');
if (maincolors != null) {
	document.documentElement.style.setProperty('--main-color',maincolors);
	document.querySelectorAll('.colors-list li').forEach(element =>{
		element.classList.remove('active');
		if(element.dataset.color===maincolors){
			element.classList.add('active');
		}
	});
}
console.log(maincolors);

// Random Background option 
let backgroundoption = true;
//Variable to control the interval

let backgroundInterval;

// Toggle Spin Class On Icon

document.querySelector(".toggle-setting .fa-gear").onclick=function(){

	this.classList.toggle("fa-spin");
	document.querySelector(".setting-box").classList.toggle("open");
};


//Select Landing page element

let landingpage=document.querySelector('.landing-page');

// Get Array of images

let imagesarray=["back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg", "back5.jpg", "back6.jpg", "back7.jpg", "back8.jpg"];




// Function To Randomize images

function randomize()
{

	if(backgroundoption === true)
	{

	backgroundInterval = setInterval(()=>{
	let randomnumber=Math.floor(Math.random() * imagesarray.length);
	//console.log(randomnumber);
	landingpage.style.backgroundImage='url("images/'+imagesarray[randomnumber]+'")';

	},4000);


	}
}
randomize();

//Change background image url
landingpage.style.backgroundImage='url("images/back7.jpg")';

//Get random number



// Switch Colors
const colorsli=document.querySelectorAll(".colors-list li");
colorsli.forEach(li =>{

	li.addEventListener("click",(e) =>{
		//console.log(e.target.dataset.color);
		// Set color on root
		document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
		// Set Color on local Storage
		localStorage.setItem('color_option',e.target.dataset.color);
		// Remove active class from all children
		e.target.parentElement.querySelectorAll('.active').forEach(element =>{
			element.classList.remove('active');
		});
		// Add active class on Self
		e.target.classList.add('active');

	});

});

//Switch Random Background Option

const randombackground=document.querySelectorAll('.random-background span');
//loop on all spans
randombackground.forEach(span =>{
	span.addEventListener('click',(e)=>{
		e.target.parentElement.querySelectorAll('.active').forEach(element=>{
			element.classList.remove('active');
		});
		e.target.classList.add('active');
		

	});

});


// Animate Our Skills 

let ourskill=document.querySelector('.skills');

window.onscroll=function(){
	//Skills Offset top
	let skillsoffsettop=ourskill.offsetTop;

	//Skills Outer Height
	let skillouterheight=ourskill.offsetHeight;
	
	//Window Height
	let windowheight=this.innerHeight;	

	// Window ScrollTop
	let windowscrolltop=this.pageYOffset;

	if(windowscrolltop > skillsoffsettop + skillouterheight - windowheight)
	{
		console.log('reached');
		let allskills=document.querySelectorAll(".skill-box .skill-progres span");
		allskills.forEach(element =>{
			element.style.width=element.dataset.progres;
			console.log(element.style.width);


		});

	}
}

// Create PopUp with the image

let ourgallery = document.querySelectorAll(".gallery .img-box img");
ourgallery.forEach(image =>{
	image.addEventListener('click',(e)=>{

		//Create Overlay Elemement
		let overlay=document.createElement('div');

		//Add Class to Overlay
		overlay.className='popup-overlay';

		//Append Overlay to the body
		document.body.appendChild(overlay);

		//Create the popup
		let popupbox=document.createElement('div');
		popupbox.className='popup-box';

		if(image.alt != null)
		{
			// Create Heading for image title
			let imgheading=document.createElement("h3");

			// Create text for heading
			let imgtext=document.createTextNode(image.alt);

			//add text to the heading
			imgheading.appendChild(imgtext);

			// Add the heading to the popup box
			popupbox.appendChild(imgheading);
		}


		//Create the image
		let popupimg=document.createElement('img');

		//Set the Image Source
		popupimg.src=image.src;

		//add image to the popupbox
		popupbox.appendChild(popupimg);

		//append popup box to the body;
		document.body.appendChild(popupbox);

		// Create the Close Span
		let closebutton=document.createElement('span');

		//Create the close button text
		let closebuttontext=document.createTextNode("X");

		//add text to close button
		closebutton.appendChild(closebuttontext);

		//add class to close button
		closebutton.className='close-button';

		// add close button to the popup box
		popupbox.appendChild(closebutton);

	});

});

// Close Popup

document.addEventListener("click",(e)=>{
	if(e.target.className === "close-button"){

		//Remove the current popup
		e.target.parentNode.remove();

		//Remove Overlay
		document.querySelector('.popup-overlay').remove();
	}


});

//Select All Bullets

const allbullets=document.querySelectorAll(".nav-bullets .bullet");
allbullets.forEach(bullet=>{
	bullet.addEventListener('click',(e)=>{
		document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior:'smooth'
		})

	});
});

//Select All Bullets

const alllinks=document.querySelectorAll(".links a");
alllinks.forEach(link=>{
	link.addEventListener('click',(e)=>{
		console.log(e.target.dataset.section);
		e.preventDefault();
		document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior:'smooth'
		})

	});
});

//Toggle Menu

let toglebutton=document.querySelector(".menu");
let thelinks=document.querySelector(".links");

toglebutton.onclick =function(){
	this.classList.toggle("menu-active");
	thelinks.classList.toggle("open");
};
