<template>
  <div class="home">
    <p class="msgBienvenida">¡Hola, Buenas Tardes!</p>
    <!--<button @click="goToSlide(5)">Go to Slide Index 5</button>-->
    <SideNav :showSideRight="showSideRight" />
    <div >
      <md-button class="md-fab md-mini btnMenuRight" @click="openSide">
        <md-icon class="icon_btn_menu">menu</md-icon>
      </md-button>
      <carousel-3d
      class="carrousel-3d-categorias"
        ref="mycarousel"
        :count="categorias.length"
        :width="widthItem"
        :height="heightItem"
        :space="400"
      >
        <slide
          :key="i"
          v-for="(slide, i) in categorias"
          :index="i"
          class="slide-categorias"
        >
          <h1 class="title_item_carrousel">{{ slide.nombre }}</h1>
          <!--<img src="../assets/img/desayunos.jpg" class="card-image" />-->
          <div
            class="item_contain_img"
            v-bind:style="{
              'background-image': 'url(' + slide.ubicacion + ')',
            }"
          ></div>
        </slide>
      </carousel-3d>
    </div>

    <h3 class="title_experiencias">Esta es la experiencia Toks</h3>

    <div class="content_experiencias">
      <carousel-3d
        ref="carouselExperiencia"
        :count="categorias.length"
        :width="widthItemExp"
        :height="100"
        :space="200"
        @before-slide-change="onBeforeSlideChange"
        @after-slide-change="onAfterSlideChange"
        @last-slide="onLastSlide"
        class="carousel-3d-experiencias"
      >
        <slide
          :key="i"
          v-for="(slide, i) in categorias"
          :index="i"
          class="slide-experiencias"
        >
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-100">
              <div
                class="item_img_experiencia"
                v-bind:style="{
                  'background-image': 'url(' + slide.ubicacion + ')',
                }"
              ></div>
              <h1 v-show="slide.visible" class="title_item_experiencia">Productos mexicanos, Proyectos que apoyan
                a cumunidades artesanas en nustro pais
              </h1>
            </div>
          </div>
          <!--<img src="../assets/img/desayunos.jpg" class="card-image" />-->
        </slide>
      </carousel-3d>
    </div>

    <div class="menu_home_bottom">
      <md-button class="md-fab md-mini btnFav">
        <md-icon>home</md-icon>
      </md-button>
      <!--<md-button class="md-fab md-mini md-primary btnHome">
        <md-icon>home</md-icon>
      </md-button>-->
      <md-button class="md-fab md-mini md-plain btnList">
        <md-icon>list_alt</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue";
import { Carousel3d, Slide, Controls } from "vue-carousel-3d";

export default {
  name: "Home",
  data() {
    return {
      categorias: [],
      showSideRight: false,
      experiencias: [
        {
          nombre_categoria: "Desayunos",
        },
        {
          nombre_categoria: "Comidas",
        },
        {
          nombre_categoria: "Cenas",
        },
        {
          nombre_categoria: "Slide name 4",
        },
        {
          nombre_categoria: "Slide name 5",
        },
        {
          nombre_categoria: "Slide name 6",
        },
        {
          nombre_categoria: "Slide name 7",
        },
      ],
      widthItem: 300,
      heightItem: 300,
      widthItemExp: 320,
    };
  },
  components: {
    Carousel3d,
    Slide,
    Controls,
    SideNav,
  },
  methods: {
    openSide() {
      //alert();
      this.showSideRight = true;
      this.$emit("update", true);
    },
    goToSlide(index) {
      this.$refs.mycarousel.goSlide(index);
      
    },
    onAfterSlideChange(index) {
      console.log('s', (index ) + "< " + this.categorias.length)
      //console.log('@onAfterSlideChange Callback Triggered', 'Slide Index -' + (index - 1))
      
      //this.categorias[index - 1].visible = true;
      this.categorias[index].visible = true;
    },
    onBeforeSlideChange(index) {
      if((index + 1) < this.categorias.length)
        this.categorias[index + 1].visible = false;

      if((index + 1) === this.categorias.length)
        this.categorias[0].visible = false;
      

      if((index - 1) >= 0){
        this.categorias[index - 1].visible = false;
        //this.categorias[index + 1].visible = false;
      }else{
        this.categorias[this.categorias.length - 1].visible = false;
      }
      //console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index);
      //this.categorias[index].visible = false;
      
    },
    onLastSlide(index) {
      //this.categorias[index].visible = false;
      
      //console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
    },
    getWindowTam(e) {
      /*if (screen.availWidth < 399) {
        this.widthItem = 250;
        this.heightItem = 285;
      }

      if (screen.availWidth > 400 && screen.availWidth < 599) {
        this.widthItem = 300;
        this.heightItem = 450;
      }

      if (screen.availWidth > 600) {
        this.widthItem = 350;
        this.heightItem = 400;
      }
      console.log(
        "width: " + screen.availWidth + "   height: " + screen.availHeight
      );
      this.heightItem = screen.height - (350);*/
    },
    initCarrousel() {
      this.widthItemExp = screen.availWidth;
      if (screen.availWidth < 400) {
        this.widthItem = 230;
        this.heightItem = screen.height - 368;
      }

      /*if (screen.availWidth > 400 && screen.availWidth < 599) {
        this.widthItem = 300;
        this.heightItem = 420;
        
      }

      if (screen.availWidth > 600) {
        this.widthItem = 300;
        this.heightItem = 400;
      }
      this.heightItem = screen.height - (350);
      if(navigator.userAgent.match(/Android/i)){
        //this.heightItem = screen.height - (400);
        
      }*/
      //alert(this.heightItem + " -- "  +screen.height);
    },
  },
  mounted() {
    const baseURI = "https://pruebasgerard.com/menudigital/index.php/categoria";
    this.$http
      .get(
        baseURI,
        {
          params: {
            id_marca: this.$route.params.id,
            token:
              "e9840b0b4143fc82ef6d8bdb36c96a8dd1cd501be8f3c6f0f3887a80bd70e3fd7b4c9205d524cb1a5502a6325e38e09ab4b8de58d0f0c39f6019aaba682ec8b7",
          },
        },
        { "Access-Control-Allow-Origin": "*" }
      )
      .then((res) => {
        console.log(res.data.registros);
        if (res.data.status === "OK") {
          res.data.registros.map((item) => {
            const obj = {
              id: item.id,
              nombre: item.nombre,
              descripcion: item.descripcion,
              ubicacion: item.ubicacion,
              visible: false
            };
            this.categorias.push(obj);
            //this.sending = false;
          });
          this.$refs.mycarousel.goSlide(0);
          this.$refs.carouselExperiencia.goSlide(0);
        }
      });
    //document.querySelector("body").addEventListener('scroll', this.getWindowHeight());
  },
  created() {
    window.addEventListener("resize", this.getWindowTam);
    this.initCarrousel();

    //window.addEventListener('orientationchange', () => alert('hello'), false);
  },
};
</script>

<style>
body {
  background-color: rgb(31, 31, 31);
  /*height: 100vh;*/
}

.content-experiencias{
  position: fixed;
  bottom: 60px;
}

.carrousel-3d-categorias{
  position: fixed !important;
  top: 60px !important;
}

.carrousel-3d-categorias, .carrousel-3d-categorias > div,
.carrousel-3d-categorias > div > div{
      height: calc(100% - 100px) !important;
}

.title_item_carrousel {
  position: fixed;
  color: #fff;
  border: 2px solid rgb(243, 108, 17);
  padding: 30px;
}

.btnMenuRight {
  background-color: rgb(31, 31, 31) !important;
  position: fixed;
  top: 5px;
  right: 5px;
}

.msgBienvenida {
  position: fixed;
  top: 8px;
  left: 15px;
  color: #fff;
  font-family: AvenirNextLTPro-Regular !important;
  font-weight: normal;
  font-size: 18px;
}

.slide-categorias {
  border-radius: 20px;
}

.slide-experiencias{
  background-color: inherit;
  border: none;
}

.menu_home_bottom {
  position: fixed;
  bottom: 5px;
  left: 50%;
  display: block;
  width: 150px;
  margin-left: -75px;
  background-color: #2f2f2f;
  border-radius: 30px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

.menu_home_bottom > button {
  background-color: initial !important;
  box-shadow: initial;
}

.btnFav {
  float: left;
}

.btnList {
  float: right;
}

.title_experiencias {
  color: #fff;
  position: fixed;
  bottom: 160px;
  left: 25%;
  width: 50%;
}


.title_item_experiencia {
  position: absolute;
  bottom: -0px;
  color: #fff;
  font-size: 8px;
  text-align: center;
  width: 100%;
  line-height: 1;
}

.item_img_experiencia{
  width: 100%;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.content_experiencias{
    background-color: #292828;
    border-radius: 20px;
    width: 90%;
    margin: auto;
    position: fixed;
    bottom: 70px;
    left: 50%;
    margin-left: -45%;
    border: 10px solid black !important;
}

.content_experiencias > div{
  margin: 4px auto !important;
  width: 90% !important;
}

@media (min-width: 320px) and (max-width: 400px) {
  .carrousel-3d-categorias, .carrousel-3d-categorias > div,
.carrousel-3d-categorias > div > div{
      height: calc(100% - 84px) !important;
}

  .title_item_carrousel {
    position: absolute;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    bottom: 50% !important;
    margin-bottom: -35px;
    z-index: 1001;
    padding: 25px;
    text-align: center;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/desayunos.jpg);
    background-size: cover;
    background-position: center;
  }

  .msgBienvenida {
    font-size: 15px;
    top: 5px;
    left: 10px;
  }

  .btnMenuRight {
    top: 0;
    right: 0;
  }

  .menu_home_bottom{
    height: 40px;
  }

  .menu_home_bottom > button{
    margin: 0;
  }

  .carrousel-3d-categorias{
    margin-top: 0 !important;
  }

  .content_experiencias{
   bottom: 50px; 
  }

  .title_experiencias{
    font-size: 12px;
    bottom: 140px;
  }
}

@media (min-width: 400px) and (max-width: 480px) {
  .title_item_carrousel {
    position: fixed;
    width: 250px;
    left: 50%;
    margin-left: -125px;
    bottom: 50% !important;
    margin-bottom: -35px;
    padding: 25px;
    text-align: center;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/desayunos.jpg);
    background-size: cover;
    background-position: center;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .title_item_carrousel {
    position: fixed;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    bottom: 50% !important;
    margin-bottom: -15px;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/desayunos.jpg);
    background-size: cover;
    background-position: center;
  }
}
</style>
