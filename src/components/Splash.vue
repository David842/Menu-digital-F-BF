<template>
  <div class="splash" v-bind:style="styles.dataHome.fondo_home">
    <md-button
      class="md-raised md-accent btnLocal"
      v-bind:style="styles.dataHome.btnLocal"
      @click="showDialogUnidades"
    >
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
            v-bind:style="styles.fiillColorPrimary"
            d="M256,146.54c-34.36,0-62.32,27.95-62.32,62.32s27.95,62.32,62.32,62.32c34.36,0,62.32-27.95,62.32-62.32
		S290.36,146.54,256,146.54z"
          />
          <path
            v-bind:style="styles.fiillColorPrimary"
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

    <a
      href="#"
      class="photo"
      v-bind:class="[
        { logo_empresa: reflejo },
        styles.dataHome.class_logo_home,
      ]"
    >
      <img
        class="logo_home_img"
        :src="styles.dataHome.src_logo_home"
        v-bind:styles="styles.dataHome.styleLogo_home"
      />
      <img
        v-if="styles.dataHome.src_sello !== null ? true : false"
        class="logo_sello"
        :src="styles.dataHome.src_sello"
        v-bind:styles="styles.dataHome.class_sello_home"
      />
      <div class="glow-wrap img-">
        <i class="glow"></i>
      </div>
    </a>

    <h3 class="titulo_eslogan" v-if="styles.dataHome.title_eslogan !== null">
      {{ styles.dataHome.title_eslogan }}
    </h3>

    <div class="fondo_pie"></div>
    <md-button
      class="md-raised md-accent btn_go_menu"
      v-bind:style="styles.styleBtnHome"
      @click="goMenu"
    >
      MENÚ
    </md-button>
    <div class="menu-bottom" v-bind:style="styles.bgDegradedSecondColor">
      <md-button class="md-fab md-mini btn_menu" @click="openSideLeft">
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
            v-bind:style="styles.fiillColorPrimary"
            d="M479.05,279.93H32.95c-18.21,0-32.97-14.76-32.97-32.97v0c0-18.21,14.76-32.97,32.97-32.97h446.09
	c18.21,0,32.97,14.76,32.97,32.97v0C512.01,265.17,497.25,279.93,479.05,279.93z"
          />
          <path
            v-bind:style="styles.fiillColorPrimary"
            d="M479.05,114.93H32.95c-18.21,0-32.97-14.76-32.97-32.97v0C-0.01,63.76,14.75,49,32.95,49h446.09
	c18.21,0,32.97,14.76,32.97,32.97v0C512.01,100.17,497.25,114.93,479.05,114.93z"
          />
          <path
            v-bind:style="styles.fiillColorPrimary"
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
                v-bind:style="styles.fiillColorPrimary"
                d="M467,61H45C20.22,61,0,81.2,0,106v300c0,24.72,20.13,45,45,45h422c24.72,0,45-20.13,45-45V106C512,81.28,491.87,61,467,61
			z M460.79,91L256.95,294.83L51.36,91H460.79z M30,399.79V112.07l144.48,143.24L30,399.79z M51.21,421l144.57-144.57l50.66,50.22
			c5.86,5.81,15.33,5.8,21.17-0.05L317,277.21L460.79,421H51.21z M482,399.79L338.21,256L482,112.21V399.79z"
              />
            </g>
          </g>
        </svg>
      </md-button>
    </div>
    <md-dialog
      :md-active.sync="showDialog"
      class="dialog_custom"
      v-bind:class="styles.dataHome.classDialogCustom"
      :md-click-outside-to-close="false"
    >
      <h3 class="title_dialog_inicio" v-if="seEncontroUbicacion">
        ¿Dónde te encuentras?
      </h3>
      <h3 class="title_dialog_inicio" v-else>Confírmanos tu ubicación</h3>

      <div class="md-layout-item" v-if="seEncontroUbicacion"></div>

      <md-button
        class="md-raised md-accent btnLocal btnUbicacion"
        v-bind:style="styles.dataHome.btnUbicacion"
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
              v-bind:style="styles.fiillColorPrimary"
              d="M256,146.54c-34.36,0-62.32,27.95-62.32,62.32s27.95,62.32,62.32,62.32c34.36,0,62.32-27.95,62.32-62.32
		S290.36,146.54,256,146.54z"
            />
            <path
              v-bind:style="styles.fiillColorPrimary"
              d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M264.3,423.3
		c-4.42,4.93-12.16,4.94-16.6,0c-4.72-5.26-115.56-129.68-115.56-214.44C132.14,140.56,187.7,85,256,85
		c68.3,0,123.86,55.56,123.86,123.86C379.86,293.62,269.02,418.04,264.3,423.3z"
            />
          </g>
        </svg>
        <h3 class="txt_marca_seleccionada txt_marca_seleccionada_dialog">
          {{
            /*unidadUbicada.length > 8
            ? unidadUbicada.substring(0, 8) + "..."
            : */
            unidadUbicada
          }}
        </h3>
      </md-button>

      <div class="list-select-unidad" v-if="seEncontroUbicacion">
        <md-list>
          <md-list-item
            md-expand
            :md-expanded.sync="expandEstados"
            class="item-list-estados"
            @click="clicListEstados"
          >
            <md-icon
              class="ic_elige_sucursal"
              v-bind:style="styles.dataHome.colorIcon"
              >place</md-icon
            >
            <span class="md-list-item-text">{{ estadoSelected }}</span>

            <md-list slot="md-expand" class="list-estados">
              <md-list-item
                class="md-inset inset-list"
                v-for="itemEstado in estadosSelect"
                :key="itemEstado"
                :value="itemEstado"
                @click="selectedEstado(itemEstado)"
                >{{ itemEstado.nombre_estado }}</md-list-item
              >
            </md-list>
          </md-list-item>

          <md-list-item
            class="item-list-estados"
            md-expand
            :md-expanded.sync="expandUnidades"
            @click="expandUnidadesEvent"
          >
            <md-icon
              class="ic_elige_sucursal"
              v-bind:style="styles.dataHome.colorIcon"
              >store_mall_directory</md-icon
            >
            <span class="md-list-item-text">{{ unidadSelectedDialog }}</span>

            <md-list slot="md-expand" @click="clicListUnidades">
              <md-list-item
                class="md-inset inset-list"
                v-for="itemUnidad in unidadesXEstado"
                :key="itemUnidad"
                :value="itemUnidad"
                @click="selectedUnidad(itemUnidad)"
              >
                {{ itemUnidad.nombre }}</md-list-item
              >
            </md-list>
          </md-list-item>
        </md-list>
      </div>

      <md-dialog-actions v-if="seEncontroUbicacion !== false">
        <md-button
          class="btnConfirm btnConfirmUnidad"
          v-bind:style="jsonConfig.dataHome.btnConfirmar"
          @click="confirmar"
          >Confirmar</md-button
        >
      </md-dialog-actions>

      <md-dialog-actions
        v-if="seEncontroUbicacion !== true"
        class="dialog-actions-splash"
      >
        <md-button
          class="btnConfirm"
          @click="showDialog = false"
          :disabled="loading"
          v-bind:style="jsonConfig.dataHome.btnConfirmar"
          >Sí</md-button
        >
        <md-button
          v-bind:style="styles.dataHome.btnCancel"
          class="md-primary btnCancel"
          @click="botonNo"
          >No</md-button
        >
      </md-dialog-actions>
    </md-dialog>

    <md-snackbar
      :md-duration="4000"
      :md-active.sync="showSnackbar"
      md-persistent
    >
      <span>Por favor selecciona un restaurante</span>
      <md-button class="md-primary" @click="showSnackbar = false"
        >Cerrar</md-button
      >
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: "Splash",
  props: {
    jsonConfig: Object,
  },
  data() {
    return {
      styles: this.jsonConfig,
      loading: true,
      showSnackbar: false,
      seEncontroUbicacion: false,
      showConfiguracion: false,
      marker: null,
      showDialog: false,
      reflejo: false,
      unidadSelected: { nombre: "Buscando.." },
      unidadUbicada: "Buscando...",
      showSideLeftUser: true,
      unidades: [],
      estadosSelect: [],
      unidadesSelect: [],
      unidadesXEstado: [{ nombre: "Selecciona un estado", id: -1 }],
      expandEstados: false,
      expandUnidades: false,
      estadoSelected: "Estado",
      unidadSelectedDialog: "Restaurante",
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
  mounted() {
    this.showDialogUnidades();
  },
  methods: {
    expandUnidadesEvent(){
      this.expandEstados = false;
    },
    clicListEstados() {
      if (this.expandEstados === false) {
        this.expandUnidades = false;
      }else{
        this.expandEstados = false;
      }
    },
    clicListUnidades() {
      //alert();
      if (this.expandEstados === false) {
        this.expandEstados = false;
      }else{
        this.expandEstados = false;
      }
    },
    selectedEstado(itemEstado) {
      this.unidadesXEstado = [];
      this.expandEstados = false;
      this.expandUnidades = true;
      this.estadoSelected = itemEstado.nombre_estado;

      this.unidadesSelect.map((item, index) => {
        if (item.id_estado === itemEstado.id) {
          this.unidadesXEstado.push(item);
        }
      });
    },
    selectedUnidad(itemUnidad) {
      if (itemUnidad.id === -1) {
      } else {
        this.expandUnidades = false;
        this.unidadSelectedDialog = itemUnidad.nombre;
        this.idUnidadSelected = itemUnidad.id;
      }
    },
    confirmar() {
      if (this.idUnidadSelected !== null) {
        localStorage.setItem("id_unidad_eks", this.idUnidadSelected);
        this.showDialog = false;
        this.unidadSelected.nombre = this.unidadSelectedDialog;
      } else {
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
            a.obtenerEstadoByBD("", "");
          },
          {
            enableHighAccuracy: true,
            altitude: 100,
            timeout: 90000,
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
      var d = new Date();
      const baseURI =
        this.$baseURL + "/menudigital/index.php/sucursal/sucursales_estados";
      this.$http
        .get(
          baseURI,
          {
            params: {
              latitud: lat,
              longitud: lng,
              id_marca: this.$id_marca,
              agent: navigator.userAgent,
              hora_solicitud: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(),
              fecha_solicitud: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
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
            console.log(res.data.registros);
            if (res.data.registros.length > 0) {
              context.unidadUbicada = res.data.registros[0].nombre_sucursal;
              context.loading = false;
              context.unidadSelected.nombre =
                res.data.registros[0].nombre_sucursal;

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

            if (res.data.registros.length === 0) {
              context.unidadUbicada = "Sin resultados";
            }
          }

          if (res.data.status.toUpperCase() === "ERROR") {
          }
        });
    },
    obtenerEstadosYUnidades(lat, lng) {
      var d = new Date();
      var context = this;
      const baseURI =
        this.$baseURL +
        "/menudigital/index.php/sucursal/sucursales_estados_todos";
      this.$http
        .get(
          baseURI,
          {
            params: {
              latitud: lat,
              longitud: lng,
              id_marca: this.$id_marca,
              hora_solicitud: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(),
              fecha_solicitud: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
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
          }

          if (res.data.status.toUpperCase() === "ERROR") {
          }
        });
    },
  },
};
</script>

<style>
@font-face {
  font-family: Cocogoose-Pro-trial;
  src: url("~@/assets/fonts/CocogoosePro-trial.ttf");
  font-display: swap;
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
  background-size: 101% !important;
  background-position: center !important;
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

.pin_loc {
  width: 50px;
  height: 50px !important;
  margin-left: -5px;
  padding: 7px;
  border-radius: 100%;
  justify-content: center;
  vertical-align: middle;
}

.pin_loc_btn {
  float: left;
  margin-right: auto;
  display: block;
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

  box-shadow: 0px 3px 6px #00000042;
  border-radius: 25px;
  opacity: 1;
}

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
    0% no-repeat padding-box !important;
}

.dialog_customElFarolito > div {
  background: transparent linear-gradient(180deg, #cf1a33 0%, #ad182d 100%) 0%
    0% no-repeat padding-box;
}

.btnConfirm {
  border-radius: 25px !important;
  opacity: 1 !important;
  width: 30% !important;
  font-size: 150% !important;
  margin-bottom: 10px !important;
  box-shadow: 0px 3px 6px #00000042 !important;
  border-radius: 25px !important;
}

.btnConfirmUnidad {
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
  color: #eee !important;
  border-radius: 6px;
  font-weight: bold;
}

.md-dialog-actions {
  justify-content: center !important;
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
  font-family: FontMain;
}

.titulo_eslogan {
  position: fixed;
  bottom: 29% !important;
  color: #fff;
  font-family: Cocogoose-Pro-trial !important;
  width: 90%;
  z-index: 1;
  bottom: 10px;
  margin-left: -40%;
  display: block;
  left: 45%;
  font-size: 22px;
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
  background-color: inherit !important;
}

.item-list-estados > .md-active > .md-list-expand > ul {
  background-color: inherit !important;
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

.list-select-unidad > .md-list,
.list-select-unidad > .md-list > div {
  background-color: inherit !important;
}

.list-estados {
  background-color: inherit !important;
}

.ic_elige_sucursal {
  color: #f58220 !important;
}

.dialog-actions-splash {
  border-color: inherit !important;
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
  display: block;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
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
  margin-left: -110px;
  bottom: 40%;
}

.photo img {
  width: 200px;
  height: 280px;
  object-fit: contain;
  display: block;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
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
  width: 96%;
  background-color: #202223;
  border-radius: 30px;
  z-index: 3;
  left: 2%;
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
  border-radius: 30px;
  color: #fff !important;
}

.title_dialog_inicio {
  text-align: center;
  color: #eee;
  font-family: FontMain;
  margin-top: 25px;
  font-size: 1.5rem;
  font-weight: normal;
}

@media (min-width: 400px) and (max-width: 480px) {
  .txt_marca_seleccionada {
    font-size: 100%;
  }

  .titulo_eslogan {
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
    width:250px !important;
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
    margin-top: 9px !important;
  }

  .txt_marca_seleccionada_dialog{
    margin-top: 18px !important;
  }

  .pin_loc_dialog {
    width: 60px;
    height: 60px !important;
  }

  .btnConfirmUnidad {
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

  .titulo_eslogan {
    bottom: 100px;
    font-weight: normal;
    font-size: 18px;
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

  .btnConfirmUnidad {
    font-size: 15px !important;
    width: auto !important;
    padding-left: 20px !important;
    padding-right: 10px !important;
  }

  .item-list-estados > div > div > span {
    font-size: 13px;
  }
}

@media (min-width: 320px) and (max-width: 400px) {
}

@media (min-width: 320px) and (max-width: 731px) {
  .splash {
    background-size: 100vh !important;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .dialog_custom > div {
    width: 80% !important;
  }

  .mapaLoc {
    height: 50vh !important;
  }

  .photo img {
    width: 240px !important;
    height: 210px;
  }

  .pin_loc_dialog {
    width: 60px;
    height: 60px !important;
  }

  .txt_marca_seleccionada {
    font-size: 1.2rem;
    margin-top: 11px;
  }

  .btnConfirmUnidad {
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
    margin-top: 11px;
  }

  .pin_loc_dialog {
    width: 60px;
    height: 60px !important;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .photo img {
    width: 250px !important;
    height: 200px;
  }

  .dialog_custom > div {
    width: 45% !important;
  }

  .txt_marca_seleccionada {
    font-size: 1.2rem;
    margin-top: 11px;
  }

  .pin_loc_dialog {
    width: 60px;
    height: 60px !important;
  }
}

@media (min-width: 1281px) {
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
    margin-top: 11px;
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

/*Styles multimarca */
.photoToks img {
}

@media (min-width: 320px) and (max-width: 399px) {
  .photoBF {
    bottom: inherit;
    top: 120px;
    left: 50%;
    margin-left: -40% !important;
    width: 80% !important;
  }

  .photoBF .logo_home_img {
    /*width: 200px !important;*/
    width: 100% !important;
    /*height: auto !important;*/
    height: 30vh !important;
  }

  .logo_sello {
    width: 80% !important;
    height: 20vh !important;
    margin-left: auto;
    margin-right: auto;
  }

  .photoElFarolito {
    bottom: inherit;
    top: 30vh;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoElFarolito .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }
}

@media (min-width: 400px) and (max-width: 480px) {
  .photoBF {
    bottom: inherit;
    top: 120px;
    left: 50%;
    margin-left: -40% !important;
    width: 80% !important;
  }

  .photoBF .logo_home_img {
    width: 90% !important;
    margin-left: auto;
    margin-right: auto;
  }

  .logo_sello {
    width: 80% !important;
    height: 14vh !important;
    margin-left: auto;
    margin-right: auto;
  }

  .photoElFarolito {
    bottom: inherit;
    top: 30vh;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoElFarolito .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .photoBF {
    bottom: inherit;
    top: 120px;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoBF .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }

  .logo_sello {
    width: 80% !important;
    height: 20vh !important;
    margin-left: auto;
    margin-right: auto;
  }

  .photoElFarolito {
    bottom: inherit;
    top: 30vh;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoElFarolito .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .photoBF {
    bottom: inherit;
    top: 120px;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoBF .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }

  .logo_sello {
    width: 80% !important;
    height: 20vh !important;
    margin-left: auto;
    margin-right: auto;
  }

  .photoElFarolito {
    bottom: inherit;
    top: 30vh;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoElFarolito .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .photoBF {
    bottom: inherit;
    top: 120px;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoBF .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }

  .logo_sello {
    width: 80% !important;
    height: 20vh !important;
    margin-left: auto;
    margin-right: auto;
  }

  .photoElFarolito {
    bottom: inherit;
    top: 30vh;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoElFarolito .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }
}

@media (min-width: 1281px) {
  .photoBF {
    bottom: inherit;
    top: 120px;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoBF .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }

  .logo_sello {
    width: 80% !important;
    height: 20vh !important;
    margin-left: auto;
    margin-right: auto;
  }

  .photoElFarolito {
    bottom: inherit;
    top: 30vh;
    left: 50%;
    margin-left: -45% !important;
    width: 90% !important;
  }

  .photoElFarolito .logo_home_img {
    width: 100% !important;
    height: 30vh !important;
  }
}
</style>
