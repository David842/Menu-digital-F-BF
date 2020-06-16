<template>
  <div class="configuracion">
    <p class="nombre_seccion nombre_seccion_lista">
      LISTA PARA ORDENAR
    </p>
    <div>
      <md-button class="md-fab md-mini btnMenuReturn" @click="closeLista">
        <md-icon class="icon_btn_menu">keyboard_arrow_left</md-icon>
      </md-button>

      <md-button class="md-fab md-mini btnMenuRight">
        <md-icon class="icon_btn_menu">menu</md-icon>
      </md-button>
    </div>

    <div class="md-layout md-gutter content_info_lista">
      <div class="md-layout-item md-layout md-gutter">
        <div
          class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100"
        >
          <h2 class="desc_info">
            Esta es tu lista para ordenar.<br />
            En breve estaremos contigo para tomar tu orden.
          </h2>
        </div>
      </div>
    </div>

    <div class="content_list_products">
      <div
        class="md-layout md-gutter content_card_prod"
        :key="i"
        v-for="(producto, i) in listaDeOrden"
        :index="i"
      >
        <div class="md-layout-item md-layout md-gutter">
          <div
            class="md-layout-item md-large-size-80 md-medium-size-80 md-small-size-70 md-xsmall-size-70 item-info-prod"
          >
            <md-card class="card_producto card_producto_list">
              <md-card-media>
                <img
                  v-bind:src="producto.ubicacion_articulo"
                  alt="Producto"
                  class="img_producto_lista"
                />
                <p class="delete_prod" @click="deleteProd(i)">x</p>
              </md-card-media>
            </md-card>
            <div class="info_prod_list">
              <p class="title_producto_lista">{{ producto.platillo }}</p>
              <p class="title_price_list">${{ parseFloat(producto.precio) }}</p>
            </div>
          </div>
          <div
            class="md-layout-item md-medium-size-20 md-small-size-30 md-xsmall-size-30 item-controls"
          >
            <div class="content_controls">
              <md-button
                class="md-icon-button controlProd"
                @click="decrement(producto)"
              >
                -
              </md-button>
              <span class="cantidad_productos" for="">{{
                producto.cantidad_articulo
              }}</span>
              <md-button
                class="md-icon-button md-primary controlProd"
                @click="increment(producto)"
              >
                +
              </md-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="conten_precio">
      <p class="title_total_list">TOTAL</p>
      <p class="total_list">${{ parseFloat(total) }}</p>
    </div>

    <!--<div class="menu_home_bottom">
      <md-button class="md-fab md-mini btnFav" @click="goToHome">
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
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
      <md-button class="md-fab md-mini md-plain btnList">
        <svg
          class="icon_home"
          id="Capa_1"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 494.64 489.93"
        >
          <title>
            Lista
          </title>
          <path
            class="white"
            d="M492,79.22a19.11,19.11,0,0,0-12.64-9L199.17,2.71a19,19,0,0,0-21.54,12.14L70.83,286.16l35.66,13,101.21-258L451.14,103.3c-15.2,47.13-51.38,145.51-86.06,237.11-30.24,79.92-47.63,107.29-80.7,112.88a.2.2,0,0,1-.08-.14c-67.59,9.48-66.37-76.68-66.37-76.68L2.08,289.28c-15.34,97.22,59.36,120.6,59.36,120.6l158,71.75S244.18,493.4,271,492.2c72.32-1.71,97.74-54.22,129.58-138.36,46-121.59,92.71-257.83,93.17-259.28A18.81,18.81,0,0,0,492,79.22Z"
            transform="translate(0 -2.36)"
          />
          <path
            class="white"
            d="M364.27,188.63a18.9,18.9,0,0,0,23.31-13.28A19,19,0,0,0,374.26,152L292,126.65a19,19,0,1,0-10,36.61Z"
            transform="translate(0 -2.36)"
          />
          <path
            class="white"
            d="M235.78,215.94a19,19,0,0,0,12,24l81.81,29.24a18.73,18.73,0,0,0,5.9,1,19,19,0,0,0,6.11-37L259.82,204A19,19,0,0,0,235.78,215.94Z"
            transform="translate(0 -2.36)"
          />
          <path
            class="white"
            d="M228.59,283.18a19,19,0,1,0-11.82,36l82,29.11a18.28,18.28,0,0,0,5.94,1,19,19,0,0,0,5.89-37Z"
            transform="translate(0 -2.36)"
          />
          <path
            class="white"
            d="M225.55,104.52c11.62,0,21,9.16,21,20.46s-9.43,20.45-21,20.45S204.5,136.28,204.5,125,213.93,104.52,225.55,104.52Z"
            transform="translate(0 -2.36)"
          />
          <path
            class="white"
            d="M195.78,180.57c11.63,0,21.05,9.16,21.05,20.45s-9.42,20.44-21.05,20.44S174.73,212.3,174.73,201,184.16,180.57,195.78,180.57Z"
            transform="translate(0 -2.36)"
          />
          <path
            class="white"
            d="M164,259c11.63,0,21.06,9.17,21.06,20.48S175.66,300,164,300,143,290.81,143,279.52,152.41,259,164,259Z"
            transform="translate(0 -2.36)"
          />
        </svg>
      </md-button>
    </div>-->

    <md-dialog
      :md-active.sync="showDialogYaOrdene"
      class="dialog_producto_yaordene"
    >
      <div class="content_detalle content_dialog_yaordene">
        <p class="desc_gracias">
          ¡Gracias por tu preferencia!
        </p>
        <md-button
          class="md-raised md-accent btn_add_orden"
          @click="showDialogYaOrdene = false"
        >
          OK
        </md-button>
      </div>
    </md-dialog>

    <md-button class="md-raised md-accent btnYaOrdene" @click="yaOrdene">
      Ya ordené
    </md-button>
  </div>
</template>

<script>
export default {
  name: "Lista",
  props: {
    showConfiguracion: Boolean,
    listaParaOrdenar: Array,
  },
  data() {
    return {
      clickCloseConf: this.showConfiguracion,
      showList: this.showLista,
      categorias: [],
      showSideRight: false,
      experiencias: [],
      widthItem: 300,
      heightItem: 300,
      widthItemExp: 320,
      showDialogYaOrdene: false,
      nombre_seccion: "Seccion",
      img_categoria: "../assets/img/Chilaquiles-mayas.jpg",
      articuloSelected: {
        platillo: "Producto",
        descripcion_articulo: "Descripcion",
      },
      listaDeOrden: this.listaParaOrdenar,
      total: 0,
    };
  },
  methods: {
    decrement(articulo) {
      if (articulo.cantidad_articulo > 1) {
        articulo.cantidad_articulo = articulo.cantidad_articulo - 1;
        this.calcularTotal();
        this.saveToCookie();
      }
    },
    increment(articulo) {
      articulo.cantidad_articulo = articulo.cantidad_articulo + 1;
      this.calcularTotal();
      this.saveToCookie();
    },
    closeConfiguracion() {
      this.clickCloseConf = false;
      this.$emit("closeConfiguration");
      //alert(this.clickCloseConf);
    },
    closeDialog() {
      this.showDialogYaOrdene = false;
    },
    openDialog(articulo) {
      console.log(articulo);
      this.articuloSelected = articulo;
      this.showDialogYaOrdene = true;
    },
    goToHome() {
      this.$router.push("/Home/1");
    },
    goBack() {
      //this.$router.push("/detalles/1");
      this.clickCloseLista = false;
    },
    closeLista() {
      this.clickCloseLista = false;
      this.$emit("closeLista");
    },
    calcularTotal() {
      this.total = 0;
      this.listaDeOrden.map((articulo) => {
        console.log(articulo.cantidad_articulo);
        this.total = this.total + articulo.precio * articulo.cantidad_articulo;
      });
    },
    deleteProd(index) {
      this.listaDeOrden.splice(index, 1);
      this.calcularTotal();
      this.saveToCookie();
      //alert(index);
    },
    yaOrdene() {
      if (this.listaDeOrden.length !== 0) {
        this.listaDeOrden = [];
        this.calcularTotal();
        this.showDialogYaOrdene = true;
        this.saveToCookie();
      }
    },
    saveToCookie() {
      var json_str = JSON.stringify(this.listaDeOrden);
      document.cookie = "listaCompraEKS=" + json_str;
    },
  },
  mounted() {
    var lista;
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
    console.log(lista + " ---");
    if (lista != null && lista != "") {
      var arr = JSON.parse(lista);
      this.listaDeOrden = arr;
      console.log(arr);
      console.log(this.listaDeOrden);
      this.calcularTotal();
    }
  },

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
  z-index: 7;
  top: 0;
  border: none !important;
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
  box-shadow: none !important;
  opacity: 1;
  margin-left: -1px;
  width: 101vw;
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

.banner_categoria {
  background-size: cover;
  background-position: center;
  display: block;
  position: fixed;
  top: 80px;
  width: 100%;
  height: calc(33%);
}

.btnMenuRight {
  background-color: rgb(31, 31, 31) !important;
  position: fixed;
  top: 5px;
  right: 5px;
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  box-shadow: none;
}

.btnMenuReturn {
  background-color: inherit !important;
  box-shadow: none;
  position: fixed;
  top: 9px;
  left: 0;
}

.btnMenuReturn > div > div > i {
  font-size: 48px !important;
}

.nombre_seccion {
  position: fixed;
  top: 5px;
  left: 50%;
  width: 290px !important;
  margin-left: -145px;
  color: #fff;
  font-family: AvenirNextLTPro-Regular !important;
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

.nombre_seccion_lista {
  margin-left: -145px !important;
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
  background-color: inherit !important;
}

.card_producto > div{
  
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

.dialog_producto_yaordene {
  z-index: 30;
}

.dialog_producto_yaordene > div {
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

.content_info_lista {
  margin-top: 75px;
  margin-bottom: 15px;
}

.content_card_prod > div > div {
  display: inline-flex;
}

.img_producto_lista {
  height: 150px !important;
  width: 150px !important;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
}

.delete_prod {
  background-color: #f58220;
  width: 20px !important;
  height: 15px;
  text-align: center;
  padding: -5px !important;
  font-weight: bold;
  border-radius: 100%;
  position: absolute;
  display: inline-table;
  top: -14px;
  right: 7px;
}

.title_producto_lista {
  color: #eee;
  padding-left: 8px;
  text-align: left;
  font-style: italic;
}

.title_price_list {
  position: relative;
  color: #eee;
  text-align: center;
  margin-left: 8px;

  background: transparent linear-gradient(180deg, #f58220 0%, #db6500 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #000000b0;
  opacity: 1;
  font-style: italic;
  width: 70px;
}

.controlProd {
  color: #fff !important;
  font-size: 20px;
  border: 1px solid #f58220;
  border-radius: 5px;
  height: 30px !important;
  min-width: 30px !important;
  width: 30px !important;
}

.cantidad_productos {
  color: #fff;
  padding-top: 7px !important;
  display: inline-block;
  font-style: italic;
}

.item-controls {
  position: relative;
}

.item-info-prod {
  position: relative;
}

.content_controls {
  position: absolute;
  bottom: 18px;
  display: flex;
}

.info_prod_list {
  position: absolute;
  bottom: 0;
  right: 0 !important;
  width: 100%;
  padding-left: 150px;
}

.conten_precio {
  position: fixed;
  bottom: 15vh;
  right: 40px;
  display: inline-flex;
}

.total_list {
  color: #eee;
  border: 1px solid #f58220;
  padding-top: 5px;
  padding-bottom: 1px;
  padding-left: 40px;
  padding-right: 3px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
}

.title_total_list {
  color: #eee;
  padding-top: 7px;
  font-size: 18px;
  padding-right: 15px !important;
  font-style: italic;
}

.btnYaOrdene {
  text-transform: inherit;
  font-weight: bold;
  width: 150px;
  position: fixed;
  left: 50%;
  margin-left: -75px;
  bottom: 5vh;
  background: transparent linear-gradient(180deg, #f58220 0%, #db6500 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #000000b0;
  border-radius: 27px;
  opacity: 1;
  font-size: 22px;
}

.content_list_products {
  height: 56vh !important;
  overflow: auto;
}

.content_dialog_yaordene {
  border: none !important;
}

.dialog_producto_yaordene > div {
  width: 70% !important;
}

.desc_gracias {
  color: #eee;
  text-align: center;
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
    background-image: url(../assets/img/desayunos.jpg);
    background-size: cover;
    background-position: center;
  }

  .nombre_seccion {
    font-size: 20px !important;
    top: 5px;
    left: 50%;
    width: 180px;
    margin-left: -145px;
    font-size: 14px;
  }

  .btnMenuRight {
    top: 15px;
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
  .dialog_producto_yaordene > div {
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
    background-image: url(../assets/img/desayunos.jpg);
    background-size: cover;
    background-position: center;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .dialog_producto_yaordene > div {
    width: 40% !important;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .dialog_producto_yaordene > div {
    width: 30% !important;
  }
}

@media (min-width: 1281px) {
  .dialog_producto_yaordene > div {
    width: 30% !important;
  }

  .info_prod_list {
    padding-left: 170px;
  }
}
</style>
