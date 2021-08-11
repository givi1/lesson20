let html = document.querySelector('html');
let navbarArray = document.querySelectorAll('a');

for (let i = 0; i < navbarArray.length; i ++) {
	navbarArray[i].addEventListener('click', function (e){
		let sectionId = navbarArray[i].getAttribute('href');
		console.log(sectionId);

		let sectionOffset = document.querySelector(`${sectionId}`).offsetTop;
		console.log(sectionOffset);

		e.preventDefault();
		
		scrollToSection();

		function scrollToSection() {
			html.scrollTop += 5;
		
			if(html.scrollTop < sectionOffset) {
				setTimeout(scrollToSection, 2);
			}
		}
		
	})
};