<template>
  <div class="splash">
    <md-button class="md-raised md-accent btnLocal" @click="showDialogUnidades">
      <svg
        class="pin_loc pin_loc_btn"
        version="1.2"
        baseProfile="tiny"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <path
            class="primary_color_bg"
            d="M256,146.54c-34.36,0-62.32,27.95-62.32,62.32s27.95,62.32,62.32,62.32c34.36,0,62.32-27.95,62.32-62.32
		S290.36,146.54,256,146.54z"
          />
          <path
            class="second_color_bg"
            d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M264.3,423.3
		c-4.42,4.93-12.16,4.94-16.6,0c-4.72-5.26-115.56-129.68-115.56-214.44C132.14,140.56,187.7,85,256,85
		c68.3,0,123.86,55.56,123.86,123.86C379.86,293.62,269.02,418.04,264.3,423.3z"
          />
        </g>
      </svg>

      <h3 class="txt_marca_seleccionada">
        {{
          /*unidadSelected.nombre.length > 8
            ? unidadSelected.nombre.substring(0, 8) + "..."
            : unidadSelected.nombre*/
          unidadSelected.nombre
        }}
      </h3>
    </md-button>

    <a href="#" class="photo" v-bind:class="{ logo_empresa: reflejo }">
      <img src="../assets/img/logo_toks.png" />

      <div class="glow-wrap">
        <i class="glow"></i>
      </div>
    </a>

    <h3 class="titulo_eslogan">Estar aquí, está mejor.</h3>

    <div class="fondo_pie"></div>
    <md-button class="md-raised md-accent btn_go_menu" @click="goMenu">
      MENÚ
    </md-button>
    <div class="menu-bottom">
      <md-button class="md-fab md-mini btn_menu" @click="openSideLeft">
        <!--<md-icon class="icon_btn_menu">menu</md-icon>-->
        <svg
          class="ic_menu"
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
          <path
            class="primary_color_bg"
            d="M479.05,279.93H32.95c-18.21,0-32.97-14.76-32.97-32.97v0c0-18.21,14.76-32.97,32.97-32.97h446.09
	c18.21,0,32.97,14.76,32.97,32.97v0C512.01,265.17,497.25,279.93,479.05,279.93z"
          />
          <path
            class="primary_color_bg"
            d="M479.05,114.93H32.95c-18.21,0-32.97-14.76-32.97-32.97v0C-0.01,63.76,14.75,49,32.95,49h446.09
	c18.21,0,32.97,14.76,32.97,32.97v0C512.01,100.17,497.25,114.93,479.05,114.93z"
          />
          <path
            class="primary_color_bg"
            d="M479.05,443.47H32.95c-18.21,0-32.97-14.76-32.97-32.97v0c0-18.21,14.76-32.97,32.97-32.97h446.09
	c18.21,0,32.97,14.76,32.97,32.97v0C512.01,428.71,497.25,443.47,479.05,443.47z"
          />
        </svg>
      </md-button>
      <md-button
        class="md-fab md-mini md-plain btn_redes"
        @click="openSideRightUser"
      >
        <svg
          class="icon_btn_menu"
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
                class="primary_color_bg"
                d="M467,61H45C20.22,61,0,81.2,0,106v300c0,24.72,20.13,45,45,45h422c24.72,0,45-20.13,45-45V106C512,81.28,491.87,61,467,61
			z M460.79,91L256.95,294.83L51.36,91H460.79z M30,399.79V112.07l144.48,143.24L30,399.79z M51.21,421l144.57-144.57l50.66,50.22
			c5.86,5.81,15.33,5.8,21.17-0.05L317,277.21L460.79,421H51.21z M482,399.79L338.21,256L482,112.21V399.79z"
              />
            </g>
          </g>
        </svg>
      </md-button>
    </div>
    <md-dialog :md-active.sync="showDialog" class="dialog_custom">
      <h3 class="title_dialog_inicio" v-if="seEncontroUbicacion">
        ¿Donde te encuentras?
      </h3>
      <h3 class="title_dialog_inicio" v-else>Confírmanos tu ubicación</h3>

      <div class="md-layout-item" v-if="seEncontroUbicacion">
      </div>

      <md-button
        class="md-raised md-accent btnLocal btnUbicacion"
        @click="showDialogUnidades"
        v-if="seEncontroUbicacion !== true"
      >
        <svg
          class="pin_loc pin_loc_btn pin_loc_dialog"
          version="1.2"
          baseProfile="tiny"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <path
              class="primary_color_bg"
              d="M256,146.54c-34.36,0-62.32,27.95-62.32,62.32s27.95,62.32,62.32,62.32c34.36,0,62.32-27.95,62.32-62.32
		S290.36,146.54,256,146.54z"
            />
            <path
              class="second_color_bg"
              d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M264.3,423.3
		c-4.42,4.93-12.16,4.94-16.6,0c-4.72-5.26-115.56-129.68-115.56-214.44C132.14,140.56,187.7,85,256,85
		c68.3,0,123.86,55.56,123.86,123.86C379.86,293.62,269.02,418.04,264.3,423.3z"
            />
          </g>
        </svg>
        <h3 class="txt_marca_seleccionada">
          {{
            /*unidadUbicada.length > 8
            ? unidadUbicada.substring(0, 8) + "..."
            : */
            unidadUbicada
          }}
        </h3>
      </md-button>

      <div class="list-select-unidad" v-if="seEncontroUbicacion">
        <md-list >
          <md-list-item
            md-expand
            :md-expanded.sync="expandEstados"
            class="item-list-estados"
            @click="clicListEstados"
          >
            <md-icon class="ic_elige_sucursal">place</md-icon>
            <span class="md-list-item-text">{{estadoSelected}}</span>

            <md-list slot="md-expand" class="list-estados">
              <md-list-item
                class="md-inset inset-list"
                v-for="itemEstado in estadosSelect"
                :key="itemEstado"
                :value="itemEstado.id"
                @click="selectedEstado(itemEstado)"
                >{{ itemEstado.nombre }}</md-list-item
              >
            </md-list>
          </md-list-item>

          <md-list-item
            class="item-list-estados"
            md-expand
            :md-expanded.sync="expandUnidades"
          >
            <md-icon class="ic_elige_sucursal">store_mall_directory</md-icon>
            <span class="md-list-item-text">{{unidadSelectedDialog}}</span>

            <md-list slot="md-expand" @click="clicListUnidades">
              <md-list-item
                
                class="md-inset inset-list"
                v-for="itemUnidad in unidadesXEstado"
                :key="itemUnidad"
                :value="itemUnidad.id"
                @click="selectedUnidad(itemUnidad)"
              >
                {{ itemUnidad.nombre }}</md-list-item
              >
            </md-list>
          </md-list-item>
        </md-list>
      </div>

      <md-dialog-actions v-if="seEncontroUbicacion !== false">
        <md-button class="btnConfirm btnConfirmUnidad" @click="confirmar">Confirmar</md-button>
        <!--<md-button class="md-primary btnCancel" @click="botonNo">No</md-button>-->
      </md-dialog-actions>

      <md-dialog-actions v-if="seEncontroUbicacion !== true">
        <md-button class="btnConfirm" @click="showDialog = false">Si</md-button>
        <md-button class="md-primary btnCancel" @click="botonNo">No</md-button>
      </md-dialog-actions>
    </md-dialog>

     <md-snackbar :md-position="position" :md-duration="4000" :md-active.sync="showSnackbar" md-persistent>
      <span>Porfavor selecciona una sucursal</span>
      <md-button class="md-primary" @click="showSnackbar = false">Cerrar</md-button>
    </md-snackbar>
  </div>
</template>

<script>
//import Configuracion from "./Configuracion.vue";

export default {
  name: "Splash",
  data() {
    return {
      showSnackbar: false,
      baseURL: "https://www.menugrg.com.mx:7443/",
      seEncontroUbicacion: false,
      showConfiguracion: false,
      marker: null,
      showDialog: false,
      reflejo: false,
      unidadSelected: { nombre: "Buscando.." },
      unidadUbicada: "Buscando...",
      showPicker: false,
      showSideLeftUser: true,
      unidades: [],
      estadosSelect: [],
      unidadesSelect: [],
      unidadesXEstado: [{nombre: "Selecciona un estado",id: -1}],
      expandEstados: false,
      expandUnidades: false,
      estadoSelected: "Estado",
      unidadSelectedDialog: "Sucursal",
      id_estado: null,
      idUnidadSelected: null,
      datas: [
        {
          currentIndex: 0,
          flex: 3,
          list: [],
          onClick: this.clickOnGender,
          textAlign: "center",
          className: "row-group",
        },
      ],
    };
  },

  created() {
    //alert(localStorage.getItem('id_unidad_eks'));
  },
  mounted() {
    this.showDialogUnidades();
  },
  methods: {
    clicListEstados() {
      // alert(this.expandEstados);
      if (this.expandEstados === false) {
        this.expandUnidades = false;
      }
    },
    clicListUnidades() {
      if (this.expandEstados === false) {
        this.expandEstados = false;
      }
    },
    selectedEstado(itemEstado) {
      console.log(itemEstado);
      this.unidadesXEstado = [];
      this.expandEstados = false;
      this.expandUnidades = true;
      this.estadoSelected = itemEstado.nombre;
      // alert(this.id_estado);
      this.unidadesSelect.map((item, index) => {
        if (item.id_estado === itemEstado.id) {
          console.log("-----");
          this.unidadesXEstado.push(item);
        }
      });
    },
    selectedUnidad(itemUnidad) {
      //console.log(itemUnidad);
      if(itemUnidad.id === -1){
        
      }else{
        this.expandUnidades = false;
      this.unidadSelectedDialog = itemUnidad.nombre;
      this.idUnidadSelected = itemUnidad.id;
      }
      //alert(this.idUnidadSelected);
    },
    confirmar(){
      
            if(this.idUnidadSelected !==null){
              localStorage.setItem(
              "id_unidad_eks",
              this.idUnidadSelected
            );
            this.showDialog = false;
      this.unidadSelected.nombre = this.unidadSelectedDialog;
              //alert(this.idUnidadSelected);
            }else{
               //alert("Porfavor selecciona una sucursal");
               this.showSnackbar = true;
            }
      
    },
    openConfiguracion() {
      this.showConfiguracion = true;
    },
    botonNo() {
      this.showDialog = true;
      this.seEncontroUbicacion = true;

      this.obtenerEstadosYUnidades("", "");
    },
    goMenu() {
      this.$emit("goMenu");
    },
    openSideLeft() {
      this.$emit("openSideLeft");
    },
    openSideRightUser() {
      this.$emit("openSideRightUser");
    },
    clickOnGender() {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList();
      this.showDialog = false;

      this.unidadSelected = { nombre: this.datas[0].list[ciList] };
      document.cookie = "id_unidad_eks=" + this.unidades[ciList].id_sucursal;
    },
    dataChange(gIndex, iIndex) {
      this.marker = {
        position: {
          lat: parseFloat(this.unidades[iIndex].position.lat),
          lng: parseFloat(this.unidades[iIndex].position.lng),
        },
      };

      this.unidadSelected = { nombre: this.datas[0].list[iIndex] };
      document.cookie = "id_unidad_eks=" + this.unidades[iIndex].id_sucursal;
    },
    confirm() {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList();
      document.cookie = "id_unidad_eks=" + this.unidadSelected.id_sucursal;
    },
    getUbicacion() {
      var a = this;
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            a.marker = { position: { lat: pos.lat, lng: pos.lng } };

            a.obtenerEstadoByBD(pos.lat, pos.lng);
          },
          function(error) {
            //a.unidadUbicada = a.unidades[0].nombre;
            //a.unidadSelected.nombre = a.unidades[0].nombre;
            //document.cookie = "id_unidad_eks=" + a.unidades[0].id_sucursal;
            //localStorage.setItem('id_unidad_eks', res.data.registros[0].id_sucursal);
            a.obtenerEstadoByBD("", "");
            //alert("buscar sun cordenadas");
          },
          {
            enableHighAccuracy: true,
            altitude: 100,
            timeout: 60000,
            maximumAge: 6000,
          }
        );
      } else {
        alert("Browser doesn't support Geolocation");
      }
    },
    showDialogUnidades() {
      this.showDialog = true; 
      this.getUbicacion();
    },
    obtenerEstadoByBD(lat, lng) {
      var context = this;
      const baseURI =
        this.baseURL + "menudigital/index.php/sucursal/sucursales_estados";
      this.$http
        .get(
          baseURI,
          {
            params: {
              latitud: lat,
              longitud: lng,
              id_marca: "1",
              token:
                "e9840b0b4143fc82ef6d8bdb36c96a8dd1cd501be8f3c6f0f3887a80bd70e3fd7b4c9205d524cb1a5502a6325e38e09ab4b8de58d0f0c39f6019aaba682ec8b7",
            },
          },
          { "Access-Control-Allow-Origin": "*" }
        )
        .then((res) => {
          if (res.data.status === "OK") {
            context.unidades = [];
            context.datas[0].list = [];

            context.unidadUbicada = res.data.registros[0].nombre_sucursal;
            context.unidadSelected.nombre =
              res.data.registros[0].nombre_sucursal;
            //document.cookie = "id_unidad_eks=" + res.data.registros[0].id_sucursal;
            localStorage.setItem(
              "id_unidad_eks",
              res.data.registros[0].id_sucursal
            );

            res.data.registros.map((item, index) => {
              this.datas[0].list.push(item.nombre_sucursal);
              this.unidades.push({
                id_sucursal: item.id_sucursal,
                nombre: item.nombre_sucursal,
                nombre_estado: item.nombre_estado,
                position: { lat: item.latitud, lng: item.longitud },
                distance: 0,
              });
            });
          }

          if (res.data.status.toUpperCase() === "ERROR") {
          }
          //
        });
    },
    obtenerEstadosYUnidades(lat, lng) {
      var context = this;
      const baseURI =
        this.baseURL +
        "menudigital/index.php/sucursal/sucursales_estados_todos";
      this.$http
        .get(
          baseURI,
          {
            params: {
              latitud: lat,
              longitud: lng,
              id_marca: "1",
              token:
                "e9840b0b4143fc82ef6d8bdb36c96a8dd1cd501be8f3c6f0f3887a80bd70e3fd7b4c9205d524cb1a5502a6325e38e09ab4b8de58d0f0c39f6019aaba682ec8b7",
            },
          },
          { "Access-Control-Allow-Origin": "*" }
        )
        .then((res) => {
          if (res.data.status === "OK") {
            context.unidadesSelect = res.data.unidades;
            context.estadosSelect = res.data.estados;
            context.unidadesSelect.map((item, index) => {
                if (item.id_estado === "9") {
                  console.log("-----");
                 // context.unidadesXEstado.push(item);
                  
                }
              });
            /*res.data.registros.map((item, index) => {
              this.datas[0].list.push(item.nombre_sucursal);
              this.unidades.push({
                id_sucursal: item.id_sucursal,
                nombre: item.nombre_sucursal,
                nombre_estado: item.nombre_estado,
                position: { lat: item.latitud, lng: item.longitud },
                distance: 0,
              });
            });*/
          }

          if (res.data.status.toUpperCase() === "ERROR") {
          }
          //
        });
    },

    gMapFunc(evnt) {
      //this.jdata = { geo: { lat: evnt.lat(), lng: evnt.lng() } };
      console.log(event);
    },
  },
};
</script>

<style>
@font-face {
  font-family: Cocogoose-Pro-trial;
  src: url("~@/assets/fonts/Cocogoose Pro-trial.ttf");
}

.primary_color_bg {
  background-color: #f58220;
  fill: #f58220;
}

.second_color_bg {
  fill: #f58220;
  background-color: #f58220;
}

.ic_menu {
  width: 25px;
  height: 25px;
}

.icon_btn_menu {
  width: 25px;
  height: 25px;
}

.splash {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.712);
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  left: 0;
  background-image: url(../assets/img/fondo_home.jpg);
  background-size: 101% !important;
  background-position: center;
  background-repeat: no-repeat;
}

.fondo_pie {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4696078260405725) 0%,
    rgba(0, 0, 0, 0.23991594928987214) 50%,
    rgb(3, 3, 3) 90%
  );
  bottom: 0;
}

a {
  text-decoration: none !important;
  color: #fff !important;
}

.title_splash {
  color: #fff !important;
  z-index: 4;
  left: 50%;
  top: 10%;
  margin-left: -100px;
  position: fixed;
  font-size: 50px;
  width: 200px;
  word-break: break-word;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: #eee;
}

@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .splash {
    background-size: cover;
    background-position: center;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .splash {
    background-size: cover;
    background-position: center;
  }
}

.btn_go_menu {
  position: fixed !important;
  bottom: 18% !important;
  left: 50%;
  z-index: 7;
  width: 140px;
  margin-left: -70px !important ;
  border-radius: 30px !important;
  font-size: 23px !important;
  background-color: #f58220 !important;
  height: 40px !important;

  background: transparent linear-gradient(180deg, #f58220 0%, #db6500 100%) 0%
    0% no-repeat padding-box !important;
  box-shadow: 0px 3px 6px #000000b0 !important;
  border-radius: 27px !important;
  opacity: 1 !important;
}

.select_local {
  width: 250px !important;
  background-color: #322f2f;
  color: #eee !important;
  padding-top: 4px !important;
  border-radius: 25px;
  border: none !important;
  position: relative !important;
}

.select_local:before {
  transform: scaleX(0.75) !important;
  border-radius: 100%;
  content: none !important;
}

.select_local > .md-menu > .md-input {
  -webkit-text-fill-color: rgba(255, 255, 255, 0.87) !important;
  text-align: center;
  font-size: 20px !important;
  padding-top: 7px;
  border: none !important;
}
.select_local > .md-menu > i {
  position: absolute;
  display: none;
}
.select_local > .md-menu > .md-input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white !important;
  text-align: center;
  font-size: 20px !important;
  opacity: 1; /* Firefox */
}

.md-icon.md-theme-default.md-icon-image svg {
  /*display: none;*/
}

.pin_loc {
  width: 50px;
  height: 50px !important;
  /*position: absolute;*/
  margin-left: -5px;
  /*background-color: #f58220 !important;*/
  padding: 7px;
  border-radius: 100%;
  justify-content: center;
  vertical-align: middle;
}

.pin_loc_btn {
  float: left;
  margin-right: auto;
  display: block;
  /*margin-top: -10px;*/
  margin-left: -25px;
}

.md-field.md-theme-default:before,
.md-field.md-theme-default:after {
  background-color: #f58220 !important;
  content: inherit !important;
  height: 0;
}

.title_nombre_unidad {
  width: 100%;
  line-height: 9px;
}

.btnLocal {
  position: fixed !important;
  z-index: 2;
  left: 50%;
  width: 300px;
  margin-left: -150px !important;
  margin-top: 50px !important;
  margin-bottom: 70px !important;
  height: 45px !important;
  border-radius: 25px !important;
  background-color: #202223 !important;

  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box !important;
  box-shadow: 0px 3px 6px #00000042;
  border-radius: 25px;
  opacity: 1;
}

.btnUbicacion {
  position: relative !important;
  width: 90%;
  left: 45%;
  margin-left: -40% !important;
  border-bottom: 0.5px solid rgba(151, 151, 151, 0.363) !important;
  height: 60px !important;
}

.btnLocal > div > div {
  width: 100%;
  padding-left: 15px;
}

.dialog_custom > div {
  border-radius: 20px;
  padding: 5px !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  background-color: inherit !important;

  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000042;
  border-radius: 25px;
  opacity: 1;
}

.btnConfirm {
  border-radius: 25px !important;
  opacity: 1 !important;
  width: 30% !important;
  font-size: 150% !important;
  margin-bottom: 10px !important;
  background: transparent linear-gradient(180deg, #f58220 0%, #db6500 100%) 0%
    0% no-repeat padding-box !important;
  box-shadow: 0px 3px 6px #00000042 !important;
  border-radius: 25px !important;
}

.btnConfirmUnidad{
    width: auto !important;
    padding-left: 20px !important;
    padding-right: 10px !important;
  }

.btnCancel {
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box !important;
  box-shadow: 0px 3px 6px #00000042 !important;
  border-radius: 25px !important;
  opacity: 1 !important;
  width: 30% !important;
  margin-left: 30px !important;
  margin-bottom: 10px !important;
  font-size: 150% !important;
}

.dialog_custom > div > div > button {
  background-color: #f58220;
  color: #eee !important;
  border-radius: 6px;
  font-weight: bold;
}

.md-dialog-actions {
  justify-content: center !important;
}

.md-list {
  background-color: rgb(58, 58, 58) !important;
}
.md-list-item-text {
  color: white;
}

.md-dialog-actions {
  position: relative !important;
}

.tab-dialog {
  height: auto !important;
  display: block;
  flex: none !important;
}

.txt_marca_seleccionada {
  padding: 0px;
  margin: 10px;
  padding-top: 3px;
  font-weight: normal;
  font-family: AvenirNextLTPro-Regular;
}

.titulo_eslogan {
  position: fixed;
  bottom: 29% !important;
  color: #fff;
  left: 50%;
  font-family: Cocogoose-Pro-trial !important;
}

.logo_empresa {
  width: 200px;
  height: auto;
  position: fixed;
  left: 50%;
  margin-left: -100px;
  bottom: 50%;
}

.content_options {
  width: 80%;
}



.item-list-estados > .md-active > .md-list-expand {
  background-color: #eee !important;
  height: auto !important;
  max-height: 35vh !important;
  overflow-y: auto;
}

.inset-list > button > div {
  color: #fff !important;
  font-size: 14px;
}

.list-select-unidad {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}

.ic_elige_sucursal {
  color: #f58220 !important;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@media (max-width: 600px) {
  .md-dialog-fullscreen {
    width: auto !important;
    height: auto !important;
  }

  .md-dialog {
    transition-duration: inherit !important;
  }
}

@media (min-width: 601px) {
  .md-dialog-fullscreen {
    transform: translate(0) !important;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 400px) and (max-width: 480px) {
  .logo_empresa {
    margin-left: -150px !important;
    width: 300px !important;
  }

  .logo_empresa {
    width: 250px !important;
  }

  .photo {
    margin-left: -150px !important;
  }

  .photo img {
    width: 300px !important;
    height: 300px;
  }

  .dialog_custom > div {
    width: 86% !important;
  }
}

.logo_empresa img {
  width: 200px;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(120%);
  /*box-shadow: 10px 15px 25px 0 rgba(0, 0, 0, 0.2);*/
  display: block;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.logo_empresa:hover img {
  /* box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1);*/
}

.logo_empresa .glow-wrap {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.logo_empresa .glow {
  display: block;
  position: absolute;
  width: 40%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2);
  top: 0;
  filter: blur(5px);
  transform: rotate(45deg) translate(-450%, 0);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.logo_empresa .glow {
  transform: rotate(45deg) translate(450%, 0);
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.photo {
  left: 50%;
  position: fixed;
  z-index: 1;
  margin-left: -100px;
  bottom: 40%;
}

.photo img {
  width: 200px;
  height: 280px;
  object-fit: contain;
  filter: grayscale(100%) contrast(120%);
  /*box-shadow: 0px 0px 25px 0 rgb(0, 0, 0);*/
  display: block;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.photo:hover img {
  /*box-shadow: 1px 1px 10px 0 rgba(0,0,0,.1);*/
}

.photo .glow-wrap {
  overflow: hidden;
}

.photo .glow {
  width: 40%;
  background: rgba(255, 255, 255, 0.2);
  filter: blur(5px);
  transform: rotate(45deg) translate(-450%, 0);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.logo_empresa .glow {
  transform: rotate(45deg) translate(450%, 0);
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.menu-bottom {
  position: fixed;
  bottom: 0;
  margin-bottom: 6px;
  width: 100%;
  background-color: #202223;
  border-radius: 30px;
  z-index: 3;
}

.btn_menu {
  float: left;
  background: none !important;
  box-shadow: none !important;
}

.btn_menu > div > div {
  justify-content: center;
  vertical-align: middle;
  display: contents;
}

.btn_menu::before {
  will-change: initial !important;
}

.icon_btn_menu {
  color: #f58220 !important;
}

.btn_redes {
  float: right;
  background: none !important;
  background-color: initial !important;
  box-shadow: none !important;
}

.btn_redes > div > div {
  justify-content: center;
  vertical-align: middle;
  display: contents;
}

.list_picker {
  background-color: #3a3a3a !important;
}

.list_picker > div > div > div {
  color: rgb(255, 255, 255) !important;
}

.list_picker > div > .smooth-top {
  background: linear-gradient(
    180deg,
    #3a3a3a 10%,
    hsla(0, 0%, 23%, 0.7)
  ) !important;
  border: none !important;
}

.list_picker > div > .smooth-bottom {
  background: linear-gradient(
    0deg,
    #3a3a3a 10%,
    hsla(0, 0%, 23%, 0.68)
  ) !important;
  border: none !important;
}

.list_picker > div > .smooth-middle {
  /*background-color: orange;*/
  border-radius: 30px;
  color: #fff !important;
}

.title_dialog_inicio {
  text-align: center;
  color: #eee;
  font-family: AvenirNextLTPro-Regular;
  margin-top: 25px;
  font-size: 1.5rem;
  font-weight: normal;
}

@media (min-width: 400px) and (max-width: 480px) {
  .txt_marca_seleccionada {
    /*font-size: 21px;*/
    font-size: 100%;
  }

  .titulo_eslogan {
    width: 380px;
    margin-left: -190px;
    z-index: 1;
    bottom: 90px;
    font-weight: normal;
    font-size: 25px;
  }

  .photo {
    margin-left: -110px !important;
  }

  .logo_empresa img {
    width: 250px !important;
    height: 250px;
  }

  .photo img {
    width: 240px !important;
    height: 250px;
  }

  .title_dialog_inicio {
    font-size: 1.3rem;
  }

  .btnUbicacion {
    height: 60px !important;
  }

  .txt_marca_seleccionada {
    font-size: 1.2rem;
    margin-top: 13px !important;
  }

  .pin_loc_dialog {
    width: 60px;
    height: 60px !important;
  }

  .btnConfirmUnidad{
    width: auto !important;
    padding-left: 20px !important;
    padding-right: 10px !important;
  }
}

@media (min-width: 320px) and (max-width: 399px) {
  .txt_marca_seleccionada {
    font-size: 14px;
    margin-top: 13px;
  }

  .btnUbicacion {
    height: 43px !important;
  }

  .btnLocal {
    /*width: 200px;
    margin-left: -100px !important;*/
  }

  .titulo_eslogan {
    width: 250px;
    margin-left: -125px;
    z-index: 1;
    bottom: 100px;
    font-weight: normal;
  }

  .photo {
    margin-left: -75px !important;
  }

  .photo img {
    width: 180px !important;
    height: 150px;
  }

  .title_dialog_inicio {
    font-size: 1rem;
  }

  .btnConfirmUnidad{
    font-size: 15px !important;
    width: auto !important;
    padding-left: 20px !important;
    padding-right: 10px !important;
  }

  .item-list-estados > div > div > span{
  font-size: 13px;
}
}

@media (min-width: 320px) and (max-width: 400px) {
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 320px) and (max-width: 731px) {
  .splash {
    background-size: 100vh !important;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .titulo_eslogan {
    width: 250px;
    margin-left: -125px;
    z-index: 1;
    bottom: 10px;
  }

  .dialog_custom > div {
    width: 80% !important;
  }

  .mapaLoc {
    height: 50vh !important;
  }

  .photo img {
    width: 250px !important;
    height: 200px;
  }

  .pin_loc_dialog {
    width: 60px;
    height: 60px !important;
  }

  .txt_marca_seleccionada {
    font-size: 1.2rem;
    margin-top: 13px;
  }

  .btnConfirmUnidad{
    width: auto !important;
    padding-left: 20px !important;
    padding-right: 10px !important;
  }
}

@media (max-width: 600px) {
  .md-dialog-container .md-tab {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .titulo_eslogan {
    width: 250px;
    margin-left: -125px;
    z-index: 1;
    bottom: 10px;
  }

  .photo img {
    width: 250px !important;
    height: 200px;
  }

  .dialog_custom > div {
    width: 50% !important;
  }

  .mapaLoc {
    height: 50vh !important;
  }

  .txt_marca_seleccionada {
    font-size: 1.2rem;
    margin-top: 13px;
  }

  .pin_loc_dialog {
    width: 60px;
    height: 60px !important;
  }
  
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .titulo_eslogan {
    width: 250px;
    margin-left: -125px;
    z-index: 1;
    bottom: 10px;
  }

  .photo img {
    width: 250px !important;
    height: 200px;
  }

  .dialog_custom > div {
    width: 45% !important;
  }

  .txt_marca_seleccionada {
    font-size: 1.2rem;
    margin-top: 13px;
  }

  .pin_loc_dialog {
    width: 60px;
    height: 60px !important;
  }
}

@media (min-width: 1281px) {
  .titulo_eslogan {
    width: 250px;
    margin-left: -125px;
    z-index: 1;
    bottom: 10px;
  }

  .photo img {
    width: 250px !important;
    height: 200px;
  }

  .dialog_custom > div {
    width: 40% !important;
  }

  .mapaLoc {
    height: 50vh !important;
  }

  .txt_marca_seleccionada {
    font-size: 1.2rem;
    margin-top: 13px;
  }

  .pin_loc_dialog {
    width: 60px;
    height: 60px !important;
  }
}

.smooth-item-selected {
  background-color: #f58220 !important;
  border-radius: 30px;
}
</style>
