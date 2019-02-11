/*
Projecte MALDÀ 10 - JavaScript
========================================== */


/* Imatge 1 - Butaca */

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



/* Imatge 2 - Taula */

function openModal2() {
  document.getElementById('myModal2').style.display = "block";
}

function closeModal2() {
  document.getElementById('myModal2').style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "block";
}


/* Imatge 3 - Cadira */

function openModal3() {
  document.getElementById('myModal3').style.display = "block";
}

function closeModal3() {
  document.getElementById('myModal3').style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "block";
}


/* Imatge 4 - Cofre */

function openModal4() {
  document.getElementById('myModal4').style.display = "block";
}

function closeModal4() {
  document.getElementById('myModal4').style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  slides4[slideIndex4-1].style.display = "block";
}



/* Imatge 5 - Tamboret */

function openModal5() {
  document.getElementById('myModal5').style.display = "block";
}

function closeModal5() {
  document.getElementById('myModal5').style.display = "none";
}

var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i;
  var slides5 = document.getElementsByClassName("mySlides5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";
  }
  slides5[slideIndex5-1].style.display = "block";
}



/* Imatge 6 - Taula-2 */

function openModal6() {
  document.getElementById('myModal6').style.display = "block";
}

function closeModal6() {
  document.getElementById('myModal6').style.display = "none";
}

var slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
  var i;
  var slides6 = document.getElementsByClassName("mySlides6");
  if (n > slides6.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides6.length}
  for (i = 0; i < slides6.length; i++) {
      slides6[i].style.display = "none";
  }
  slides6[slideIndex6-1].style.display = "block";
}



/* Imatge 7 - Caseta Anubis */

function openModal7() {
  document.getElementById('myModal7').style.display = "block";
}

function closeModal7() {
  document.getElementById('myModal7').style.display = "none";
}

var slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
  var i;
  var slides7 = document.getElementsByClassName("mySlides7");
  if (n > slides7.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = slides7.length}
  for (i = 0; i < slides7.length; i++) {
      slides7[i].style.display = "none";
  }
  slides7[slideIndex7-1].style.display = "block";
}



/* Imatge 8 - Jardinera */

function openModal8() {
  document.getElementById('myModal8').style.display = "block";
}

function closeModal8() {
  document.getElementById('myModal8').style.display = "none";
}

var slideIndex8 = 1;
showSlides8(slideIndex8);

function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
  var i;
  var slides8 = document.getElementsByClassName("mySlides8");
  if (n > slides8.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = slides8.length}
  for (i = 0; i < slides8.length; i++) {
      slides8[i].style.display = "none";
  }
  slides8[slideIndex8-1].style.display = "block";
}



/* Imatge 9 - Canelobres */

function openModal9() {
  document.getElementById('myModal9').style.display = "block";
}

function closeModal9() {
  document.getElementById('myModal9').style.display = "none";
}

var slideIndex9 = 1;
showSlides9(slideIndex9);

function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}

function currentSlide9(n) {
  showSlides9(slideIndex9 = n);
}

function showSlides9(n) {
  var i;
  var slides9 = document.getElementsByClassName("mySlides9");
  if (n > slides9.length) {slideIndex9 = 1}
  if (n < 1) {slideIndex9 = slides9.length}
  for (i = 0; i < slides9.length; i++) {
      slides9[i].style.display = "none";
  }
  slides9[slideIndex9-1].style.display = "block";
}



/* Imatge 11 - Caixa Birres */

function openModal11() {
  document.getElementById('myModal11').style.display = "block";
}

function closeModal11() {
  document.getElementById('myModal11').style.display = "none";
}

var slideIndex11 = 1;
showSlides11(slideIndex11);

function plusSlides11(n) {
  showSlides11(slideIndex11 += n);
}

function currentSlide11(n) {
  showSlides11(slideIndex11 = n);
}

function showSlides11(n) {
  var i;
  var slides11 = document.getElementsByClassName("mySlides11");
  if (n > slides11.length) {slideIndex11 = 1}
  if (n < 1) {slideIndex11 = slides11.length}
  for (i = 0; i < slides11.length; i++) {
      slides11[i].style.display = "none";
  }
  slides11[slideIndex11-1].style.display = "block";
}
