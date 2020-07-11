<template>
  <div class="configuracion">
    <p class="nombre_seccion">
      FORMAS DE PAGO
    </p>
    <!--<button @click="goToSlide(5)">Go to Slide Index 5</button>-->
    <SideNav :showSideRight="showSideRight" />
    <div>
      <md-button 
        class="md-fab md-mini btnMenuReturn"
        @click="closeConfiguracion"
      >
        <md-icon class="icon_btn_menu">keyboard_arrow_left</md-icon>
      </md-button>

      <md-button class="md-fab md-mini btnMenuRight">
        <md-icon class="icon_btn_menu">menu</md-icon>
      </md-button>
    </div>

    <md-divider class="divider_custom"></md-divider>

    <div class="menu_home_bottom">
      <md-button class="md-fab md-mini btnFav" @click="goToHome">
        <md-icon>home</md-icon>
      </md-button>
      <!--<md-button class="md-fab md-mini md-primary btnHome">
        <md-icon>home</md-icon>
      </md-button>-->
      <md-button class="md-fab md-mini md-plain btnList">
        <md-icon>list_alt</md-icon>
      </md-button>
    </div>

    <md-dialog :md-active.sync="showDialog" class="dialog_producto_detalle">
      <md-button class="md-fab md-mini btn_close" @click="closeDialog">
        <md-icon class="icon_btn_menu">close</md-icon>
      </md-button>

      <div class="content_detalle">
        <div
          class="imagen_prod_detalle"
          v-bind:style="{
            'background-image':
              'url(' + articuloSelected.ubicacion_articulo + ')',
          }"
        ></div>
        <h3 class="title_platillo_detalle">{{ articuloSelected.platillo }}</h3>
        <p class="desc_platillo_detalle">
          {{ articuloSelected.descripcion_articulo }}
        </p>
        <!--<p class="indicacion_platillo_detalle">Indicaciones adicionales</p>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-size-85">
            <md-field class="field_indicaciones">
              <md-textarea
                name="idicaciones"
                id="idicaciones"
                autocomplete="text"
                type="text"
                class="indicaciones"
              />
            </md-field>
          </div>
        </div>-->
        <md-button class="md-raised md-accent btn_add_orden">
          AGREGAR A MI ORDEN
        </md-button>
      </div>
    </md-dialog>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue";
import { Carousel3d, Slide, Controls } from "vue-carousel-3d";

export default {
  name: "Configuracion",
  props: {
    showConfiguracion: Boolean,
  },
  data() {
    return {
      clickCloseConf: this.showConfiguracion,
      categorias: [],
      showSideRight: false,
      experiencias: [],
      widthItem: 300,
      heightItem: 300,
      widthItemExp: 320,
      showDialog: false,
      nombre_seccion: "Seccion",
      img_categoria: "../assets/img/Chilaquiles-mayas.jpg",
      articuloSelected: {
        platillo: "Producto",
        descripcion_articulo: "Descripcion",
      },
    };
  },
  components: {
    Carousel3d,
    Slide,
    Controls,
    SideNav,
  },
  methods: {
    closeConfiguracion() {
      this.clickCloseConf = false;
      this.$emit("closeConfiguration");
      //alert(this.clickCloseConf);
    },
    closeDialog() {
      this.showDialog = false;
    },
    openDialog(articulo) {
      console.log(articulo);
      this.articuloSelected = articulo;
      this.showDialog = true;
    },
    goToHome() {
      this.$router.push("/Home/1");
    },
    goBack() {
      //this.$router.push("/detalles/1");
      this.clickCloseLista = false;
    },
    verLista() {
      this.clickCloseLista = false;
      this.$emit("verLista");
    },
  },
  mounted() {},

  created() {
    window.addEventListener("resize", this.getWindowTam);

    //window.addEventListener('orientationchange', () => alert('hello'), false);
  },
};
</script>

<style>
.configuracion {
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  z-index: 20;
  top: 0;
  border: 1px solid rgba(54, 54, 54, 0.418);
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
  box-shadow: none !important;
  opacity: 1;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
  width: 0px;
}

::-webkit-scrollbar:horizontal {
  height: 0px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid #464646;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #353535;
}

.btnMenuRight {
  background-color: rgb(31, 31, 31) !important;
  position: fixed;
  top: 10px;
  right: 5px;
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  box-shadow: none;
}

.btnMenuReturn {
  background-color:inherit !important;
  box-shadow: none;
  position: fixed;
  top: 9px;
  left: 0;
}

.btnMenuReturn > div > div > i{
  font-size: 48px !important;
}

.nombre_seccion {
  position: fixed;
  top: 0px;
  left: 50%;
  width: 250px;
  margin-left: -125px;
  color: #fff;
  font-family: FontMain !important;
  font-weight: 200;
  font-size: 23px !important;
  text-transform: uppercase;
  background-color: rgb(31, 31, 31);
  border: 1px solid rgba(54, 54, 54, 0.418);
  padding-top: 13px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  margin-top: 10px !important;

  background: transparent linear-gradient(180deg, #2f2f30 0%, #2f2f30 100%) 0%
    0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
}

.productos {
  position: fixed;
  top: calc(34% + 80px);
  width: 100%;
  height: calc(100% - 46%);
  overflow-y: auto;
}

.title_subcategoria {
  color: #eee;
  left: 8px;
  margin-left: 12px;
  text-align: left;
  margin-top: 0;

  margin: auto;
  margin-left: 11px;
  margin-top: 3px;
  margin-bottom: 3px;
}

.img_producto {
  object-fit: cover;
  height: 150px !important;
  width: 150px !important;
  object-position: center;
  border-radius: 25px !important;
}

.card_producto {
  height: 150px !important;
  width: 150px !important;
  margin: 0 !important;
  border-radius: 25px !important;
  display: inline-block;

  width: 100px;
  height: 50px;
  margin: 0 10px 0 0 !important;
  padding: 0;
  display: inline-block;
  box-shadow: none;
}

.header_title {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

.price {
  color: #eee;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: orange;
  width: 50%;
}

.title_producto {
  color: #eee !important;
  opacity: inherit !important;
  position: absolute;
  width: 100%;
  text-align: center;
  left: 0;
  bottom: -40px;
  white-space: break-spaces;
  height: 38px;

  display: grid;
  vertical-align: middle;
  line-height: normal;
  align-items: center;
}

.subcategoria {
  height: 30px;

  width: auto;
  height: 210px;
  padding: 10px;
  white-space: nowrap;
  overflow-x: auto;
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

.precio_producto {
  position: absolute !important;
  bottom: 0;
  right: 0;
  height: 25px;
  width: 50px;
  background-color: orange !important;
  color: #eee;
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

.dialog_producto_detalle > div {
  background-color: inherit !important;
  width: 80% !important;
}

.imagen_prod_detalle {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 30vh;
  display: block;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.title_platillo_detalle {
  color: orange !important;
  padding-left: 20px;
  font-weight: normal;
}

.desc_platillo_detalle {
  color: #eee;
  padding-left: 20px;
}

.indicacion_platillo_detalle {
  margin-top: 10px;
  color: orange !important;
  padding-left: 20px;
  margin-bottom: 2px;
  font-size: 12px;
}

.field_indicaciones {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

.indicaciones {
  border: solid 1px rgba(75, 75, 75, 0.712) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, 0.87) !important;
  height: 60px !important;
  min-height: 30px !important;
}

.content_detalle {
  border-radius: 25px !important;
  border: solid 2px orange;
  background-color: rgb(36, 36, 36);
}

.btn_add_orden {
  background-color: orange !important;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: block;
  padding-left: 15px !important;
  padding-right: 15px !important;
  border-radius: 25px;
}

.btn_close {
  position: absolute;
  right: -10px;
  z-index: 10;
  top: 0;
  width: 100%;
  padding-left: 2px !important;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 0px;
  background-color: orange !important;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

.btn_close > div > div > i {
  color: rgb(0, 0, 0) !important;
}

.divider_custom{ 
  height: 2.5px;
      margin-top: 75px !important;
}

@media (min-width: 320px) and (max-width: 400px) {
  .btn_close {
    right: 7%;
    top: 9%;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .nombre_seccion {
    font-size: 2.3vh !important;
    top: 5px;
    left: 50%;
    width: 180px;
    margin-left: -90px;
    font-size: 14px;
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
}

@media (min-width: 400px) and (max-width: 480px) {
}

@media (min-width: 600px) and (max-width: 767px) {
  .dialog_producto_detalle > div {
    width: 50% !important;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .imagen_prod_detalle {
    height: 35vh;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
}
</style>
