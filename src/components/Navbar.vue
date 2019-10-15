<template>
<nav class="navbar is-fixed-top">
  <div class="navbar-brand">
    <!-- <a class="navbar-item" href="http://bulma.io">
      <img src="/iconlogo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>

    <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
      <span class="icon" style="color: #333;">
        <i class="fa fa-github"></i>
      </span>
    </a>

    <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
      <span class="icon" style="color: #55acee;">
        <i class="fa fa-twitter"></i>
      </span>
    </a> -->

    <div class="navbar-burger burger" data-target="navMenubd-example" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenubd-example" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
    <div class="navbar-start">
      <nuxt-link tag="a" to="/" class="navbar-item" >
      <!-- <a   > -->
        <span class="bd-emoji">🏠</span> &nbsp;Inicio
      <!-- </a> -->
      </nuxt-link>
      <!-- <a class="navbar-item" v-scroll-to="'#contact'" href="#contact" >
        <span class="bd-emoji">🧖</span> &nbsp;Contacto
      </a> -->
      <nuxt-link tag="a" to="/hoteles" class="navbar-item">
       <!-- <a > -->
        <span class="bd-emoji">🏨</span> &nbsp;Hoteles
       <!-- </a> -->
      </nuxt-link>
      <nuxt-link tag="a" to="/ponentes" class="navbar-item" v-show="true">
       <!-- <a > -->
        <span class="bd-emoji">👨‍🏫</span> &nbsp;Ponentes
       <!-- </a> -->
      </nuxt-link>
       <a class="navbar-item" v-on:click="modalvideo = !modalvideo" >
        <span class="bd-emoji">🌎</span> &nbsp;Cuidad Sede
      </a>
    </div>

    <div class="navbar-end" style="flex-grow: 1; justify-content: center;">
      <a class="navbar-item is-hidden-desktop-only" href="https://www.facebook.com/CumbreIntlAduanero/" target="_blank">
        <!-- <span class="icon" style="color: #fff;"> -->
         <font-awesome-icon :icon="['fab', 'facebook']" />
        <!-- </span> -->
      </a>
      <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/a_cintl" target="_blank">        
          <font-awesome-icon :icon="['fab', 'twitter']" />        
      </a>
      <a class="navbar-item is-hidden-desktop-only" href="https://www.instagram.com/cintla1/" target="_blank">        
          <font-awesome-icon :icon="['fab', 'instagram']" />        
      </a>
    </div>
  </div>
   <no-ssr>
      <transition name="fade">
      <div id="myModalvideo" class="modalvideo" v-show="modalvideo" v-on:click="openmodal">
        <span class="close" >&times;</span>
        <div class="modalvideo-content">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TBRLEColtZg?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      </transition>
      </no-ssr>
</nav>
    <!-- <div class="navbar">
        <ul>
            
            <li><a href="#home" v-scroll-to="'#home'">HOME</a></li>
            <li><a href="#" v-scroll-to="'#about'">ABOUT</a></li>
            <li><a href="#services">INFORMACION</a></li>
            <li><a href="#contact">CONTACTO</a></li>
        </ul>

    </div> -->
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState(['status']),
    data: function() {
        return {
            isOpen: false,
            modalvideo: false
            // nohotel: true
        }
    },
    methods: {
    handleClick: function() {
      this.$root.$emit('clickedSomething')
    },
    openmodal: function(){
       this.modalvideo = false;
       var div = document.getElementById("myModalvideo");
      var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
      // div.style.display == 'hide' ? 'none' : '';
      // let func = state == 'hide' ? 'pauseVideo' : 'playVideo';
      iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      // let modal = document.getElementById("myModal");

      // // Get the image and insert it inside the modal - use its "alt" text as a caption      
      // let modalImg = document.getElementById("pdfdiv");
      // // var captionText = document.getElementById("caption");
      // modal.style.display = "block";
      // modalImg.src = this.src;

    },
    closemodal: function(){
       var modal = document.getElementById("myModal");
      modal.style.display = "none";

    }
  }
}
</script>




<style>
iframe{
  width: 100%;
  height: 80%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.enter { transform: translateX(100%) }
.enter-to { transform: translateX(0) }
.slide-enter-active { position: absolute }

.leave { transform: translateX(0) }
.leave-to { transform: translateX(-100%) }

.slide-enter-active,
.slide-leave-active { transition: all 750ms ease-in-out }
.modalvideo {
  display: block; 
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
.modalvideo-content {
  margin: auto;
  display: block;
  width: 80vw;
  /* max-width: 700px; */
  height: 80vh;
}
/* Add Animation - Zoom in the Modal */
/* .modal-content{ 
  animation-name: zoom;
  animation-duration: 0.6s;
} */

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
@media screen and (max-width: 1023px){ 
    .navbar-menu {
        background-color: black;

}}
.svg-inline--fa.fa-w-16,.svg-inline--fa.fa-w-14{
    /* background-color: black */
    height: 2rem;
    width: 2rem;
}
.navbar-item img {
    max-height: 7rem;
}
.navbar{
    /* position: fixed;
    top: 0;
    z-index:50;
    display: flex;
    width: 100%;
    height: 60px; */
    background-color: black;
    /* background-color: #002761; */
    color:seashell
    /* background-color: mediumblue */
}
.navbar-item, .navbar-link{
    color: aliceblue
}
a.navbar-item:hover{
    background-color: black
}
/* .navbar ul{
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: center;
}
.navbar ul li{
    margin: 0;
    padding: 1rem;
}
.navbar ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff 
}*/
@media only screen 
  and (max-device-width: 1015px) {
    .navbar{
      background-color: #fff
    }
    .navbar-burger {
      color: black
    }
  }
</style>
