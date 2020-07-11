<template>
  <div class="configuracion" v-bind:style="styles.dataSideNavLeftUser.bgColor">
    <p class="nombre_seccion nombre_seccion_lista" v-bind:style="jsonConfig.dataCategorias.styleNombreView">
      LISTA PARA ORDENAR
    </p>
    <div>
      <md-button class="md-fab md-mini btnMenuReturn" @click="closeLista">
        <md-icon class="icon_btn_menu" v-bind:style="jsonConfig.dataCategorias.iconBtnTopLeft">keyboard_arrow_left</md-icon>
      </md-button>

      <!--<md-button class="md-fab md-mini btnMenuRight">
        <md-icon class="icon_btn_menu">menu</md-icon>
      </md-button>-->
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
                  v-bind:src="(typeof(producto.ubicacion_articulo) === 'undefined' || producto.ubicacion_articulo == null) ? 'https://pruebasgerard.com/toks/recs/image-not-found.png' : producto.ubicacion_articulo " 
                  alt="Producto"
                  class="img_producto_lista"
                />
                <p class="delete_prod" @click="deleteProd(i)" v-bind:style="styles.bgDegradedColorPrimary">x</p>
              </md-card-media>
            </md-card>
            <div class="info_prod_list">
              <p class="title_producto_lista">{{ producto.platillo }}</p>
              <p class="title_price_list" v-bind:style="styles.styleBtnHome">${{ parseFloat(producto.precio) }}</p>
            </div>
          </div>
          <div
            class="md-layout-item md-medium-size-20 md-small-size-30 md-xsmall-size-30 item-controls"
          >
            <div class="content_controls " >
              <md-button
                class="md-icon-button controlProd"
                @click="decrement(producto)" v-bind:style="styles.dataCategorias.style_border_primaryColor"
              >
                -
              </md-button>
              <span class="cantidad_productos" for="">{{
                producto.cantidad_articulo
              }}</span>
              <md-button
                class="md-icon-button md-primary controlProd"
                @click="increment(producto)"
                v-bind:style="styles.dataCategorias.style_border_primaryColor"
              >
                +
              </md-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="conten_precio" >
      <p class="title_total_list">TOTAL</p>
      <p class="total_list" v-bind:style="styles.dataCategorias.style_border_primaryColor">${{ parseFloat(total) }}</p>
    </div>


    <md-dialog
      :md-active.sync="showDialogYaOrdene"
      class="dialog_producto_yaordene"
      v-bind:class="styles.dataHome.classDialogCustom"
    >
      <div class="content_detalle content_dialog_yaordene">
        <p class="desc_gracias">
          ¡Gracias por tu preferencia!
        </p>
        <md-button
          class="md-raised md-accent btn_add_orden"
          @click="showYaOrdene"
          v-bind:style="styles.bgDegradedColorPrimary"
        >
          OK
        </md-button>
      </div>
    </md-dialog>

    <md-button class="md-raised md-accent btnYaOrdene" @click="yaOrdene" v-bind:style="styles.bgDegradedColorPrimary">
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
    jsonConfig: Object,
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
      styles: this.jsonConfig,
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
    showYaOrdene(){
      this.showDialogYaOrdene = false;
      this.$router.go(-1);
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


.btnMenuRight {
  background-color: rgb(31, 31, 31) !important;
  position: fixed;
  top: 10px;
  right: 3px;
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

.dialog_producto_yaordene > div{
  z-index: 30;
  border-radius: 15px !important;
  background: inherit !important;
}

.dialog_producto_yaordene > div {
  /*background-color: inherit !important;*/
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
  height: 145px !important;
  width: 145px !important;
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
  top: -12px;
  right: 3px;
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
  /*border: 1px solid #f58220;*/
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
  /*border: 1px solid #f58220;*/
  border-radius: 5px;
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
  height: 48vh !important;
  overflow: auto;
}

.content_dialog_yaordene {
  
  border: none !important;
  background: inherit;
}

.dialog_producto_yaordene > div {
  width: 70% !important;
  height: auto !important;
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
    background-size: cover;
    background-position: center;
  }

  .nombre_seccion {
    font-size: 20px !important;
    top: 5px;
    left: 50%;
    width: 200px !important;
    margin-left: -25% !important;
    font-size: 14px !important;
  }

  .btnMenuRight {
    top: 12px;
    right: 0;
  }

  .menu_home_bottom {
    height: 40px;
  }

  .menu_home_bottom > button {
    margin: 0;
  }

  .img_producto_lista {
        height: 130px !important;
    width: 130px !important;
  }
  
  .content_list_products{
    height: 42vh !important;
  }
}

@media (min-width: 370px) and (max-width: 400px) {
  .content_list_products{
    height: 45vh !important;
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


/**/
.dialog_customToks > div {
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
}

.dialog_customBF > div {
  background: transparent
    linear-gradient(
      180deg,
      var(--unnamed-color-00000000) 0%,
      var(--unnamed-color-191919) 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px var(--unnamed-color-00000000);
  background: transparent linear-gradient(180deg, #000000 0%, #191919 100%) 0%
    0% no-repeat padding-box;
}

.dialog_customElFarolito > div {
  background: transparent linear-gradient(180deg, #CF1A33 0%, #AD182D 100%) 0%
    0% no-repeat padding-box;
}
</style>
