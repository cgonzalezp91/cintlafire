<template>
  <div class="container1">
    
    <navbar  />
    <no-ssr>
    <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list :position=position @process="onClickChild" style="z-index: 500"></quick-menu>    
    </no-ssr>
    <section id="home" >
      <div class="evento grow" >
         <span class="bd-emoji">📅</span> &nbsp;17-18 Octubre 2019 &nbsp;|&nbsp; <span class="bd-emoji">📍</span> &nbsp;Nuevo Laredo, Tamaulipas

      </div>
      <div class="home">
        <!-- <img src="/logo.png" height="600" width="300" class="imagen"> -->
         <!-- <video autoplay class="imagen grow" src="~/assets/CINTLA.mp4" type="video/mp4" controls muted >
         </video>  -->
        <h1 class="lead text" style="align-self: flex-end;">1er. Cumbre Internacional Aduanera 2019</h1>
        <p class="lead text1" >Es el evento más importante de la frontera norte de México que reúne a los proveedores líderes en el ramo aduanero, 
          a empresarios y ejecutivos de Comercio Exterior de las empresas, miembros de la cadena logística (agentes aduanales / transportistas) interesados en ser partícipes de temas de actualidad,
          que afectan el comercio exterior de nuestro País. Representamos una plataforma para llegar a clientes interesados en sus servicios, aunado a la presencia de su marca con clientes nuevos y existentes. 
          Con el concepto: Exposición + Conferencias + Networking
</p>
      </div>
      <div class="registro">
        <a class="button is-rounded" style="background-color: goldenrod; color: aliceblue; border-color: black;" href="/pdf/REGISTRO PARA VISITANTES.pdf">Registrate Visitante</a>
        <a class="button is-rounded" style="background-color: crimson; color: aliceblue; border-color: black;" href="/pdf/REGISTRO, ESQUMA DE PATROCIONIO Y CROQUIS.pdf">Registrate Expositor</a>
      </div>
      <div class="timer">
        <no-ssr>
          <flip-countdown deadline="2019-10-17 00:00:00" class="newtime"></flip-countdown>
        </no-ssr>
        
      </div>
    </section>
    
    <section id="about" v-show="false">
      <div class="about">
        <!-- <figure class="image is-1by1"> -->
          <img data-aos="zoom-in"  src="/ponenciaslist.png">
        <!-- </figure> -->
        <!-- <h1 data-aos="zoom-in">Acerca de:</h1>
        <p data-aos="zoom-in" class="lead">Es el evento mas importante de la frontera norte de Mexico que reune a los proveedores lideres en el ramo aduanero.<br> 
        Representando una plataforma para llegar a clientes interesados en sus servicios, aunado a la presencia de su marca con clientes nuevos y existentes.<br></p> -->
      </div>
      <div class="about2" >
        <div data-aos="flip-left" class="titleponente">
          <h1> Conferencistas </h1>
        </div>  
        <div class="ponentes">
        <figure data-aos="fade-down-right" class="image">
           <img src="/jose.png" alt="Conferencista">
        </figure>
        <figure data-aos="fade-down" class="image ">
           <img src="/jose.png" alt="Conferencista">
        </figure>
        <figure data-aos="fade-down" class="image ">
           <img src="/jose.png" alt="Conferencista">
        </figure>
         <figure data-aos="fade-down-left" class="image ">
           <img src="/jose.png" alt="Conferencista">
        </figure>
         <figure data-aos="fade-up-right" class="image ">
           <img src="/jose.png" alt="Conferencista">
        </figure>
         <figure data-aos="fade-up" class="image ">
           <img src="/jose.png" alt="Conferencista">
        </figure>
        <figure data-aos="fade-up" class="image ">
           <img src="/jose.png" alt="Conferencista">
        </figure>
        <figure data-aos="fade-up-left" class="image ">
           <img src="/jose.png" alt="Conferencista">
        </figure>
        </div>
        <div class="titleponente">
          <h1> Panelistas </h1>
        </div> 
        <div class="conferencistas">
        <figure data-aos="zoom-in-right" class="image ">
           <img src="/jose.png" alt="Panelista">
        </figure>
        <figure data-aos="zoom-in-down" class="image ">
           <img src="/jose.png" alt="Panelista">
        </figure>
        <figure data-aos="zoom-in-left" class="image ">
           <img src="/jose.png" alt="Panelista">
        </figure>
         <figure data-aos="zoom-in-right" class="image ">
           <img src="/jose.png" alt="Panelista">
        </figure>
         <figure data-aos="zoom-in-up" class="image ">
           <img src="/jose.png" alt="Panelista">
        </figure>
         <figure data-aos="zoom-in-left" class="image ">
           <img src="/jose.png" alt="Panelista">
        </figure>
        </div>
      </div>
    </section>
     <section id="contact">
       <div class="gridcontact">
         <div class="contactinfo" data-aos="flip-left">
           <h1>AYUDA / ASISTENCIA</h1>
           <h2><span class="bd-emoji">📞</span>LLAMANOS</h2>
           
           <a class="navbar-item" href="tel:+52-867-715-3242" data-aos="fade-right">
            <span class="bd-emoji">☎️</span> &nbsp;+52 (867) 715 3242
          </a>
          <a class="navbar-item" href="tel:+52-477-715-3242" data-aos="fade-right">
            <span class="bd-emoji">☎️</span> &nbsp;+52 (477) 716 9905 ext. 07
          </a>
          <a class="navbar-item" href="tel:01-800-00-26623" data-aos="fade-right">
            <span class="bd-emoji">☎️</span> &nbsp;01 800 00 COMCE (26623)
          </a>

          <h2><span class="bd-emoji">📬</span>ESCRÍBENOS</h2>          
          <a class="navbar-item" href="mailto:dirección@comce.mx" data-aos="fade-left">
            <span class="bd-emoji">📧</span> &nbsp;dirección@comce.mx
          </a>
          <a class="navbar-item" href="mailto:mbs@m3solutions.com.mx" data-aos="fade-left">
            <span class="bd-emoji">📧</span> &nbsp;mbs@m3solutions.com.mx
          </a>
          <a class="navbar-item" href="mailto:ventas@m3solutions.com.mx" data-aos="fade-left">
            <span class="bd-emoji">📧</span> &nbsp;ventas@m3solutions.com.mx
          </a>
          <h2><span class="bd-emoji">📬</span>WHATSAPP</h2>
          <a class="navbar-item" href="https://api.whatsapp.com/send?phone=528677524727" target="_blank" data-aos="zoom-in">
           <font-awesome-icon :icon="['fab', 'whatsapp-square']" style="color: #4fce5d" /> &nbsp; +52 (867) 752 4727
          </a>
          <a class="navbar-item" href="https://api.whatsapp.com/send?phone=+525573500204" target="_blank" data-aos="zoom-in">
           <font-awesome-icon :icon="['fab', 'whatsapp-square']" style="color: #4fce5d" /> &nbsp; +52 (55) 735 00 204
          </a>

         </div>
         <figure class="profilecontac" data-aos="flip-down">
           <img src="/logoN.jpg" alt="logo">
         </figure>

       </div>
       <!-- <div class="layer"> -->
         <!-- <div class="banner">
             <img src="/portada.jpg">
         </div> -->
      <!-- </div> -->
     </section>
    
     <section id="interes">
       <div class="interes">
         <!-- <div class="links1"></div> -->
         <div class="links2">
   
            <h1 data-aos="zoom-in">LINKS DE INTERES</h1>
            
            <a class="navbar-item" data-aos="fade-left" v-on:click="onclicLink('PREGUNTAS FRECUENTES')"> 
              <span class="bd-emoji">❓</span> &nbsp;Preguntas Frecuentes
            </a>
           
            <a class="navbar-item" data-aos="fade-left" v-on:click="onclicLink('Política de Privacidad')">
              <span class="bd-emoji">📋</span> &nbsp;Política de Priviacidad
            </a>
            <a class="navbar-item" data-aos="fade-left" v-on:click="onclicLink('POLÍTICA DE ASISTENTES')">
              <span class="bd-emoji">📋</span> &nbsp;Política de Asistencia
            </a>
            <!-- <a class="navbar-item" data-aos="fade-left" >
              <span class="bd-emoji">📋</span> &nbsp;Reglamento
            </a> -->
            <a class="navbar-item" data-aos="fade-left" v-on:click="onclicLink('Términos y Condiciones')">
              <span class="bd-emoji">📝</span> &nbsp;Terminos y Condiciones
            </a>
            <a class="navbar-item" data-aos="fade-left" v-on:click="onclicLink('','POSTERE.jpg')">
              <span class="bd-emoji">📋</span> &nbsp;Poster Electronico
            </a>
            <a class="navbar-item" target="_blank" data-aos="fade-left" href="/pdf/FOLLETO INFORMATIVO.pdf">
              <font-awesome-icon :icon="['fas', 'file-download']" style="color: lightskyblue" /> &nbsp; Descarga Folleto Informativo
            </a>
            <a class="navbar-item" href="" data-aos="fade-left">
              <font-awesome-icon :icon="['fas', 'file-download']" style="color: lightskyblue" /> &nbsp;Descarga Guia del Visitante
            </a>
            

         </div>
         <div class="organizado">
            <figure data-aos="zoom-in-right" class="image ">
              <a href="http://www.comcebajio.org/" target="_blank">
                <img src="/comce.png" alt="Comce">
              </a>
            </figure>
         </div>
         <!-- <div ></div> -->
         <div class="organizado1">           
            <figure data-aos="zoom-in-right" class="image ">
              <a href="http://www.m3solutions.com.mx" target="_blank">
                <img src="/logo mbs.png" alt="MBS">
              </a>
            </figure>           
         </div>

       </div>
     </section>
     
     <no-ssr>
      <div id="myModal" class="modal" v-on:click="closemodal">
        <span class="close" v-on:click="closemodal">&times;</span>
        <img class="modal-content" id="img01" v-show="img">
        <div class="modal-content" id="pdfdiv" v-show="!img"></div>
      </div>
      </no-ssr>
     <Footer />
 
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue'
import FlipCountdown from 'vue2-flip-countdown'
import Footer from '~/components/Footer.vue'
import quickMenu from 'vue-quick-menu'
import PDFObject from 'pdfobject'

export default {
  components: {
    Logo,
    Navbar,
    FlipCountdown,
    Footer,
    quickMenu
  },
  data () {
    return {
      count:3,
      icons:["fa fa-home","fa fa-id-card","fa fa-link"],
      list:[{'isLink':false},{'isLink':false},{'isLink':false},{'isLink':false}],
      backgroundColor:'#17c4c5',
      color:'#ffffff',
      position:'bottom-left',
      isOpenNewTab:false,
      img: false
      
    }
},
  mounted() {
    this.$root.$on('clickedSomething', () => {
      console.log('work')
    })
    },
   methods: {
      handleClickInParent: function(param1, param2) {
      console.log(param1)
      console.log(param2)
    },
    onclicLink: function(pdf,img){
      console.log(pdf)
      console.log(img)
      var modal = document.getElementById("myModal");

      // Get the image and insert it inside the modal - use its "alt" text as a caption      
      var modalImg = document.getElementById("img01");
      // var captionText = document.getElementById("caption");
      modal.style.display = "block";
     
      // captionText.innerHTML = this.alt;
      if (pdf){
        this.img = false
        PDFObject.embed(`/pdf/${pdf}.pdf`,"#pdfdiv");
        }
      else{
        this.img = true
         modalImg.src = `/${img}`;
       }
      // }
    },
    closemodal: function(){
       var modal = document.getElementById("myModal");
      modal.style.display = "none";

    },
    
    onClickChild(value){
      if (value === 0) {
        $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
      }
      else if (value === 1) {
        $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
      }
      else {
        $('html,body').animate({
        scrollTop: $("#interes").offset().top},
        'slow');
      }
      console.log(value) // someValue
        // e.preventDefault();
        // var section = $(this).attr("href");
        // $("html, body").animate({
        //     scrollTop: $(section).offset().top
        // });

    },
    handleScroll() {
      const els = document.querySelectorAll('.about');
      // console.log(els);
      els.forEach((el) => {
        // console.log(el)
        const elTop = el.getBoundingClientRect().top;
        const elBottom = el.getBoundingClientRect().bottom;
         console.log(elBottom + ' Bottom');
        if (elTop >= 0 || elBottom <= 0) {
          this.sectionActive = false;
          // add css
        }
        if (elTop <= 0 && elBottom >= 0) {
          this.sectionActive = true;
          // add css
        }
      });
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 600; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  /* max-width: 700px; */
  height: 80vh;
}
.modal-content #img01 {
  width: 60%;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
/* #caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
} */

/* Add Animation - Zoom in the Modal */
.modal-content{ 
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
.interes{
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  width: 70vw;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2,50%);
  grid-template-rows: repeat(2,50%);
  z-index: 10;
}
.links2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column-start: 2; 
  grid-row-start: 1; 
  grid-row-end: 3; 
}
.interes a {
  align-self: baseline;
}
.organizado{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* grid-column-start: 2; 
  grid-row-start: 1; 
  grid-row-end: 3;  */
}
.organizado1{
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.box-icon {
   position: relative;
}
.box-icon:before {
  content: "\f2da";
  display: inline-block;
  font-family: FontAwesome;
  position: absolute;
  right: -1.5em;
}

 .homeicon{
   background-image: url("/homemini.png")
 }
#element {
  margin-top: 1000px;
}
 body {
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  line-height: 1.6;
}
.container{
  margin-top: 5rem;
  /* overflow-y: scroll; 
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory; */
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  width: 100%;
  height: 100vh;
  color: #fff;
  z-index: -10;
}
#about{
  flex-direction: row;
  justify-content: space-around;
}
.home{
   display: grid;
  grid-template-areas: "im tex"
                       "im tex1";                
            
  justify-content: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  width: 100vw;
  height: 40vh;
}
.imagen{
  grid-area: im;
  -ms-grid-row-span: 4;
  -ms-grid-column-span: 4;
  /* padding-top: 4rem; */
  margin-right: 4rem;
  z-index: 50;
}
.text{
  grid-area: tex;
}
.text1{
  grid-area: tex1;
}
/* .about{ */
  /* background: rgba(0, 0, 0, 0.5); */
  /* z-index: 10;
  width: 50vw;
  height: 80vh; */
  /* align-self: baseline; */
  /* justify-content: center;
  align-items: center;
  display: flex; */
/* } */
/* .about2{
    z-index: 10;
    width: 40vw;
    height: 95vh;
    display: grid;
   grid-template-rows: 10% 35% 10% 35%
                  
} */
/* .image{
  height: 50%;
  width: 50%;
  z-index: 50;
} */
/* .titleponente{
  background: rgba(0, 0, 0, 0.5);  
  align-self: flex-end;

} */
/* .ponentes{
   background: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: repeat(4, 25%);  
  grid-gap: 1.5rem;  
  width: 100%;
  justify-content: center;
  justify-items: center;
  align-content: center;  
} */
/* .conferencistas{
   background: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: repeat(3, 33%);  
  grid-gap: 1rem;  
  width: 100%;
  justify-content: center;
  justify-items: center;
  align-content: center;  
} */
section h1 {
  font-size: 2rem;
  font-weight: bold;
}
section#home {
  background: url('/page.jpg') no-repeat center center fixed ;
  background-size: cover;
  z-index: -10;
}

section#about {
  /* background: url('/truck.png') no-repeat center center/cover; */
}
section#contact {
  background: url('/puente.jpg') no-repeat center center/cover;
  opacity: 5;
}
section#interes {
  background: url('/truck.png') no-repeat center center/cover;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
p{
  font-size: 1rem;
  width: 40vw;
}
.evento{
  padding: 1.5rem;
  margin-bottom: 7vh;
  background: rgba(0, 0, 0, 0.8);
  animation-duration: 3s;
  animation-name: appear;
}
.timer{
  padding: 2rem;
  
}
/* .newtime{
  animation-duration: 1s;
  animation-name: slidein;
} */
.flip-clock{
  overflow: hidden;
}
.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
  display: block;
  /* height: @halfHeight; */
  color: #ccc;
  background: #222;
  padding: 0.23em 0.25em 0.4em;
  /* border-radius: @borderRadius @borderRadius 0 0; */
  /* backface-visiblity: hidden; */
  transform-style: preserve-3d;
  width: 1.8em;
}
.flip-card__bottom,
.flip-card__back-bottom {
  color: #FFF;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: solid 1px #000;
  background: #393939;
  /* border-radius: 0 0 @borderRadius @borderRadius; */
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}
video{
  width: 20vw;
  height: 40vh;  
}

.layer {
    background-color: rgba(0, 0, 0, 0.5);
}
.banner{
  width: 100vw;
}
.gridcontact{
  display: flex;
  justify-content: center;
  align-items: center;
}
.profilecontac{
  margin-top: 7px;
}
.contactinfo{
  background-color: rgba(0, 0, 0, 0.7);
  height: 80vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
}
.contactinfo a {
    padding-left: 3rem;
}
h2 {
    display: block;
    font-size: 1.2em;
    margin-block-start: 0.83em;
    /* margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; */
    font-weight: bold;
}
#contact img{
      height: 80vh;
      width: 40vw;
    }
.registro{
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
  padding-top: 1.5rem;
}
.button{
  border: #000 solid;
}
/* MEDIA QUERYS */
@media only screen 
  and (max-device-width: 500px) {
.home{      
       display: grid;
      grid-template-areas: "im"
                           "tex"
                           "tex1";
      height: 50vh;
      justify-content: center;
      text-align: center;
      align-content: center;
    }
    video{
      display: flex;
      justify-content: center;
      width: 30vw;
      height: 20vh;
      display: flex;
    
    }

    .imagen{
      grid-area: im;
      -ms-grid-row-span: 4;
      -ms-grid-column-span: 4;
      /* padding-top: 4rem; */
      display: flex;
      align-self: center;
      justify-self: center;
      margin-right: 0;
    }
    section h1 {
      font-size: .9rem;
      font-weight: bold;
  
    }
    
    p{
      font-size: 0.6rem;
      width: 100vw;
    }
    .evento{
      padding: 0.2rem;
      margin-bottom: 0rem;
      margin-top: 1rem;
      background: rgba(0, 0, 0, 0.8);
      animation-duration: 3s;
      animation-name: appear;
      font-size: 0.7rem
    }
    /* .image{
      height: 50%;
      width: 50%;
      position:absolute;
      z-index:100;

    } */
    /* #about{
      flex-direction: column;
      justify-content: inherit;
    } */
    /* .ponentes{
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-columns: repeat(3, 25%);    
    grid-gap: .5rem;    
    width: 100%;
    justify-content: center;
    justify-items: baseline;
    align-content: baseline;
    align-items: center;
    }
    .about2{      
      z-index: 10;
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-rows: 5% 35% 5% 35%                      
    } */
    /* .about{
      background: rgba(0, 0, 0, 0.5);
      z-index: 10;
      width: 80vw;
      height: 60vh;      
      justify-content: center;
      align-items: center;
      display: flex;
    } */
    .gridcontact{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .profilecontac{
      margin-top: 7px;
    }
    .contactinfo{
      background-color: rgba(0, 0, 0, 0.7);
      height: 55vh;
      width: 90vw;
      display: flex;
      flex-direction: column;
      padding-left: 1.1rem;
    }
    .contactinfo a {
        padding-left: 1.3rem;
    }
    h2{
      font-size: 0.7rem;
      font-weight: bold;
    }
    #contact h1{
      font-size: 0.9rem;
    }
    #contact a{
      font-size: 0.7rem;
    }
    .navbar-item, .navbar-link {
      padding: 0.1rem 0.5rem;
    }
    .svg-inline--fa.fa-w-16, .svg-inline--fa.fa-w-14{
      height: 1rem !important;
      width: 1rem !important;
    }
    #contact img{
      height: 40vh;
      width: 80vw;
    }
    .grow:hover,.image:hover { 
      transform: scale(1); 
      z-index: 100;
    }
    .button{
      font-size: .6rem;
    }
    .timer {
    padding: .1rem;
    }
    .registro{
      padding-bottom: .5rem;
      width: 90vw;
    }
    .interes{
      background: rgba(0, 0, 0, 0.7);
      z-index: 10;
      width: 70vw;
      height: 80vh;
      display: grid;
      grid-template-columns: 90%;
      grid-template-rows: repeat(4,25%);
      z-index: 10;
    }
    .links2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-column-start: 1;
      grid-row-start: 2;
      grid-row-end: 4;
    }
    .interes a {
      font-size: .5rem;
      padding: 0.2rem 0.5rem;
    }
    .organizado1{
      grid-row-start: 4;
      grid-row-end: 4;
    }
    .organizado figure, .organizado1 figure{
      width: 25%;
      height: 5%;
    }
  }
/* @media only screen 
  and (max-device-width: 500px) {
.home{      
       display: grid;
      grid-template-areas: "im"
                           "tex"
                           "tex1";
      height: 60vh;
      justify-content: center;
      text-align: center;
      align-content: center;
    }
    video{
      display: flex;
      justify-content: center;
      width: 30vw;
      height: 20vh;
      display: flex;
    
    }

    .imagen{
      grid-area: im;
      -ms-grid-row-span: 4;
      -ms-grid-column-span: 4;
      display: flex;
      align-self: center;
      justify-self: center;
      margin-right: 0;
    }
    section h1 {
      font-size: 1.3rem;
      font-weight: bold;
  
    }
    
    p{
      font-size: 0.7rem;
      width: 100vw;
    }
    .evento{
      padding: 0.2rem;
      margin-bottom: 0rem;
      margin-top: 1rem;
      background: rgba(0, 0, 0, 0.8);
      animation-duration: 3s;
      animation-name: appear;
      font-size: 0.7rem
    }
    .image{
      height: 50%;
      width: 50%;
      position:absolute;
      z-index:100;

    }
    #about{
      flex-direction: column;
      justify-content: inherit;
    }
    .ponentes{
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-columns: repeat(3, 25%);    
    grid-gap: .5rem;    
    width: 100%;
    justify-content: center;
    justify-items: baseline;
    align-content: baseline;
    align-items: center;
    }
    .about2{
      
      z-index: 10;
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-rows: 5% 35% 5% 35%                      
    }
    .about{
      background: rgba(0, 0, 0, 0.5);
      z-index: 10;
      width: 80vw;
      height: 60vh;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .gridcontact{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .profilecontac{
      margin-top: 7px;
    }
    .contactinfo{
      background-color: rgba(0, 0, 0, 0.7);
      height: 55vh;
      width: 90vw;
      display: flex;
      flex-direction: column;
      padding-left: 1.1rem;
    }
    .contactinfo a {
        padding-left: 1.5rem;
    }
    h2{
      font-size: 0.7rem;
      font-weight: bold;
    }
    #contact h1{
      font-size: 0.9rem;
    }
    #contact a{
      font-size: 0.7rem;
    }
    .navbar-item, .navbar-link {
      padding: 0.2rem 0.5rem;
    }
    .svg-inline--fa.fa-w-16, .svg-inline--fa.fa-w-14{
      height: 1rem !important;
      width: 1rem !important;
    }
    #contact img{
      height: 40vh;
      width: 80vw;
    }
    .grow:hover,.image:hover { 
      transform: scale(1); 
      z-index: 100;
    }
  } */

@media only screen 
  and (min-device-width: 500px) 
  and (max-device-width: 700px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .home{      
       display: grid;
      grid-template-areas: "im"
                           "tex"
                           "tex1";
      height: 40vh;
      justify-content: center;
      text-align: center;
      align-content: center;
    }
    video{
      display: flex;
      justify-content: center;
      width: 30vw;
      height: 20vh;
      display: flex;
    
    }

    .imagen{
      grid-area: im;
      -ms-grid-row-span: 4;
      -ms-grid-column-span: 4;
      /* padding-top: 4rem; */
      display: flex;
      align-self: center;
      justify-self: center;
      margin-right: 0;

    }
    section h1 {
      font-size: 1.3rem;
      font-weight: bold;
  
    }
    p{
      font-size: 0.7rem;
      width: 80vw;
    }
    .evento{
      padding: 1.0rem;
      margin-bottom: 10vh;
      background: rgba(0, 0, 0, 0.8);
      animation-duration: 3s;
      animation-name: appear;
    }
    /* #about{
      flex-direction: column;
      justify-content: inherit;
    }
     .ponentes{
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-columns: repeat(3, 25%);    
    grid-gap: .5rem;    
    width: 100%;
    justify-content: center;    
    align-content: baseline;
    align-items: center;
    }
    .about2{      
      z-index: 10;
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-rows: 5% 35% 5% 35%                      
    }
    .about{
      background: rgba(0, 0, 0, 0.5);
      z-index: 10;
      width: 80vw;
      height: 60vh;      
      justify-content: center;
      align-items: center;
      display: flex;
    } */
    .gridcontact{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .profilecontac{
      margin-top: 7px;
    }
    .contactinfo{
      background-color: rgba(0, 0, 0, 0.7);
      height: 55vh;
      width: 80vw;
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
    }
    .contactinfo a {
        padding-left: 3rem;
    }
    h2{
      font-size: 0.8rem;
      font-weight: bold;
    }
    #contact a{
      font-size: 0.7rem;
    }
    .navbar-item, .navbar-link {
      padding: 0.2rem 0.5rem;
    }
    .svg-inline--fa.fa-w-16, .svg-inline--fa.fa-w-14{
      height: 1.3rem !important;
      width: 1.3rem !important;
    }
    #contact img{
      height: 40vh;
      width: 60vw;
    }
    .interes a {
      font-size: .7rem;
      padding: 0.2rem 0.5rem;
    }
    .interes h1 {
      font-size: .9rem;
      /* padding: 0.2rem 0.5rem; */
    }

}

@media only screen 
  and (min-device-width: 701px) 
  and (max-device-width: 1000px)
  and (-webkit-min-device-pixel-ratio: 2) {
     section h1 {
      font-size: 1.5rem;
      font-weight: bold;
  
    }
    p{
      font-size: 0.9rem;
      width: 60vw;
    }
    h2{
      font-size: 1.1rem;
      font-weight: bold;
    }
    .contactinfo{
      padding-left: 1rem;
    }
    .contactinfo a {
        padding-left: 1.2rem;
    }
    .navbar-item, .navbar-link {
      padding: 0.2rem 0.5rem;
    }
    .interes a {
      font-size: .8rem;
      padding: 0.2rem 0.5rem;
    }
    .interes h1 {
      font-size: 1rem;
      /* padding: 0.2rem 0.5rem; */
    }
  }
  @media only screen 
  and (min-device-width: 1001px) 
  and (max-device-width: 1240px){
    p{
      width: 60vw;
    }
      .interes h1 {
      font-size: 1.3rem;
      /* padding: 0.2rem 0.5rem; */
    }



  }
  @media only screen 
  and (max-device-width: 1500px)  {

    /* .ponentes {
      grid-gap: 1rem;
      grid-template-columns: repeat(4, 23%);
    }     */
  }
  @media only screen 
  and (max-device-height: 850px) {
    .conferencistas{
      grid-template-columns: repeat(3, 20%);
      grid-gap: 1rem      
    }    
    .evento{
      /* padding: 0.5rem; */
      padding-top: 2rem;
      margin-bottom: 0rem;
      /* background: rgba(0, 0, 0, 0.8);
      animation-duration: 3s;
      animation-name: appear; */
    }

    }
    @media only screen 
    and (max-device-height: 700px) {
      .navbar-item, .navbar-link {
       padding: 0.2rem 0.5rem;
      }
      .evento{
      /* padding: 0.5rem; */
      padding-top: 5rem;
      margin-bottom: 0rem;
      /* background: rgba(0, 0, 0, 0.8);
      animation-duration: 3s;
      animation-name: appear; */
    }
    }

/* KEYFRAMES  ANIMATIONS*/
.grow,.image { 
transition: all .2s ease-in-out; 
/* z-index: 50; */
}
 
.grow:hover,.image:hover { 
transform: scale(1.5); 
z-index: 100;
}

@keyframes appear {
  from {
    opacity: 0
  }

  to {
   opacity: 1
  }
}
@keyframes slidein {
  from {
    margin-top: 100%
  }

  to {
   margin-top: 0;
  }
}
</style>
