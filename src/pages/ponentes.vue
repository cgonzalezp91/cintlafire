<template>
    <div class="container1">
         <navbar  />

    <section id="about" style="height: 100%">
      <!-- <div class="about">        
          <img data-aos="zoom-in"  src="/ponenciaslist.png">        
      </div> -->
      <div class="about2" >
        <div data-aos="flip-left" class="titleponente has-text-centered">
          <h1 class="h1"> Conferencistas <br> Preliminar</h1>
          <!-- <h1 class="h1">  Preliminar </h1>   -->
        </div>  
        <!-- <div class="ponentes">
        <figure aos="fade-down-right" class="image foto1" >           
           <img src="/ponentes/jose-1.png" alt="Conferencista" class="imgh" v-on:click="onclicLink('ponentes/jose-2.jpg')">
        </figure>
        <figure aos="fade-down" class="image foto3">
           <img src="/ponentes/Arturo-1.jpg" alt="Conferencista" class="imgh">
        </figure>
         <figure aos="fade-down" class="image foto4">
           <img src="/ponentes/RicardoDiaz-1.jpg" alt="Conferencista" class="imgh">
        </figure>
       
         <figure aos="fade-up-right" class="image foto5">
           <img src="/ponentes/Eugenio-1.jpg" alt="Conferencista" class="imgh">
        </figure>
         <figure aos="fade-up" class="image foto6">
           <img src="/ponentes/FRANCISCO-1.jpg" alt="Conferencista" class="imgh" v-on:click="onclicLink('ponentes/FRANCISCO-2.jpg')">
        </figure>
        </div> -->
        <!-- <figure data-aos="fade-down" class="image foto2">
           <img src="/ponentes/ENRIQUE-1.jpg" alt="Conferencista">
        </figure> -->
         <!-- </div> -->
        <!-- <div class="fotosdiv2"> -->
                <!-- <figure aos="fade-up" class="image foto7 aos-item">
           <img src="/ponentes/RICARDO-1.jpg" alt="Conferencista" class="imgh" v-on:click="onclicLink('ponentes/RICARDO-2.jpg')">
        </figure> -->
        <!-- </div> -->
        <!-- <figure data-aos="fade-up-left" class="image ">
           <img src="/jose.png" alt="Conferencista">
        </figure> -->
        <div class="ponentes">
          <div class="section">
            <div class="container">
              <div class="columns is-centered is-mobile">
                  <div class="column is-half">
                    <figure aos="fade-down-right" class="image foto1" >           
                      <img src="/ponentes/jose-1.png" alt="Conferencista" class="imgh" v-on:click="onclicLink('ponentes/jose-2.jpg')">
                    </figure>
                    </div>
                    <div class="column is-half">
                     <figure aos="fade-down" class="image foto3">
                      <img src="/ponentes/Arturo-1.jpg" alt="Conferencista" class="imgh" v-on:click="onclicLink('ponentes/Arturo-1.jpg')">
                    </figure>
                    </div>
                  <!-- </div> -->
                  
                  <!-- <div class="column">
                    <figure aos="fade-down" class="image foto3">
                      <img src="/ponentes/Arturo-1.jpg" alt="Conferencista" class="imgh">
                    </figure>
                  </div>
                  <div class="column is-half-mobile">
                    <figure aos="fade-down" class="image foto4">
                      <img src="/ponentes/RicardoDiaz-1.jpg" alt="Conferencista" class="imgh">
                    </figure>
                  </div>                -->
              </div>
            </div>
            <div class="columns is-mobile">
              <div class="column">
                    <figure aos="fade-down" class="image foto4">
                      <img src="/ponentes/RicardoDiaz-1.jpg" alt="Conferencista" class="imgh" v-on:click="onclicLink('ponentes/RicardoDiaz-1.jpg')">
                    </figure>
                  </div>
                  <div class="column">
                    <figure aos="fade-up-right" class="image foto5">
                      <img src="/ponentes/Eugenio-1.jpg" alt="Conferencista" class="imgh" v-on:click="onclicLink('ponentes/Eugenio-1.jpg')">
                    </figure>
                  </div>
                  <div class="column">
                    <figure aos="fade-up" class="image foto6">
                      <img src="/ponentes/FRANCISCO-1.jpg" alt="Conferencista" class="imgh" v-on:click="onclicLink('ponentes/FRANCISCO-2.jpg')">
                    </figure>
                  </div>
            </div>
          </div>          
          <!-- <div class="container">
          <div class="columns">
             <div class="column is-two-fifths is-centered">
                 <figure aos="fade-up-right" class="image foto5">
                  <img src="/ponentes/Eugenio-1.jpg" alt="Conferencista" class="imgh">
                </figure>
              </div>
              <div class="column is-two-fifths is-centered">
                 <figure aos="fade-up" class="image foto6">
                  <img src="/ponentes/FRANCISCO-1.jpg" alt="Conferencista" class="imgh" v-on:click="onclicLink('ponentes/FRANCISCO-2.jpg')">
                </figure>
              </div>
          </div>
          </div> -->
        </div>
        <!-- <div class="titleponente">
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
        </div> -->
      </div>
    </section>
     <no-ssr>
      <div id="myModal" class="modalp" v-on:click="closemodal">
        <span class="close" v-on:click="closemodal">&times;</span>
        <img class="modal-contentp" id="img01">        
      </div>
      </no-ssr>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer    
  },
  methods:{
       onclicLink: function(img){            
      var modal = document.getElementById("myModal");
      var modalImg = document.getElementById("img01");      
      modal.style.display = "block";
        this.img = true
        modalImg.src = `/${img}`;
    },
    closemodal: function(){
       var modal = document.getElementById("myModal");
      modal.style.display = "none";

    }
  }

}


</script>

<style>
.section{
  padding: 0rem 1rem;
}
.column{
  display:flex;
  justify-content: center;
}
figure{
    cursor: pointer;
}
.arrow-right {
  width: 0; 
  height: 0; 
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  
  border-left: 20px solid #f00;
}
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80px;
  height: 60px;
  cursor: pointer;
}
.modalp {
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
.modal-contentp {
    margin: auto;
    display: block;
    width: 40%;
    /* max-width: 700px; */
    height: 80vh;
}
.modal-contentp{ 
  animation-name: zoom;
  animation-duration: 0.6s;
}

 body {
  font-family:  Helvetica, sans-serif, Arial;
  height: 100vh;
  line-height: 1.6;
  
  /* background: rgba(179,220,237,1);
    background: -moz-linear-gradient(top, rgba(179,220,237,1) 0%, rgba(205,224,230,1) 30%, rgba(23,168,212,1) 85%, rgba(188,224,238,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(179,220,237,1)), color-stop(30%, rgba(205,224,230,1)), color-stop(85%, rgba(23,168,212,1)), color-stop(100%, rgba(188,224,238,1)));
    background: -webkit-linear-gradient(top, rgba(179,220,237,1) 0%, rgba(205,224,230,1) 30%, rgba(23,168,212,1) 85%, rgba(188,224,238,1) 100%);
    background: -o-linear-gradient(top, rgba(179,220,237,1) 0%, rgba(205,224,230,1) 30%, rgba(23,168,212,1) 85%, rgba(188,224,238,1) 100%);
    background: -ms-linear-gradient(top, rgba(179,220,237,1) 0%, rgba(205,224,230,1) 30%, rgba(23,168,212,1) 85%, rgba(188,224,238,1) 100%);
    background: linear-gradient(to bottom, rgba(179,220,237,1) 0%, rgba(205,224,230,1) 30%, rgba(23,168,212,1) 85%, rgba(188,224,238,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b3dced', endColorstr='#bce0ee', GradientType=0 ); */
}
.h1 {
 color: #fff;
    font-size: 92px;
		font-family: 'ubuntu';
		text-transform: uppercase;
    font-weight: 700;
    font-family: 'Josefin Sans',sans-serif;
    background: linear-gradient(to right,#7487ff 10%, #fff 50%,#5bdaff 60%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 1.5s linear infinite;
    display: inline-block;
  font-size: 4rem;
}
.container{
  margin-top: 5rem;
  /* overflow-y: scroll; 
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory; */
}
/* section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;
  height: 100vh;
  color: #fff;
  z-index: -10;
} */
/* .imgh:hover { 
transform: scale(1.5); 
z-index: 100;
} */
#about{
  flex-direction: row;
  justify-content: space-around;
}
.about{
  /* background: rgba(0, 0, 0, 0.5); */
  z-index: 10;
  width: 50vw;
  height: 80vh;
  /* align-self: baseline; */
  justify-content: center;
  align-items: center;
  display: flex;
}
.about2{
     /* background: rgba(0, 0, 0, 0.5); */
    z-index: 10;
    width: 80vw;
    height: 40%;;
    display: grid;
   /* grid-template-columns: repeat(4, 50%); */
   grid-template-rows: 10% 85% ;
   /* padding-top: 5rem; */
   margin-top: 12rem;
   
                  
}
.image{
  height: 50%;
  width: 30%;
  z-index: 50;
  margin-left: 3rem;
  list-style-type: disc;
  list-style-position: inside;

}
.titleponente{
  /* background: rgba(0, 0, 0, 0.5); */
  /* width: 50%; */
  align-self: flex-end;

}
.ponentes{   
  /* display: grid; */
  grid-gap: 15px;
  /* height: 25%; */
  width: 100%;
   grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
}
/* .fotosdiv1{
    display: flex;
    width: 80%;
}
.fotosdiv2{
    display: flex;
    width: 80%;
} */
.foto1{ grid-column: 1 / 3;}
.foto2{ grid-column: 3 / 5;}
.foto3{ grid-column: 3 / 5;}
.foto4{ grid-column: 5 / 7;}
.foto5{ 
    grid-column: 2 / 4;
    grid-row: 4; 
}
.foto6{ 
    grid-column: 4 / 6;
    grid-row: 4;
}
.foto7{ grid-column: 6 / 8;
        grid-row: 4;}

.conferencistas{
   background: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: repeat(3, 33%);
  /* grid-template-rows: repeat(2, 50%); */
  grid-gap: 1rem;
  /* height: 25%; */
  width: 100%;
  justify-content: center;
  justify-items: center;
  align-content: center;
  /* align-items: center; */
}
section#about {
   background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/aluminum.jpg') no-repeat center center/cover;
}
@media only screen 
  and (max-device-width: 600px) {
    .modal-contentp {
        width: 100%;
    }
  }

@media only screen 
  and (max-device-width: 700px) {
        .h1{
        font-size: 1.5rem;
        padding-right: 0;
        text-align: center;
      }
      .about2{
      /* background: rgba(0, 0, 0, 0.5); */
      z-index: 10;
      width: 100vw;
      height: 100vh;
      display: grid;
      margin-top: 5rem;
      /* grid-template-rows: 5% 35% 5% 35%                       */
    }
    .foto1{ grid-column: 2 / 4;}
    /* .foto2{ grid-column: 3 / 5;} */
    .foto3{ grid-column: 5 / 7;}
    .foto4{ 
        grid-column: 2 / 4;
        grid-row: 4;
    }
    .foto5{ 
        grid-column: 5 / 7;
        grid-row: 4; 
    }
    .foto6{ 
        grid-column: 2 / 4;
        grid-row: 8;
    }
    .foto7{ grid-column: 5 / 7;
            grid-row: 8;}

       /* .image{
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
    } */
  }
  @media only screen 
  and (min-device-width: 700px) 
  and (max-device-width: 1020px)
  and (-webkit-min-device-pixel-ratio: 2) {
      .h1{
           font-size: 3rem;
               /* padding-right: 5rem; */
      }
      .about2{
      /* background: rgba(0, 0, 0, 0.5); */
      z-index: 10;
      width: 100vw;
      height: 100vh;
      display: grid;
      /* grid-template-rows: 5% 35% 5% 35%                       */
    }
    .foto1{ grid-column: 2 / 4;}
    /* .foto2{ grid-column: 3 / 5;} */
    .foto3{ grid-column: 5 / 7;}
    .foto4{ 
        grid-column: 2 / 4;
        grid-row: 4;
    }
    .foto5{ 
        grid-column: 5 / 7;
        grid-row: 4; 
    }
    .foto6{ 
        grid-column: 2 / 4;
        grid-row: 8;
    }
    .foto7{ grid-column: 5 / 7;
            grid-row: 8;}
  }
  @media only screen 
  and (max-device-width: 500px) {
    .about2{
      margin-top: 5rem;
    }
  .h1{
        font-size: 1.5rem;
        padding-right: 0;
        text-align: center;
      }
      .foto1{ grid-column: 1 / 4;}
    /* .foto2{ grid-column: 3 / 5;} */
    .foto3{ grid-column: 5 / 8;}
    .foto4{ 
        grid-column: 1 / 4;
        grid-row: 5;
    }
    .foto5{ 
        grid-column: 5 / 8;
        grid-row: 5; 
    }
    .foto6{ 
        grid-column: 1 / 4;
        grid-row: 9;
    }
    .foto7{ grid-column: 5 / 8;
            grid-row: 9;}
  }
   @media only screen 
  and (max-device-width: 812px) 
  and (max-device-height: 500px) {
      .h1{
        font-size: 1.5rem;
        padding-right: 0;
        text-align: center;
      }
  .foto1{ grid-column: 2 / 3;}
    /* .foto2{ grid-column: 3 / 5;} */
    .foto3{ grid-column: 4 / 5;}
    .foto4{ 
        grid-column: 6 / 7;
        grid-row: 1;
    }
    .foto5{ 
        grid-column: 2 / 3;
        grid-row: 3; 
    }
    .foto6{ 
        grid-column: 4 / 5;
        grid-row: 3;
    }
    .foto7{ grid-column: 6 / 7;
            grid-row: 3;}
  
  }
</style>
