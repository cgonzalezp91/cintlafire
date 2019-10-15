<template>
    <div class="container1">
        <navbar />
        <section id="hotel1">
            <img src="/holidayinn.jpg"/>
        </section>  
         <section class="" id="hotel2">
            <img data-aos="zoom-in" src="/realinn.jpg"/>
        </section>             
        <section class="" id="hotel3">
            <img data-aos="flip-left" src="/bestwenster.jpg"/>
        </section>
        <section class="" id="hotel4">
            <img data-aos="zoom-out" src="/colonplaza.jpg"/>
        </section>
        <section class="" id="hotel5">
            <img data-aos="flip-down" src="/cityexpress.jpg"/>
        </section>
        <section class="" id="hotel6">
            <img data-aos="zoom-in" src="/fiestainn.jpg"/>
        </section>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
 components: {
    Navbar
  }
}
</script>

<style scoped>
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
  padding-top: 3rem;
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
section#hotel1 {
  background: url('/holiday-inn.jpg') no-repeat center center/cover;;
}
section#hotel2 {
  background: url('/Real inn.jpg') no-repeat center center/cover;;
}
section#hotel3 {
  background: url('/best western.jpg') no-repeat center center/cover;;
}
section#hotel4 {
  background: url('/colon plza.jpg') no-repeat center center/cover;;
}
section#hotel5 {
  background: url('/city-express.jpg') no-repeat center center/cover;;
}
section#hotel6 {
  background: url('/fiesta-inn.jpg') no-repeat center center/cover;;
}
img { 
transition: all .2s ease-in-out; 
/* z-index: 50; */
}
 
img:hover { 
transform: scale(1.5); 
z-index: 100;
}
/* .wrapper {  
    position: relative;  
    padding-top: 56.25%; 
}
img {  
    position: absolute; 
    left: 0;  
    top: 0;  
    width: 100%;  height: auto;} */
img{
    /* height: 70vh; */
    width: 100%;
    max-width: 500px;
    max-height: 400px;
    height: auto;
}
  @media only screen 
  and (max-device-height: 400px) {
      img{
    /* height: 70vh; */
    /* width: 100%;
    max-width: 400px; */
    height: 250px;
}

  }
</style>
