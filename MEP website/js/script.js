let Navbar = document.queryselector(',navbar');
let Fabars= document.queryselector('.fa-bars');
Fabars.onclick = () =>{
	Navbar.classlist.toggle("active")
};

var swiper = new swiper(".home-slide",{
	navigation:{
		nextEl: ".swper-button-next",
		prexEl: ".swiper-button-prev"
	}
});