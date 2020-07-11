<template>
  <div class="home" v-bind:style="jsonConfig.dataHome.bgHome">
    <p class="msgBienvenida">¡Hola!</p>
    <!--<button @click="goToSlide(5)">Go to Slide Index 5</button>-->
    <SideNav :showSideRight="showSideRight" :jsonConfig="jsonConfig" />
    <div>
      <md-button
        class="md-fab md-mini btnMenuRight"
        v-bind:style="jsonConfig.dataCategorias.btnTopLeft"
        @click="openSide"
      >
        <md-icon
          class="icon_btn_menu"
          v-bind:style="jsonConfig.dataCategorias.iconBtnTopLeft"
          >menu</md-icon
        >
      </md-button>
      <div>
        <carousel-3d
          class="carrousel-3d-categorias"
          v-bind:class="jsonConfig.dataCategorias.classControls_categorias"
          ref="mycarousel"
          :count="categorias.length"
          :width="widthItem"
          :height="heightItem"
          :space="spaceCategorias"
          :controls-visible="true"
          :controls-width="60"
          :controls-height="0"
        >
          <slide
            :key="i"
            v-for="(slide, i) in categorias"
            :index="i"
            class="slide-categorias"
          >
            <router-link
              :to="{
                path: '/detalles/' + $route.params.id,
                query: {
                  categoria: slide.id,
                  id_unidad: id_unidad,
                  nombre_categoria: slide.nombre,
                  img_categoria: slide.ubicacion,
                },
              }"
            >
              <section v-if="slide.id == -1" class="skeleton">
                <div class="skeleton__header">
                  <div class="skeleton__circle"></div>
                  <div class="skeleton__img"></div>
                  <div class="skeleton__info"></div>
                </div>
              </section>

              <div
                v-if="slide.id !== -1"
                class="item_contain_img"
                v-bind:style="{
                  'background-image':
                    'linear-gradient(rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.63)),url(\'' +
                    slide.ubicacion +
                    '\')',
                }"
              >
                <h1 v-if="false" class="title_item_carrousel">
                  {{ slide.nombre }}
                </h1>
                <img
                  v-if="slide.id !== -1"
                  :src="slide.imagen_titulo_categoria"
                  class="img_title_item_carrousel"
                  alt=""
                />
              </div>
            </router-link>
          </slide>
        </carousel-3d>
      </div>
    </div>

    <h3
      class="title_experiencias"
      v-bind:style="jsonConfig.dataHome.styleTitleExperiencias"
    >
      {{ jsonConfig.dataHome.titleCarrouselExp }}
    </h3>
    <h4 class="subtitle_experiencias">
      {{ jsonConfig.dataHome.subtitleCarrouselExp }}
    </h4>

    <div
      class="content_experiencias"
      v-bind:style="jsonConfig.dataCategorias.styles_content_experiencias"
    >
      <carousel-3d
        ref="carouselExperiencia"
        v-bind:class="jsonConfig.dataCategorias.classControls_categorias"
        :count="experiencias.length"
        :width="widthItemExp"
        :height="100"
        :space="spaceExperiencias"
        @before-slide-change="onBeforeSlideChange"
        @after-slide-change="onAfterSlideChange"
        @last-slide="onLastSlide"
        class="carousel-3d-experiencias"
        :controls-visible="true"
        :controls-width="80"
        :controls-height="60"
      >
        <slide
          :key="i"
          v-for="(slide, i) in experiencias"
          :index="i"
          class="slide-experiencias"
        >
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-100">
              <section v-if="slide.id == -1" class="skeletonExperiencias">
                <div class="skeleton__header item_img_experiencia">
                  <div class="skeleton__circle"></div>
                  <div class="skeleton__img"></div>
                  <div class="skeleton__info"></div>
                </div>
              </section>
              <div
                v-if="slide.id !== -1"
                class="item_img_experiencia"
                v-bind:style="{
                  'background-image': 'url(' + slide.ubicacion + ')',
                  opacity: slide.opacity,
                }"
              ></div>
              <h1
                v-if="slide.id !== -1"
                v-show="slide.visible"
                class="title_item_experiencia"
              >
                {{ slide.descripcion }}
              </h1>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </div>

    <div
      class="menu_home_bottom"
      v-bind:style="jsonConfig.dataCategorias.style_menu_home_bottom"
    >
      <md-button class="md-fab md-mini btnFav" @click="goToHome">
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xml:space="preserve"
          class="icon_home"
        >
          <g>
            <g>
              <path
                class="white"
                d="M503.4,228.9l-43.3-39.4V58.8c0-8.3-6.7-15.1-15.1-15.1H341c-8.3,0-15.1,6.7-15.1,15.1v8.4l-52.2-47.6
			c-10.1-9.2-25.3-9.2-35.4,0L8.6,228.9c-8.1,7.4-10.7,18.7-6.8,28.9c3.9,10.2,13.6,16.8,24.5,16.8H63v209.7
			c0,8.3,6.7,15.1,15.1,15.1h125.9c8.3,0,15.1-6.7,15.1-15.1V356.9h74v127.3c0,8.3,6.7,15.1,15.1,15.1H434c8.3,0,15.1-6.7,15.1-15.1
			V274.5h36.7c10.9,0,20.5-6.6,24.5-16.8C514.1,247.6,511.5,236.2,503.4,228.9z M434,244.4c-8.3,0-15.1,6.7-15.1,15.1v209.7h-95.8
			V341.9c0-8.3-6.7-15.1-15.1-15.1H203.9c-8.3,0-15.1,6.7-15.1,15.1v127.3H93.1V259.5c0-8.3-6.7-15.1-15.1-15.1H36.2L256,44.2
			l74.8,68.2c4.4,4,10.8,5.1,16.2,2.6c5.5-2.4,9-7.8,9-13.8V73.8h74v122.3c0,4.2,1.8,8.3,4.9,11.1l40.8,37.2L434,244.4L434,244.4z"
              />
            </g>
          </g>
        </svg>
      </md-button>
      <md-button class="md-fab md-mini md-plain btnList" @click="verLista">
        <svg class="icon_home" viewBox="0 0 548 542.78">
          <defs></defs>
          <title>
            Recurso 4
          </title>
          <g id="Capa_2" data-name="Capa 2">
            <g id="Capa_1-2" data-name="Capa 1">
              <path
                class="white"
                d="M492,129.71a19.16,19.16,0,0,0-12.64-9L199.17,53.2a19,19,0,0,0-21.54,12.14L70.83,336.65l35.66,13,101.21-258,243.44,62.14c-15.2,47.13-51.38,145.51-86.06,237.11-30.24,79.92-47.63,107.29-80.7,112.88a.16.16,0,0,1-.08-.14C216.71,513.12,217.93,427,217.93,427L2.08,339.77C-13.26,437,61.44,460.37,61.44,460.37l158,71.75s24.74,11.77,51.56,10.57c72.32-1.71,97.74-54.22,129.58-138.36,46-121.59,92.71-257.83,93.17-259.28A18.89,18.89,0,0,0,492,129.71Z"
              />
              <path
                class="white"
                d="M364.27,239.12A18.91,18.91,0,0,0,387.54,226a.33.33,0,0,1,0-.14,19,19,0,0,0-13.31-23.34h0L292,177.14a19,19,0,0,0-11.86,36.1q.92.3,1.86.51Z"
              />
              <path
                class="white"
                d="M235.78,266.43a19,19,0,0,0,12,24l81.81,29.24a18.5,18.5,0,0,0,5.9,1,19,19,0,0,0,6.11-37l-81.78-29.18A19,19,0,0,0,235.78,266.43Z"
              />
              <path
                class="white"
                d="M228.59,333.67A19,19,0,1,0,214,368.77h0a18.3,18.3,0,0,0,2.74.9l82,29.11a18.16,18.16,0,0,0,5.94,1,19,19,0,0,0,5.89-37Z"
              />
              <path
                class="white"
                d="M225.55,155a20.72,20.72,0,0,1,21,20.44v0c0,11.3-9.43,20.45-21,20.45s-21.05-9.15-21.05-20.43S213.93,155,225.55,155Z"
              />
              <path
                class="white"
                d="M195.78,231.06c11.63,0,21.05,9.16,21.05,20.45S207.41,272,195.78,272s-21.05-9.16-21.05-20.46S184.16,231.06,195.78,231.06Z"
              />
              <path
                class="white"
                d="M164,309.49c11.63,0,21.06,9.17,21.06,20.48a21,21,0,1,1-21.52-20.47Z"
              />
              <circle cx="402.78" cy="145.22" r="145.22" style="fill:#f58220" />
              <text
                transform="translate(329.12 231.06)"
                style="font-size:253.79px;fill:#fffdfd;font-family:Avenir-Black,Avenir Black;font-weight:800"
              >
                {{ nPedidos }}
              </text>
            </g>
          </g>
        </svg>
      </md-button>
    </div>

    <ListaParaOrdenar
      v-if="showLista"
      @closeLista="closeLista"
      :listaParaOrdenar="listaParaOrdenar"
      :jsonConfig="jsonConfig"
    />
  </div>
</template>

<script>
//import SideNav from "@/components/SideNav.vue";
import { Carousel3d, Slide, Controls } from "vue-carousel-3d";
//import json from '../assets/config/toks.json'
//import ListaParaOrdenar from "@/components/ListaParaOrdenar.vue";

export default {
  name: "Home",
  data() {
    return {
      categorias: [{ id: -1 }, { id: -1 }, { id: -1 }],
      showSideRight: false,
      experiencias: [
        { id: -1 },
        { id: -1 },
        { id: -1 },
        { id: -1 },
        { id: -1 },
      ],
      widthItem: 250,
      heightItem: 300,
      widthItemExp: 320,
      spaceCategorias: 400,
      spaceExperiencias: 180,
      showLista: false,
      listaParaOrdenar: [],
      nPedidos: 0,
      id_unidad: 0,
      jsonConfig: this.$json,
    };
  },
  components: {
    Carousel3d,
    Slide,
    Controls,
    SideNav: () => import("@/components/SideNav.vue"),
    ListaParaOrdenar: () => import("@/components/ListaParaOrdenar.vue"),
  },
  methods: {
    closeLista() {
      this.showLista = false;
      var lista = "";
      var listaCompraEKS = "listaCompraEKS" + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(listaCompraEKS) === 0) {
          lista = c.substring(listaCompraEKS.length, c.length);
          break;
        }
      }

      if (lista != "") {
        var arr = JSON.parse(lista);
        this.listaParaOrdenar = arr;

        this.nPedidos = this.listaParaOrdenar.length;
      }
    },
    verLista() {
      this.showLista = true;
    },
    goToHome() {
      this.$router.push("/");
    },
    openSide() {
      this.showSideRight = true;
      this.$emit("update", true);
    },
    goToSlide(index) {
      this.$refs.mycarousel.goSlide(index);
    },
    onAfterSlideChange(index) {
      if (this.experiencias.length > 0) {
        this.experiencias[index].visible = true;
        this.experiencias[index].opacity = "1";
      }
    },
    onBeforeSlideChange(index) {
      if (index + 1 < this.experiencias.length) {
        this.experiencias[index + 1].visible = false;
        this.experiencias[index + 1].opacity = ".4";
      }

      if (index + 1 === this.experiencias.length) {
        this.experiencias[0].visible = false;
        this.experiencias[0].opacity = ".4";
      }

      if (index - 1 >= 0) {
        this.experiencias[index - 1].visible = false;
        this.experiencias[index - 1].opacity = ".4";
      } else {
        console.log(this.experiencias);
        if (this.experiencias.length > 0) {
          this.experiencias[this.experiencias.length - 1].visible = false;
          this.experiencias[this.experiencias.length - 1].opacity = ".4";
        }
      }
    },
    onLastSlide(index) {
      //this.categorias[index].visible = false;
      //console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
    },
    getWindowTam(e) {
      if (screen.availWidth < 400) {
        this.widthItem = 270;
        this.spaceCategorias = 355;
        this.spaceExperiencias = screen.availWidth / 3.9;
      }

      if (screen.availWidth > 400 && screen.availWidth < 768) {
        this.spaceExperiencias = screen.availWidth / 3.9;
        this.spaceCategorias = 350;
        this.widthItem = 250;
      }

      if (screen.availWidth > 600 && screen.availWidth < 768) {
        this.spaceExperiencias = screen.availWidth / 3.9;
        this.spaceCategorias = 350;
        this.widthItem = 260;
      }

      if (screen.availWidth > 768 && screen.availWidth < 1024) {
        this.widthItem = 260;
        this.spaceCategorias = 380;
        this.spaceExperiencias = screen.availWidth / 3.9;
      }

      if (screen.availWidth > 1025 && screen.availWidth < 1280) {
        this.widthItem = 260;
        this.spaceCategorias = 330;
        this.spaceExperiencias = screen.availWidth / 3.9;
      }

      if (screen.availWidth > 1281) {
        this.widthItem = 230;
        this.spaceCategorias = 420;
        this.spaceExperiencias = screen.availWidth / 3.9;
      }
    },
    initCarrousel() {
      this.widthItemExp = screen.availWidth;
      if (screen.availWidth < 400) {
        this.widthItem = 270;
        this.spaceCategorias = 355;
        this.spaceExperiencias = screen.availWidth / 3.9;
      }

      if (screen.availWidth > 400 && screen.availWidth < 599) {
        this.spaceExperiencias = screen.availWidth / 3.9;
        this.spaceCategorias = 350;
        this.widthItem = 260;
      }

      if (screen.availWidth > 600 && screen.availWidth < 768) {
        this.spaceExperiencias = screen.availWidth / 3.9;
        this.spaceCategorias = 350;
        this.widthItem = 250;
      }

      if (screen.availWidth > 768 && screen.availWidth < 1024) {
        this.widthItem = 260;
        this.spaceCategorias = 380;
        this.spaceExperiencias = screen.availWidth / 3.9;
      }

      if (screen.availWidth > 1025 && screen.availWidth < 1280) {
        this.widthItem = 230;
        this.spaceCategorias = 330;
        this.spaceExperiencias = screen.availWidth / 3;
      }

      if (screen.availWidth > 1281) {
        this.widthItem = 300;
        this.spaceCategorias = 420;
        this.spaceExperiencias = screen.availWidth / 3;
      }
    },
    consultaExperiencias() {
      //alert(this.$route.params.id);

      const baseURI =
        this.$baseURL + "/menudigital/index.php/experiencia/experiencia_marca";
      this.$http
        .get(
          baseURI,
          {
            params: {
              id_marca: this.$id_marca,
              token:
                "e9840b0b4143fc82ef6d8bdb36c96a8dd1cd501be8f3c6f0f3887a80bd70e3fd7b4c9205d524cb1a5502a6325e38e09ab4b8de58d0f0c39f6019aaba682ec8b7",
            },
          },
          { "Access-Control-Allow-Origin": "*" }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "OK") {
            this.experiencias = [];
            res.data.registros.map((item) => {
              const obj = {
                id: item.id_experiencia,
                nombre: item.nombre_experiencia,
                descripcion: item.descripcion_experiencia,
                ubicacion: item.ubicacion,
                visible: false,
                opacity: ".5",
              };
              this.experiencias.push(obj);
            });
            this.$refs.carouselExperiencia.goSlide(0);
          }
        });
    },
  },
  mounted() {
    var lista = "";

    var listaCompraEKS = "listaCompraEKS" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(listaCompraEKS) === 0) {
        lista = c.substring(listaCompraEKS.length, c.length);
        break;
      }
    }

    this.id_unidad = localStorage.getItem("id_unidad_eks");

    if (lista != "") {
      var arr = JSON.parse(lista);
      this.listaParaOrdenar = arr;
      this.nPedidos = this.listaParaOrdenar.length;
    }

    var id_unidad_consultar = "";
    var primeraVisita = 1;
    if (typeof this.$route.query.unidad === "undefined") {
      //alert("id de cache");
      id_unidad_consultar = this.id_unidad;
    } else {
      // alert("id de url");
      id_unidad_consultar = this.$route.query.unidad;
      localStorage.setItem("id_unidad_eks", id_unidad_consultar);
    }

    var OSName = "Desconocido";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
    if (navigator.appVersion.indexOf("Android") != -1) OSName = "Android";

    if (localStorage.getItem("vsta")) {
      primeraVisita = 0;
    } else {
      //alert("null");
      // localStorage.setItem('vsta',"1");
    }

    //alert(OSName);
    const baseURI =
      this.$baseURL + "/menudigital/index.php/categoria/categorias_sucursal";
    this.$http
      .get(
        baseURI,
        {
          params: {
            id_marca: this.$id_marca,
            id_sucursal: id_unidad_consultar,
            tipo_dispositivo: OSName,
            primera_visita: primeraVisita,
            fecha: "",
            hora: "",
            token:
              "e9840b0b4143fc82ef6d8bdb36c96a8dd1cd501be8f3c6f0f3887a80bd70e3fd7b4c9205d524cb1a5502a6325e38e09ab4b8de58d0f0c39f6019aaba682ec8b7",
          },
        },
        { "Access-Control-Allow-Origin": "*" }
      )
      .then((res) => {
        console.log(res.data.registros);
        if (res.data.status === "OK") {
          this.categorias = [];
          res.data.registros.map((item) => {
            const obj = {
              id: item.id,
              nombre: item.nombre,
              descripcion: item.descripcion,
              ubicacion: item.ubicacion,
              imagen_titulo_categoria: item.imagen_titulo_categoria,
              visible: false,
            };
            this.categorias.push(obj);
          });
          this.$refs.mycarousel.goSlide(0);
        }
      });

    this.consultaExperiencias();
  },

  created() {
    window.addEventListener("resize", this.getWindowTam);
    this.initCarrousel();
  },
};
</script>

<style>
@font-face {
  font-family: Cocogoose-Pro-trial;
  src: url(../assets/fonts/CocogoosePro-trial.ttf);
  font-display: swap;
}

@font-face {
  font-family: AvenirLTStd-Black;
  src: url(../assets/fonts/AvenirLTStd-Black.otf);
  font-display: swap;
}

@font-face {
  font-family: GilliganShutter;
  src: url(../assets/fonts/GilliganShutter.ttf);
  font-display: swap;
}

@font-face {
  font-family: BrushScriptStd;
  src: url(../assets/fonts/BrushScriptStd.otf);
  font-display: swap;
}

body {
  background: #2f2f30 0% 0% no-repeat padding-box;
  opacity: 1;
  /*height: 100vh;*/
}

.primary_color_bg {
  background-color: #f58220;
  fill: #f58220;
}

.second_color_bg {
  fill: #f58220;
  background-color: #f58220;
}

.white {
  fill: #fff;
}

.content-experiencias {
  position: fixed;
  bottom: 60px;
}

.carrousel-3d-categorias {
  position: fixed !important;
  top: 60px !important;
}

.carrousel-3d-categorias > .carousel-3d-controls {
  left: 50%;
  margin-left: -160px;
  width: 320px;
  z-index: 0;
  position: fixed;
  margin-top: 12px;
  top: inherit;
  vertical-align: middle;
  align-items: center;
  display: inline-flex;
  height: 55vh !important;
  height: calc(100% - 295px) !important;
}

.carrousel-3d-categorias > .carousel-3d-controls > a {
  top: 50% !important;
}

.carrousel-3d-categorias > .carousel-3d-controls > a > span,
.carrousel-3d-experiencias > .carousel-3d-controls > a > span {
  /*color: #f58220 !important;
  font-size: 80px !important;*/
}

.carrousel-3d-categorias,
.carrousel-3d-categorias > div,
.carrousel-3d-categorias > div > div {
  height: calc(100% - 100px) !important;
}

.carousel-3d-experiencias {
  height: 85px !important;
}

.carousel-3d-experiencias > .carousel-3d-controls > .prev {
  left: 0;
}

.carousel-3d-experiencias > .carousel-3d-controls > .next {
  right: 0;
}

.carousel-3d-experiencias > .carousel-3d-controls > a {
  line-height: 45px !important;
}

.carousel-3d-experiencias > .carousel-3d-controls > a > span {
  /*}color: #f58220 !important;*/
}

.title_item_carrousel {
  text-transform: uppercase;
  position: fixed;
  color: #fff;
  border: 2px solid rgb(243, 108, 17);
  font-family: AvenirLTStd-Black;
  line-height: 2;
  font-weight: normal;
  width: 96%;
  left: 50%;
  margin-left: -48%;
}

.img_title_item_carrousel {
  text-transform: uppercase;
  position: relative;
  color: #fff;
  font-family: AvenirLTStd-Black;
  line-height: 2;
  font-weight: normal;
  width: 93% !important;
  margin-left: auto;
  margin-right: auto;
  /*left: 50%;
    margin-left: -48%;*/
}

.btnMenuRight {
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box !important;
  border-radius: 25px !important;
  opacity: 1 !important;
  position: fixed;
  top: 10px;
  right: 5px;
  width: 45px !important;
  height: 45px !important;
  /*z-index: 20;*/
}

.msgBienvenida {
  position: fixed;
  top: 2px;
  left: 15px;
  color: #fff;
  font-family: FontMain !important;
  font-weight: normal;
  font-size: 3vh;
}

.slide-categorias {
  border-radius: 20px;
  border: none !important;
  align-items: center;
  vertical-align: middle;
}

.slide-experiencias {
  background-color: inherit;
  border: none;
  height: 100px !important;
}

.menu_home_bottom {
  position: fixed;
  bottom: 5px;
  left: 50%;
  display: block;
  width: 160px;
  margin-left: -80px;
  border-radius: 30px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);

  /* background: transparent linear-gradient(180deg, #2F2F30 0%, #262628 100%) 0% 0% no-repeat padding-box;*/
  box-shadow: 0px 2px 2px #191919;
  border-radius: 25px;
  opacity: 1;
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
  bottom: 170px;
  left: 15%;
  width: 70%;
}

.subtitle_experiencias {
  color: #fff;
  position: fixed;
  bottom: 145px;
  left: 15%;
  width: 70%;
  font-family: GilliganShutter;
}

.title_item_experiencia {
  bottom: 2px;
  color: #fff;
  font-size: 11px;
  text-align: center;
  width: 93%;
  line-height: 1;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 11px;
}

.item_img_experiencia {
  width: 100%;
  height: 50px;
  margin-top: 2px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.content_experiencias {
  /*background-color: #2F2F30;*/
  border-radius: 20px;
  width: 90%;
  margin: auto;
  position: fixed;
  bottom: 70px;
  left: 50%;
  margin-left: -45%;
  /*border: 1px solid rgba(20, 20, 20, 0.596);
  border-bottom: 0.5px solid rgba(151, 151, 151, 0.363);*/
  border-left: rgba(95, 95, 95, 0.596);
  border-right: rgba(95, 95, 95, 0.596);

  /*background: #262628 0% 0% no-repeat padding-box;*/
  box-shadow: 1px 1px 1px #00000059;
  border-radius: 24px;
  opacity: 1;
}

.content_experiencias > div {
  margin: 5px auto !important;
  width: 100% !important;
}

.icon_home {
  width: 28px;
  height: 28px;
}

.carousel-3d-slider {
  z-index: 30;
}

.icon_btn_menu {
  color: #f58220 !important;
}

.item_contain_img {
  position: relative;
  align-items: center;
  vertical-align: middle;
  display: flex !important;
}

@media (min-width: 320px) and (max-width: 400px) {
  .carrousel-3d-categorias > .carousel-3d-controls {
    left: 50%;
    margin-left: -175px;
    width: 350px;
  }

  .carrousel-3d-categorias,
  .carrousel-3d-categorias > div,
  .carrousel-3d-categorias > div > div {
    height: calc(100% - 95px) !important;
  }

  .carrousel-3d-categorias > div {
    vertical-align: middle;
    align-items: center;
    display: flex;
  }

  .title_item_carrousel {
    position: absolute;
    margin-bottom: -15%;
    bottom: inherit !important;
    width: 96%;
    left: 50%;
    margin-left: -48%;
    text-align: center;

    top: calc(50% - 43px) !important;
  }

  .img_title_item_carrousel {
    position: relative;
    /*margin-top: -30%;*/
    bottom: inherit !important;
    width: 96%;
    /*left: 50%;
    margin-left: -48%;
    text-align: center;*/
    /* top: calc(50% - 43px) !important;*/
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .msgBienvenida {
    font-size: 15px;
    top: 5px;
    left: 10px;
  }

  .btnMenuRight {
    top: 10px;
    right: 0;
  }

  .menu_home_bottom {
    height: 40px;
  }

  .menu_home_bottom > button {
    margin: 0;
  }

  .carrousel-3d-categorias {
    margin-top: 0 !important;
  }

  .content_experiencias {
    bottom: 50px;
  }

  .title_experiencias {
    font-size: 2.1vh;
    bottom: 150px;
  }

  .subtitle_experiencias {
    font-size: 1.9vh;
    bottom: 130px;
  }

  .title_item_experiencia {
    font-size: 8px;
  }
  .title_experiencias {
    color: #fff;
    position: fixed;
    left: 50%;
    width: 320px;
    margin-left: -160px;
  }
}

@media (min-width: 400px) and (max-width: 480px) {
  .title_item_carrousel {
    position: absolute;
    width: 96%;
    left: 50%;
    margin-left: -48%;
    top: calc(50% - 40px) !important;

    /*margin-bottom: -60px;
    top: 30% !important;
    margin-bottom: 0px;*/
    text-align: center;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .carrousel-3d-categorias > .carousel-3d-controls {
    left: 50%;
    margin-left: -170px;
    width: 340px;
  }

  .title_experiencias {
    font-size: 1.35em;
  }
}

@media (min-width: 601px) {
  .md-dialog-fullscreen {
    transform: translate(0) !important;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .title_item_carrousel {
    position: absolute;
    top: calc(50% - 40px) !important;
    text-align: center;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .carrousel-3d-categorias > .carousel-3d-controls {
    margin-left: -170px;
    width: 340px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .title_item_carrousel {
    position: absolute;
    width: 96%;
    left: 50%;
    margin-left: -48%;
    top: calc(50% - 40px) !important;
    /*top: 30% !important;
    margin-bottom: 0px;*/
    text-align: center;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .carrousel-3d-categorias > .carousel-3d-controls {
    margin-left: -170px;
    width: 340px;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .title_item_carrousel {
    position: absolute;
    width: 96%;
    left: 50%;
    margin-left: -48%;
    top: calc(50% - 40px) !important;
    /*top: 30% !important;
    margin-bottom: 0px;*/
    text-align: center;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .carrousel-3d-categorias > .carousel-3d-controls {
    margin-left: -170px;
    width: 340px;
  }
}

@media (min-width: 1281px) {
  .carrousel-3d-categorias > .carousel-3d-controls {
    left: 50%;
    margin-left: -190px;
    width: 380px;
  }

  .carrousel-3d-categorias,
  .carrousel-3d-categorias > div,
  .carrousel-3d-categorias > div > div {
    height: calc(100% - 100px) !important;
  }

  .title_item_carrousel {
    position: absolute;
    width: 96%;
    left: 50%;
    margin-left: -48%;
    top: calc(50% - 40px) !important;
    /*top: 30% !important;
    margin-bottom: 0px;*/
    text-align: center;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
}

/*Styles multimarca*/
.carrousel-3d-categoriasToks > .carousel-3d-controls > a > span,
.carrousel-3d-experienciasToks > .carousel-3d-controls > a > span {
  color: #f58220 !important;
  font-family: sans-serif;
  font-size: 65px !important;
}

.carrousel-3d-categoriasBF > .carousel-3d-controls > a > span,
.carrousel-3d-experienciasBF > .carousel-3d-controls > a > span {
  color: #e9bf7d !important;
  font-size: 60px !important;
  font-family: sans-serif;
}

.carrousel-3d-categoriasElFarolito > .carousel-3d-controls > a > span,
.carrousel-3d-experienciasElFarolito > .carousel-3d-controls > a > span {
  color: #fff !important;
  font-size: 60px !important;
  font-family: sans-serif;
}

:root {
  /* --gradient: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);*/
  --gradient: linear-gradient(90deg, #9c9c9c 0, #a2a2a2 56px, #9a9a9a 140px);
  /*--gradient: linear-gradient(164deg, rgba(198,198,198,1) 0%, rgba(187,187,187,1) 40%, rgba(203,203,203,1) 80%);*/
  --grey: #eee;
  --text: #ccc;
  --animation: shine 1.6s infinite linear;
  --animation-header: shine-header 1.6s infinite linear;
}

.skeleton {
  z-index: 100;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 100% !important;
  background-color: white;
  background: inherit;
}

.skeleton__header {
  /*margin-top: 2rem;*/
  width: 100%;
  height: calc(100%) !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*padding: 2rem;*/
}

.skeleton__circle {
  width: 100%;
  height: calc(100%) !important;
  background-image: var(--gradient);
  animation: var(--animation-header);
  background-size: 300px;
  /*border-radius: 50%;*/
  border-radius: 20px;
  background-color: inherit !important;
}

.skeleton__products {
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
}

.skeleton__product {
  width: 100%;
  height: 200px;
  background-image: var(--gradient);
  animation: var(--animation);
  background-size: 300px;
}

/*Skeleton carrousel experiencias */
.skeletonExperiencias {
  z-index: 100;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 70px;
  height: 70px !important;
  background-color: white;
  background: inherit;
}

.skeletonExperiencias__header {
  /*margin-top: 2rem;*/
  width: 100%;
  height: calc(100%) !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*padding: 2rem;*/
}

.skeletonExperiencias__circle {
  width: 100%;
  height: calc(100%) !important;
  background-image: var(--gradient);
  animation: var(--animation-header);
  background-size: 300px;
  /*border-radius: 50%;*/
  border-radius: 20px;
  background-color: inherit !important;
}

.skeletonExperiencias__products {
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
}

.skeletonExperiencias__product {
  width: 100%;
  height: 200px;
  background-image: var(--gradient);
  animation: var(--animation);
  background-size: 300px;
}

@keyframes shine {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 200px;
  }
}

@keyframes shine-header {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 270px;
  }
}
</style>
