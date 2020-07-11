<template>
  <div class="configuracion fromas_de_pago" v-bind:style="styles.dataSideNavLeftUser.bgColor">
    <p class="nombre_seccion" v-bind:style="styles.dataCategorias.styleNombreView">
      FORMAS DE PAGO
    </p>
    <!--<button @click="goToSlide(5)">Go to Slide Index 5</button>-->
    <SideNav :showSideRight="showSideRight" />
    <div>
      <md-button
        class="md-fab md-mini btnMenuReturn"
        @click="closeView"
      >
        <md-icon class="icon_btn_menu" v-bind:style="styles.dataCategorias.iconBtnTopLeft">keyboard_arrow_left</md-icon>
      </md-button>
    </div>

    <md-divider class="divider_custom" v-bind:style="styles.bgDegradedColorPrimary"></md-divider>

    <div class="md-layout md-gutter">
      <div class="md-layout-item md-layout md-gutter content_forma">
        <div
          class="md-layout-item md-medium-size-20 md-small-size-30 md-xsmall-size-25"
        >
          <svg
            class="ic_forma"
            version="1.2"
            baseProfile="tiny"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  v-bind:style="styles.fiillColorPrimary"
                  d="M267.3,241.2h-22.5c-4.3,0-7.7-3.5-7.7-7.7v-11.3c0-4.3,3.5-7.7,7.7-7.7h22.5c4.3,0,7.7,3.5,7.7,7.7
			c0,8.2,6.6,14.8,14.8,14.8s14.8-6.6,14.8-14.8c0-19.4-14.8-35.3-33.8-37.1v-7.9c0-8.2-6.6-14.8-14.8-14.8s-14.8,6.6-14.8,14.8v7.9
			c-18.9,1.8-33.8,17.7-33.8,37.1v11.3c0,20.6,16.7,37.3,37.3,37.3h22.5c4.3,0,7.7,3.5,7.7,7.7v11.3c0,4.3-3.5,7.7-7.7,7.7h-22.5
			c-4.3,0-7.7-3.5-7.7-7.7c0-8.2-6.6-14.8-14.8-14.8c-8.2,0-14.8,6.6-14.8,14.8c0,19.4,14.8,35.3,33.8,37.1v7.9
			c0,8.2,6.6,14.8,14.8,14.8s14.8-6.6,14.8-14.8v-7.9c18.9-1.8,33.8-17.7,33.8-37.1v-11.3C304.5,258,287.8,241.2,267.3,241.2z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  v-bind:style="styles.fiillColorPrimary"
                  d="M497.2,83.7H14.8C6.6,83.7,0,90.3,0,98.5v315.1c0,8.2,6.6,14.8,14.8,14.8h482.5c8.2,0,14.8-6.6,14.8-14.8V98.5
			C512,90.3,505.4,83.7,497.2,83.7z M482.5,398.8H29.5V113.2h452.9L482.5,398.8L482.5,398.8z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  v-bind:style="styles.fiillColorPrimary"
                  d="M118.2,142.8H73.8c-8.2,0-14.8,6.6-14.8,14.8v39.4c0,8.2,6.6,14.8,14.8,14.8s14.8-6.6,14.8-14.8v-24.6h29.5
			c8.2,0,14.8-6.6,14.8-14.8S126.3,142.8,118.2,142.8z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  v-bind:style="styles.fiillColorPrimary"
                  d="M438.2,142.8h-44.3c-8.2,0-14.8,6.6-14.8,14.8s6.6,14.8,14.8,14.8h29.5v24.6c0,8.2,6.6,14.8,14.8,14.8s14.8-6.6,14.8-14.8
			v-39.4C452.9,149.4,446.3,142.8,438.2,142.8z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  v-bind:style="styles.fiillColorPrimary"
                  d="M118.2,339.7H88.6v-24.6c0-8.2-6.6-14.8-14.8-14.8s-14.8,6.6-14.8,14.8v39.4c0,8.2,6.6,14.8,14.8,14.8h44.3
			c8.2,0,14.8-6.6,14.8-14.8S126.3,339.7,118.2,339.7z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                 v-bind:style="styles.fiillColorPrimary"
                  d="M438.2,300.3c-8.2,0-14.8,6.6-14.8,14.8v24.6h-29.5c-8.2,0-14.8,6.6-14.8,14.8s6.6,14.8,14.8,14.8h44.3
			c8.2,0,14.8-6.6,14.8-14.8v-39.4C452.9,306.9,446.3,300.3,438.2,300.3z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div
          class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-70"
        >
          <h2 class="desc_pago">Efectivo.</h2>
        </div>
        <div
          class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        ></div>
      </div>
    </div>

    <div class="md-layout md-gutter content_forma">
      <div class="md-layout-item md-layout md-gutter">
        <div
          class="md-layout-item md-medium-size-20 md-small-size-30 md-xsmall-size-25"
        >
          <svg
            class="ic_forma"
            version="1.2"
            baseProfile="tiny"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 17.3 17.3"
            xml:space="preserve"
          >
            <g>
              <path
                v-bind:style="styles.fiillColorPrimary"
                d="M12.2,3.6C11,3.6,9.8,4,9,4.7C8,3.8,6.7,3.3,5.3,3.3C2.4,3.3,0,5.7,0,8.6S2.4,14,5.3,14
		C6.7,14,8,13.4,9,12.5c0.9,0.7,2,1.2,3.2,1.2c2.8,0,5.1-2.3,5.1-5.1S15,3.6,12.2,3.6z M12.2,12.4c-0.9,0-1.7-0.3-2.4-0.9
		c0.5-0.8,0.9-1.8,0.9-2.9s-0.3-2.1-0.9-2.9c0.6-0.5,1.5-0.9,2.4-0.9c2.1,0,3.7,1.7,3.7,3.7S14.2,12.4,12.2,12.4z"
              />
            </g>
          </svg>
        </div>
        <div
          class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-70"
        >
          <h2 class="desc_pago">
            Tarjetas bancarias: Visa, Mastercard y American Express.
          </h2>
        </div>
        <div
          class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        ></div>
      </div>
    </div>

    <div class="md-layout md-gutter content_forma">
      <div class="md-layout-item md-layout md-gutter">
        <div
          class="md-layout-item md-medium-size-20 md-small-size-30 md-xsmall-size-25"
        >
          <svg class="ic_forma" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" viewBox="0 0 469.3 469.3" xml:space="preserve">
<g>
	<g>
		<g>
			<path v-bind:style="styles.fiillColorPrimary"  d="M448,236.6v-66c0-22.4-17.4-40.6-39.3-42.3l-61.3-107c-5.7-9.9-14.8-17-25.8-19.9c-10.9-2.9-22.3-1.4-32.1,4.3L79.6,128
				H42.7C19.1,128,0,147.1,0,170.7v256c0,23.5,19.1,42.7,42.7,42.7h362.7c23.5,0,42.7-19.1,42.7-42.7v-66
				c12.4-4.4,21.3-16.1,21.3-30v-64C469.3,252.8,460.4,241.1,448,236.6z M383.9,128h-93l69.7-40.6L383.9,128z M350.1,68.9L248.6,128
				h-42.1l133.1-77.5L350.1,68.9z M300.3,24.2c4.8-2.8,10.5-3.6,15.8-2.1c5.4,1.5,10,5,12.8,9.9l0,0l-164.9,96H122L300.3,24.2z
				 M426.7,426.7c0,11.8-9.6,21.3-21.3,21.3H42.7c-11.8,0-21.3-9.6-21.3-21.3v-256c0-11.8,9.6-21.3,21.3-21.3h362.7
				c11.8,0,21.3,9.6,21.3,21.3v64h-64c-35.3,0-64,28.7-64,64s28.7,64,64,64h64L426.7,426.7L426.7,426.7z M448,330.7
				c0,5.9-4.8,10.7-10.7,10.7h-74.7c-23.5,0-42.7-19.1-42.7-42.7c0-23.5,19.1-42.7,42.7-42.7h74.7c5.9,0,10.7,4.8,10.7,10.7V330.7z"
				/>
			<path v-bind:style="styles.fiillColorPrimary" d="M362.7,277.3c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3C384,286.9,374.4,277.3,362.7,277.3z"/>
		</g>
	</g>
</g>
</svg>
        </div>
        <div
          class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-70"
        >
          <h2 class="desc_pago">
            Vales de papel y electrónicos: Edenred, Efectivale, Sodexo, Ecovale y Sí vale.
          </h2>
        </div>
        <div
          class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        ></div>
      </div>
    </div>

    <div class="md-layout md-gutter content_info">
      <div class="md-layout-item md-layout md-gutter">
        
        <div
          class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100"
        >
          <h2 class="desc_info">
            Nuestros precios están en M.N. e incluyen I.V.A.
          </h2>
        </div>
      </div>
    </div>

    <div class="md-layout md-gutter content_aviso">
      <div class="md-layout-item md-layout md-gutter">
        
        <div
          class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100"
        >
          <h2 class="desc_info">
           CONSULTA RESTRICCIONES EN CAJA
          </h2>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue";
import { Carousel3d, Slide, Controls } from "vue-carousel-3d";

export default {
  name: "FormaPagos",
  props:{
    jsonConfig: Object
  },
  data() {
    return {
      styles: this.jsonConfig,
      categorias: [],
      showSideRight: false,
      experiencias: [],
      widthItem: 300,
      heightItem: 300,
      widthItemExp: 320,
      nombre_seccion: "Seccion",
      img_categoria: "",
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
    closeView() {
      //this.closeFormaPagos = false;
      this.$emit("closeFormaPagos");
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
    goBack() {
      //this.$router.push("/detalles/1");
      this.clickCloseLista = false;
    },
    verLista() {
      this.clickCloseLista = false;
      
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
  z-index: 30;
  top: 0px;
  border: none;
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
  box-shadow: none !important;
  opacity: 1;
}

.fromas_de_pago{
  z-index: 30 !important;
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
  top: 12px;
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
  top: 0px;
  left: 50% ;
  width: 260px !important;
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

.content_forma {
  margin-top: 30px !important;
}

.content_info
{
  margin-top: 40px !important;
}

.content_aviso{
  margin-top: 30% !important;
}

.ic_forma {
  width: 40px;
  height: 40px;
  margin-left: 35px;
  margin-top: 4px;
}

.desc_pago {
  color: #fff;
  text-align: left;
  font-size: 14px;
}

.desc_info{
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  margin-left: auto;
    margin-right: auto;
    width: 90% ;
}

.divider_custom {
  height: 2.5px;
  margin-top: 75px !important;
}

@media (min-width: 320px) and (max-width: 400px) {
  .content_aviso{
    margin-top: 10% !important;
  }
}

@media (min-width: 400px) and (max-width: 480px) {
  .desc_info{
    width: 80% !important;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 600px) and (max-width: 767px) {
}

@media (min-width: 481px) and (max-width: 767px) {
}
</style>
