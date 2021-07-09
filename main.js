// char - string           //caracter js
//"um texto"

//number                  //numeros js
//12345

// boolean: true ou false           //verificar se é verdadeiro ou falso
//true
//false

//DOM = Document Object Model
/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector(" #header nav")
const toggle = document.querySelectorAll("nav .toggle")


for (const element of toggle) {
  element.addEventListener("click", function() {
    nav.classList.toggle("show") 
  }) //addEventListener     respoder ao toca r
}

/* quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll("nav ul li a")

for(const link of links) {
  link.addEventListener("click", function () {
      nav.classList.remove("show")
  })
}

/* mudar o header da pagina quando usar o scroll*/
const header = document.querySelector("#header")
const navHeight = header. offsetHeight

window.addEventListener("scroll", function() {
  if(window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add("scroll")
  } else {
    //menor que a altura do header
    header.classList.remove("scroll")
  }
})

/* Testimonials carrosel*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,     /*local para definir quantos voce quer ver por vez*/
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,        /*click do mouse*/     
  keyboard: true,          /*setinhas do teclado*/     
})

/* ScrollReveal: Mostrar elementos quando der scroll na página*/
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
  )
/* Botão oltar para o topo*/
const backToTopButton = document.querySelector(".back-to-top")
window.addEventListener("scroll", function() {
  if(window.scrollY >= 560) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }

})






