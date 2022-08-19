"use strict";

const JSCCommon = { 
	modalCall() {
		const link = '[data-fancybox="modal"], .link-modal-js';

		Fancybox.bind(link, {
			arrows: false,
			// infobar: false,
			touch: false,
			trapFocus: false,
			placeFocusBack: false,
			infinite: false,
			dragToClose: false,
			type: 'inline',
			autoFocus: false,
			groupAll: false,
			groupAttr: false,
			// showClass: "fancybox-throwOutUp",
			// hideClass: "fancybox-throwOutDown",
			l10n: {
				Escape: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад",
			},
		});
		document.querySelectorAll(".modal-close-js").forEach(el=>{
			el.addEventListener("click", ()=>{
				Fancybox.close();
			})
		})
		Fancybox.bind('[data-fancybox]', {
			placeFocusBack: false,
		});
		const linkModal = document.querySelectorAll(link);
		function addData() {
			linkModal.forEach(element => {
				// element.addEventListener('click', () => {
				// 	let modal = document.querySelector(element.getAttribute("href"));
				// 	const data = element.dataset;

				// 	function setValue(val, elem) {
				// 		if (elem && val) {
				// 			const el = modal.querySelector(elem)
				// 			el.tagName == "INPUT"
				// 				? el.value = val
				// 				: el.innerHTML = val;
				// 			// console.log(modal.querySelector(elem).tagName)
				// 		}
				// 	}
				// 	setValue(data.title, '.ttu');
				// 	setValue(data.text, '.after-headline');
				// 	setValue(data.btn, '.btn');
				// 	setValue(data.order, '.order');
				// })
			})
		}
		if (linkModal) addData();
	},
	// /modalCall
	toggleMenu() {
		document.addEventListener("click", function (event) {
			const toggle = document.querySelectorAll(".toggle-menu-mobile--js");
			const menu = document.querySelector(".menu-mobile--js");
			const toggleEv = event.target.closest(".toggle-menu-mobile--js");
			if (!toggleEv) return;
			toggle.forEach(el => el.classList.toggle("on"));
			menu.classList.toggle("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.toggle("fixed"));
		}, { passive: true });
	},
	closeMenu() {
		const toggle = document.querySelectorAll(".toggle-menu-mobile--js");
		const menu = document.querySelector(".menu-mobile--js");
		if (!menu) return;
		if (menu.classList.contains("active")) {
			toggle.forEach(element => element.classList.remove("on"));
			menu.classList.remove("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.remove("fixed"));
		}

	},
	mobileMenu() { 
		const menu = document.querySelector(".menu-mobile--js");
		if (!menu) return;
		this.toggleMenu();
		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			let link = event.target.closest(".menu-mobile .menu a"); // (1)
			let toggle = event.target.closest('.toggle-menu-mobile--js.on'); // (1)
			if (!container && !toggle) this.closeMenu();
		}, { passive: true });

		window.addEventListener('resize', () => {
			if (window.matchMedia("(min-width: 992px)").matches) this.closeMenu();
		}, { passive: true });
	},

	// tabs  .
	tabscostume(tab) {
		// const tabs = document.querySelectorAll(tab);
		// const indexOf = element => Array.from(element.parentNode.children).indexOf(element);
		// tabs.forEach(element => {
		// 	let tabs = element;
		// 	const tabsCaption = tabs.querySelector(".tabs__caption");
		// 	const tabsBtn = tabsCaption.querySelectorAll(".tabs__btn");
		// 	const tabsWrap = tabs.querySelector(".tabs__wrap");
		// 	const tabsContent = tabsWrap.querySelectorAll(".tabs__content");
		// 	const random = Math.trunc(Math.random() * 1000);
		// 	tabsBtn.forEach((el, index) => {
		// 		const data = `tab-content-${random}-${index}`;
		// 		el.dataset.tabBtn = data;
		// 		const content = tabsContent[index];
		// 		content.dataset.tabContent = data;
		// 		if (!content.dataset.tabContent == data) return;

		// 		const active = content.classList.contains('active') ? 'active' : '';
		// 		// console.log(el.innerHTML);
		// 		content.insertAdjacentHTML("beforebegin", `<div class="tabs__btn-accordion  btn btn-primary  mb-1 ${active}" data-tab-btn="${data}">${el.innerHTML}</div>`)
		// 	})


		// 	tabs.addEventListener('click', function (element) {
		// 		const btn = element.target.closest(`[data-tab-btn]:not(.active)`);
		// 		if (!btn) return;
		// 		const data = btn.dataset.tabBtn;
		// 		const tabsAllBtn = this.querySelectorAll(`[data-tab-btn`);
		// 		const content = this.querySelectorAll(`[data-tab-content]`);
		// 		tabsAllBtn.forEach(element => {
		// 			element.dataset.tabBtn == data
		// 				? element.classList.add('active')
		// 				: element.classList.remove('active')
		// 		});
		// 		content.forEach(element => {
		// 			element.dataset.tabContent == data
		// 				? (element.classList.add('active'), element.previousSibling.classList.add('active'))
		// 				: element.classList.remove('active')
		// 		});
		// 	})
		// })

		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});

	},
	// /tabs

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(element => element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}"));
		Inputmask({"mask":"+9(999)999-99-99", showMaskOnHover: false}).mask(InputTel);
	},
	// /inputMask
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	sendForm() {
		var gets = (function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");
			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}
			return b;
		})();
		// form
		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			const th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data,
			}).done(function (data) {

				Fancybox.close();
				Fancybox.show([{ src: "#modal-thanks", type: "inline" }]);
				// window.location.replace("/thanks.html");
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
					// $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () { });

		});
	},
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
	animateScroll() {
		$(document).on('click', " .menu li a, .scroll-link", function () {
			const elementClick = $(this).attr("href");
			if (!document.querySelector(elementClick)) {
				$(this).attr("href", '/' + elementClick)
			}
			else {
				let destination = $(elementClick).offset().top;
				$('html, body').animate({ scrollTop: destination - 80 }, 0);
				return false;
			}
		});
	},
	getCurrentYear(el) {
		let now = new Date();
		let currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	},
	toggleShow(toggle, drop) {

		let catalogDrop = drop;
		let catalogToggle = toggle;

		$(document).on('click', catalogToggle, function () {
			$(this).toggleClass('active').next().fadeToggle('fast', function () {
				$(this).toggleClass("active")
			});
		})

		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(catalogDrop + ".active"); // (1)
			let link = event.target.closest(catalogToggle); // (1)
			if (!container || !catalogToggle) {
				$(catalogDrop).removeClass('active').fadeOut();
				$(catalogToggle).removeClass('active');
			};
		}, { passive: true });
	},
	makeDDGroup() {
		let parents = document.querySelectorAll('.dd-group-js');
		for (let parent of parents) {
			if (parent) {
				// childHeads, kind of funny))
				let ChildHeads = parent.querySelectorAll('.dd-head-js:not(.disabled)');
				$(ChildHeads).click(function () {
					let clickedHead = this;

					$(ChildHeads).each(function () {
						if (this === clickedHead) {
							//parent element gain toggle class, style head change via parent
							$(this.parentElement).toggleClass('active');
							$(this.parentElement).find('.dd-content-js').slideToggle(function () {
								$(this).toggleClass('active');
							});
						}
						// else {
						// 	$(this.parentElement).removeClass('active');
						// 	$(this.parentElement).find('.dd-content-js').slideUp(function () {
						// 		$(this).removeClass('active');
						// 	});
						// }
					});

				});
			}
		}
	},
};
const $ = jQuery;

function eventHandler() {
	// JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.tabscostume('tabs-inner');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	// JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.makeDDGroup();
	// JSCCommon.toggleShow(".catalog-block__toggle--desctop", '.catalog-block__dropdown');
	// JSCCommon.animateScroll();
	
	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = document.body.dataset.bg;
	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	}


	function setFixedNav() {
		let topNav = document.querySelector('.top-nav  ');
		if (!topNav) return;
		window.scrollY > 0
			? topNav.classList.add('fixed')
			: topNav.classList.remove('fixed');
	}

	function whenResize() {
		setFixedNav();
	}

	window.addEventListener('scroll', () => {
		setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	const swiperbreadcrumb = new Swiper('.breadcrumb-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true,
		
		
	});

	// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


	// modal window
	const swiperMain = new Swiper('.slider-main--js', { 
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	});
	
	const swiperThumb = new Swiper('.slider-thumb--js', { 
		slidesPerView: 'auto',
		loop: true,
	});

	const swiperSert = new Swiper('.slider-sert--js', { 
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			420: {
				slidesPerView: 2,
				spaceBetween: 25
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 33
			}
		},
		navigation: {
			nextEl: '.slider-sert .swiper-button-next',
			prevEl: '.slider-sert .swiper-button-prev',
		},
		pagination: {
			el: '.slider-sert .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	const swiperFeedback = new Swiper('.slider-feedback--js', { 
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 32
			},
		},
		navigation: {
			nextEl: '.slider-feedback .swiper-button-next',
			prevEl: '.slider-feedback .swiper-button-prev',
		},
		pagination: {
			el: '.slider-feedback .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
	
	const swiperMore = new Swiper('.slider-more--js', { 
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 25
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 32
			},
		},
		navigation: {
			nextEl: '.slider-more .swiper-button-next',
			prevEl: '.slider-more .swiper-button-prev',
		},
		pagination: {
			el: '.slider-more .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
	const catSliders = document.querySelectorAll('.slider-catalog--js');
	for (let catSlider of catSliders) {
		const swiperCat = new Swiper('.slider-catalog--js', { 
			slidesPerView: 1,
			spaceBetween: 10,
			navigation: {
				nextEl: catSlider.querySelector('.swiper-button-next'),
				prevEl:  catSlider.querySelector('.swiper-button-prev'),
			},
			pagination: {
				el: catSlider.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
			},
		});
	}

	const swiperProd = new Swiper('.product-item__slider--js', { 
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.product-item__slider .swiper-button-next',
			prevEl: '.product-item__slider .swiper-button-prev',
		},
	});

	const slidersCatalog = document.querySelectorAll('.slider-category--js');
	for (let sliderCatalog of slidersCatalog) {
		const swiperCatalog =  new Swiper('.slider-category--js', {
			slidesPerView: 'auto',
			navigation: {
				nextEl: sliderCatalog.querySelector(".swiper-button-next"),
				prevEl: sliderCatalog.querySelector(".swiper-button-prev"),
			},
			pagination: {
				el: sliderCatalog.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
			},
		});
	}

	function tagsToSlide() {
		const tagSliders = document.querySelectorAll('.tags-slider');
		for (let tagSlider of tagSliders) {
			if (window.innerWidth <= 576 && tagSlider.dataset.mobile == 'false') {
				const tagSwiper = new Swiper(tagSlider.querySelector('.tags-list--js'), {
					slidesPerView: 'auto',
				});
				tagSlider.dataset.mobile = 'true';
			}
			if (window.innerWidth > 576) {
				tagSlider.dataset.mobile = 'false';
				if (tagSlider.classList.contains('swiper-container-initialized')) {
					mobSlider.destroy();
				}
			}
		}
	}
	tagsToSlide();
	window.addEventListener('resize', () => {
		tagsToSlide();
	});

	let cardThumbsSlider = new Swiper(".card-thumbs-slider--js", {
		spaceBetween: 16,
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
	});
	
	let cardSwiper = new Swiper('.card-slider--js', {
		spaceBetween: 10,
		navigation: {
			nextEl: ".card-slider .swiper-button-next",
			prevEl: ".card-slider .swiper-button-prev",
		},
		thumbs: {
			swiper:cardThumbsSlider,
		},
	});
	
	const cardTabsSlider = new Swiper(".sCard__tabs", {
		slidesPerView: 'auto',
	});
	
	const materilaTabsSlider = new Swiper(".sCard__materila-tabs", {
		slidesPerView: 'auto',
	});

	const innerTabsSlider = new Swiper(".tabs-inner", {
		slidesPerView: 'auto',
	});
	const sFeedbackPageSlider = new Swiper(".sFeedbackPage__slider--js", {
		slidesPerView: 'auto',
	});

	// const filterSelect = document.querySelector('.filter-select');
	// const choices = new Choices(filterSelect);
	// modal window


	$(".search-toggle--js").on("click", function(){
		$(".topLine .search-block").toggleClass("active")
	})
	
	$(".toggle-catalog--js").on("click", function(){
		$(this).toggleClass("active")
		$(".catalog-dropdown--js").slideToggle()
	})
	
	$(".catalog-dropdown--js .menu-item-has-children>a ").on("click", function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active")
		$(this).next().slideToggle()
	})


	let sSalonPhotosSwiper = new Swiper('.sSalonPhotos__slider--js', {
		spaceBetween: 10,
		slidesPerView: 1,
		navigation: {
			nextEl: ".sSalonPhotos .swiper-button-next",
			prevEl: ".sSalonPhotos .swiper-button-prev",
		},
		pagination: {
			el: '.sSalonPhotos .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 32
			},
		},
	});
	let sInfosSwiper = new Swiper('.sInfo__slider--js', {
		spaceBetween: 0,
		slidesPerView: 'auto',
	});

	let sSiteMapSwiper = new Swiper('.sSiteMap__slider--js', {
		spaceBetween: 0,
		slidesPerView: 'auto',
	});

	// Рейтинг в отзывах на главной

	const ratings = document.querySelectorAll('.fb-rating');
	if (ratings.length > 0) {
		initRatings();
	}

	function initRatings() {
		let ratingActive, ratingValue;
		for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index];
			console.log(rating);
			initRating(rating);
		}
		function initRating(rating) {
			initRatingVars(rating);
	
			setRatingActiveWidth();
		}
		function initRatingVars(rating) {
			ratingActive = rating.querySelector('.fb-rating__active');
			ratingValue = rating.getAttribute('data-raiting');
			console.log(ratingValue);
		}
	
		function setRatingActiveWidth(index = ratingValue) {
			const ratingActiveWidth = index / 0.05;
			ratingActive.style.width = `${ratingActiveWidth}%`;
		}
	}



	// / Рейтинг в отзывах на главной

	$('.sExamples__btn').click(function() {
		$(this).toggleClass('active-btn');
		let textHidden = this.dataset.hidden;
		let textShow = this.dataset.show;
		// console.log(textHidden);
		if($('.sExamples__btn').hasClass('active-btn')) {
			this.innerHTML = textShow;
		} else {
			this.innerHTML = textHidden;
		}
		$('.sExamples__col--js.hidden').slideToggle();
	});
};

$('.location-btn-js').click(function () {
	$('.location-dd-js').toggleClass('active');
});
$('.location-close-js').click(function () {
	$('.location-dd-js').removeClass('active');
});
document.addEventListener('click', function () {
	if (!event.target.closest('.location-dd-js') && !event.target.closest('.location-btn-js')) {
		$('.location-dd-js').removeClass('active');
	}
}); //#modal-city

$('.mc-show-all-js').click(function () {
	$(this).fadeOut(function () {
		$(this).removeClass('active');
	}, 0);
	$('.modal-city--js').toggleClass('big');
	$('.mc-popular-js, .mc-all-js').toggleClass('active');
}); //.add-btn-js

function inputFile(){
	if (document.querySelector('.upload-field')){
		let uploadField = document.querySelectorAll('.upload-field');
		for (let i=0;i<uploadField.length;i++){
			let inputFile = uploadField[i].querySelector('.input-upload');
			inputFile.addEventListener('change',() => uploadField[i].querySelector('.upload-field__file-name').innerHTML = inputFile.files[0].name);
		}
	}
}
inputFile();

var slider = document.getElementById('slider');
var verticalSlider = document.getElementById('vertical-slider');
var verticalSliderRight = document.getElementById('vertical-slider-right');
var directionField = document.getElementById('field');
var directionField2 = document.getElementById('field2');
var directionField3 = document.getElementById('field3');

var el = $(".sCalc__size-lg").html();
if (!el) {
} else {
	noUiSlider.create(slider, {
		start: [4000],
		connect: 'lower',
		step: 1,
		decimals: 0,
		range: {
			'min': [2000],
			'max': [10000]
		}
	});
	
	noUiSlider.create(verticalSlider, {
		start: [4000],
		connect: 'lower',
		orientation: 'vertical',
		step: 1,
		// tooltips: true,
		range: {
			'min': [2000],
			'max': [10000]
		}
	});
	noUiSlider.create(verticalSliderRight, {
		start: [4000],
		connect: 'lower',
		orientation: 'vertical',
		step: 1,
		// tooltips: true,
		range: {
			'min': [2000],
			'max': [10000]
		}
	});
	
	slider.noUiSlider.on('update', function (values, handle) {
		directionField.innerHTML = values[handle];
	});
	verticalSlider.noUiSlider.on('update', function (values, handle) {
		directionField2.innerHTML = values[handle];
	});
	verticalSliderRight.noUiSlider.on('update', function (values, handle) {
		directionField3.innerHTML = values[handle];
	});
};


let headsets = document.getElementsByClassName('sCalc__headset-col');
for (let i = 0; i < headsets.length; i++) {
	headsets[i].addEventListener("click", function() {
		 console.log(i);
	});
}

let sCategoriesSwiper = new Swiper('.sCategories__slider--js', {
	spaceBetween: 8,
	slidesPerView: 'auto',
	navigation: {
		nextEl: ".sCategories__slide-wrap .swiper-button-next",
		prevEl: ".sCategories__slide-wrap .swiper-button-prev",
	},
});


let sCatalogSliders = $('.catalog-item__slider--js');
for (let sCatalogSlider of sCatalogSliders) {
	let sCatalogSwiper = new Swiper(sCatalogSlider, {
		spaceBetween: 8,
		slidesPerView: 1,
		observer: true,
		navigation: {
			// nextEl:  `.catalog-item__img-wrap .swiper-button-next`,
			// prevEl: `.catalog-item__img-wrap .swiper-button-prev`,
			nextEl: sCatalogSlider.querySelector('.swiper-button-next'),
			prevEl:  sCatalogSlider.querySelector('.swiper-button-prev'),
			
		}
	});
	
	window.addEventListener('resize', function() {
		if (this.window.innerWidth >= 992) {
			sCatalogSwiper.enable();
		} else {
			sCatalogSwiper.disable();
		}
	});
}

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

const cookieBtns = document.querySelectorAll('.cookie-btn--js');
for (let cookieBtn of cookieBtns) {
	cookieBtn.addEventListener('click', function (event) {
		const sCookies = document.querySelectorAll('.sCookies');
		sCookies.forEach((section) => {
			section.style.display='none';
		});
	});
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }