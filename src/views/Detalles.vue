<template>
  <div class="home" v-bind:style="jsonConfig.dataHome.bgHome">
    <p
      class="nombre_categoria"
      v-bind:style="jsonConfig.dataCategorias.styleNombreView"
    >
      {{ nombre_categoria }}
    </p>
    <!--<button @click="goToSlide(5)">Go to Slide Index 5</button>-->
    <SideNav :showSideRight="showSideRight" :jsonConfig="jsonConfig" />
    <div>
      <md-button class="md-fab md-mini btnMenuReturn" @click="goBack">
        <md-icon
          class="icon_btn_menu ic_back"
          v-bind:style="jsonConfig.dataCategorias.iconBtnTopLeft"
          >keyboard_arrow_left</md-icon
        >
      </md-button>

      <md-button
        class="md-fab md-mini btnMenuRight"
        @click="openSide"
        v-bind:style="jsonConfig.dataCategorias.btnTopLeft"
      >
        <md-icon
          class="icon_btn_menu"
          v-bind:style="jsonConfig.dataCategorias.iconBtnTopLeft"
          >menu</md-icon
        >
      </md-button>
    </div>

    <div
      class="banner_categoria"
      v-bind:style="{
        'background-image': 'url(\'' + img_categoria + '\')',
      }"
    >
      <h3 class="desc_categoria" v-if="descripcion_categoria">
        {{ descripcion_categoria }}
      </h3>
    </div>

    <div class="productos">
      <div class="degradado_left"></div>
      <div
        :key="i"
        v-for="(subcategoria, i) in categorias.subcategoria"
        :index="i"
      >
        <h3 class="title_subcategoria">
          {{ subcategoria.subcategoria }}
          <md-tooltip md-direction="left">{{
            subcategoria.descripcion
          }}</md-tooltip>
        </h3>

        <div class="subcategoria">
          <md-card
            class="card_producto"
            :key="j"
            v-for="(articulo, j) in subcategoria.articulos[i]"
          >
            <md-card-media>
              <img
                @click="openDialog(articulo)"
                v-bind:src="
                  typeof articulo.ubicacion_articulo_min === 'undefined' ||
                  articulo.ubicacion_articulo_min == null || articulo.ubicacion_articulo_min === ''
                    ? articulo.ubicacion_articulo
                    : articulo.ubicacion_articulo_min
                "
                alt="Producto"
                class="img_producto"
                @load="loadImgArticulo(articulo)"
                @error="loadImgError(articulo)"
              />
            </md-card-media>

            <md-card-header class="header_title">
              <div
                class="price"
                v-bind:style="jsonConfig.bgDegradedColorPrimary"
              >
                ${{ parseInt(articulo.precio) }}
              </div>
              <div class="md-subhead title_producto">
                {{ articulo.platillo }}
              </div>
            </md-card-header>
          </md-card>
        </div>
      </div>

      <div class="md-layout md-gutter  content-layout-producto">
        <md-card
          class="card_producto card_articulo"
          :key="i"
          v-for="(articulo, i) in categorias.articulos"
          :index="i"
        >
          <md-card-media>
            <img
              @click="openDialog(articulo)"
              v-bind:src="
                typeof articulo.ubicacion_articulo_min === 'undefined' ||
                  articulo.ubicacion_articulo_min == null || articulo.ubicacion_articulo_min === ''
                    ? articulo.ubicacion_articulo
                    : articulo.ubicacion_articulo_min
              "
              alt="Producto"
              class="img_producto"
              @load="loadImgArticulo(articulo)"
              @error="loadImgError(articulo)"
            />
          </md-card-media>

          <md-card-header class="header_title">
            <div class="price" v-bind:style="jsonConfig.bgDegradedColorPrimary">
              ${{ parseInt(articulo.precio) }}
            </div>
            <div class="md-subhead title_producto">
              {{ articulo.platillo }}
            </div>
          </md-card-header>
        </md-card>
      </div>
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
      <md-button class="md-fab md-mini md-plain btnList" @click="verLista">
        <svg
          class="icon_home"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 548 542.78"
        >
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

    <md-icon class="icon_scroll_bottom">keyboard_arrow_down</md-icon>
    <div class="degradado"></div>

    <md-dialog
      :md-active.sync="showDialog"
      class="dialog_producto_detalle"
      v-bind:class="jsonConfig.dataHome.classDialogCustom"
    >
      <md-button class="md-fab md-mini btn_close" @click="closeDialog">
        <md-icon
          class="icon_btn_menu"
          v-bind:style="jsonConfig.bgDegradedColorPrimary"
          >close</md-icon
        >
      </md-button>

      <div class="content_detalle">
        <div
          class="imagen_prod_detalle"
          v-bind:style="{
            'background-image': 'url(' + '\'' + imagenAMostrar + '\')',
          }"
        >
          <p
            v-if="articuloSelected.descripcion_imagen !== ''"
            class="info_imagen"
          >
            {{ articuloSelected.descripcion_imagen }}
          </p>
          <p
            v-if="articuloSelected.logo !== ''"
            class="simbologia_legal"
            v-bind:style="jsonConfig.bgDegradedColorPrimary"
          >
            {{ articuloSelected.logo }}
          </p>
        </div>

        <div class="content_experiencias_detalles">
          <md-avatar
            :key="j"
            v-for="(experiencia, j) in articuloSelected.experiencias"
            class="icon_experiencia"
          >
            <img :src="experiencia.ubicacion" alt="experiencia" />
            <md-tooltip md-direction="left">{{
              experiencia.nombre
            }}</md-tooltip>
          </md-avatar>
        </div>

        <h3
          class="title_platillo_detalle"
          v-bind:style="jsonConfig.dataDetalles.colorTitleProd"
        >
          {{ articuloSelected.platillo }}
          <span
            class="tam_platillo"
            v-bind:style="jsonConfig.dataDetalles.colorTitleProd"
          >
            {{ articuloSelected.cantidad_x_porcion }}
          </span>
        </h3>

        <p class="desc_platillo_detalle">
          {{ articuloSelected.descripcion_articulo }}
        </p>

        <div
          class="md-layout md-gutter md-alignment-center-left card-extras"
          v-if="false"
        >
          <div class="md-layout-item  md-size-45">
            <p class="text_extra">
              {{/*extra.nombre*/}}
            </p>
          </div>
          <div class="md-layout-item  md-size-45">
            <p class="text_extra">+ ${{/*parseInt(extra.precio_acapulco)*/}}</p>
          </div>
        </div>

        <p class="terminos_platillo_detalle" v-bind:style="jsonConfig.b">
          {{ articuloSelected.simbologia }}
        </p>

        <div
          class="md-layout md-gutter md-alignment-left-center content-medidas"
        >
          <div
            class="md-layout-item card-medidas md-size-45"
            :key="j"
            v-for="(medida, j) in articuloSelected.medidas"
          >
            <div class="content_title_medida">
              <h3>
                {{ medida.nombre_medida }}
              </h3>
            </div>
            <p class="precio_detalle">
              <span
                class="tam_platillo_medida"
                v-if="medida.cantidad_x_porcion_medida !== ''"
                >{{
                  medida.cantidad_x_porcion_medida === ""
                    ? ""
                    : "(" + medida.cantidad_x_porcion_medida + ")"
                }}</span
              >
              {{ medida.precio == 0 ? "" : "$" + Math.trunc(medida.precio) }}
            </p>
          </div>
        </div>
        <md-button
          class="md-raised md-accent btn_add_orden"
          @click="showDialogAdd = true"
          v-bind:style="jsonConfig.bgDegradedColorPrimary"
        >
          AGREGAR A MI LISTA
        </md-button>
      </div>
    </md-dialog>

    <md-dialog
      :md-active.sync="showDialogAdd"
      class="dialog_producto_add"
      v-bind:class="jsonConfig.dataHome.classDialogCustom"
    >
      <div
        class="content_add_prod"
        v-bind:style="jsonConfig.dataDetalles.style_content_add_prod"
      >
        <h3
          class="title_platillo_detalle_list"
          v-bind:style="jsonConfig.dataDetalles.colorTitleProd"
        >
          {{ articuloSelected.platillo }}
        </h3>
        <div class="md-layout md-gutter">
          <div
            class="md-layout-item md-size-50 content_medida"
            :key="j"
            v-for="(medida, j) in articuloSelected.medidas"
            @click="selectMedida(medida)"
          >
            <p
              class="desc_medida"
              v-bind:class="{
                select_medida: medida.selected == 0 ? false : true,
              }"
            >
              {{ medida.nombre_medida }}
            </p>
          </div>
        </div>
        <p class="txt_advertencia">
          ¿Está seguro de que quiere añadir este producto a su lista?
        </p>

        <md-dialog-actions>
          <md-button
            class="btnConfirm"
            @click="addToList"
            v-bind:style="jsonConfig.dataHome.btnConfirmar"
            >Sí</md-button
          >
          <md-button
            v-bind:style="jsonConfig.dataHome.btnCancel"
            class="md-primary btnCancel"
            @click="showDialogAdd = false"
            >No</md-button
          >
        </md-dialog-actions>
      </div>
    </md-dialog>

    <md-dialog
      :md-active.sync="showDialogExtra"
      class="dialog_producto_add"
      v-bind:class="jsonConfig.dataHome.classDialogCustom"
    >
      <div
        class="content_add_prod"
        v-bind:style="jsonConfig.dataDetalles.style_content_add_prod"
      >
        <h3
          class="title_platillo_detalle_list"
          v-bind:style="jsonConfig.dataDetalles.colorTitleProd"
        >
          {{ articuloSelected.platillo }}
        </h3>
        <div class="md-layout md-gutter">
          <div
            class="md-layout-item md-size-50 content_medida"
            :key="j"
            v-for="(medida, j) in articuloSelected.medidas"
            @click="selectMedida(medida)"
          >
            <p
              class="desc_medida"
              v-bind:class="{
                select_medida: medida.selected == 0 ? false : true,
              }"
            >
              {{ medida.nombre_medida }}
            </p>
          </div>
        </div>
        <p class="txt_advertencia">
          ¿Desea agregar un extra?
        </p>

        <md-dialog-actions>
          <md-button
            class="btnConfirm"
            @click="addToList"
            v-bind:style="jsonConfig.dataHome.btnConfirmar"
            >Sí</md-button
          >
          <md-button
            v-bind:style="jsonConfig.dataHome.btnCancel"
            class="md-primary btnCancel"
            @click="showDialogAdd = false"
            >No</md-button
          >
        </md-dialog-actions>
      </div>
    </md-dialog>

    <p style="clear: both;"></p>
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
//import ListaParaOrdenar from "@/components/ListaParaOrdenar.vue";
import { Carousel3d, Slide, Controls } from "vue-carousel-3d";
//import json from "../assets/config/toks.json";

export default {
  name: "Home",
  data() {
    return {
      categorias: [],
      showSideRight: false,
      experiencias: [],
      widthItem: 300,
      heightItem: 300,
      widthItemExp: 320,
      showDialog: false,
      showDialogAdd: false,
      showDialogExtra: false,
      nombre_categoria: "Categoria",
      descripcion_categoria: null,
      img_categoria: "nu",
      articuloSelected: {
        platillo: "Producto",
        descripcion_articulo: "Descripcion",
      },
      showLista: false,
      listaParaOrdenar: [],
      medidaSelected: [],
      nPedidos: 0,
      jsonConfig: this.$json,
      imagenAMostrar: null,
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
    openSide() {
      //alert();
      this.showSideRight = true;
      this.$emit("update", true);
    },
    selectMedida(medida) {
      //alert(medida.selected);

      this.articuloSelected.medidas.map((item, index) => {
        item.selected = false;
      });
      this.medidaSelected = medida;
      medida.selected = true;
    },
    addToList() {
      var agregado = false;
      console.log(this.medidaSelected);
      if (this.articuloSelected.medidas.length === 0) {
        this.showDialogAdd = false;
        this.showDialog = false;

        this.listaParaOrdenar.map((item, index) => {
          if (item.id_articulo === this.articuloSelected.id_articulo) {
            //alert("Producto se encuentra");
            item.cantidad_articulo = item.cantidad_articulo + 1;
            agregado = true;
          }
        });

        if (agregado === false) {
          const obj = {
            id_articulo: this.articuloSelected.id_articulo,
            ubicacion_articulo: this.articuloSelected.ubicacion_articulo,
            platillo: this.articuloSelected.platillo,
            precio: this.articuloSelected.precio,
            cantidad_articulo: 1,
            selected: 0,
          };
          this.listaParaOrdenar.push(obj);
        }

        //this.listaParaOrdenar.push(this.articuloSelected);
      } else {
        this.listaParaOrdenar.map((item, index) => {
          if (this.medidaSelected.id === item.id_articulo) {
            //alert("Producto se encuentra " + this.medidaSelected.id + " -- " + item.id_articulo);
            item.cantidad_articulo = item.cantidad_articulo + 1;
            agregado = true;
          }
        });

        if (agregado === false) {
          if (this.medidaSelected.precio === "0") {
            //alert("tiene");
            const obj = {
              id_articulo: this.medidaSelected.id,
              ubicacion_articulo: this.articuloSelected.ubicacion_articulo,
              platillo:
                this.articuloSelected.platillo +
                "(" +
                this.medidaSelected.nombre_medida +
                ")",
              precio: this.articuloSelected.precio,
              cantidad_articulo: 1,
              selected: 0,
            };
            this.listaParaOrdenar.push(obj);
          } else {
            const obj = {
              id_articulo: this.medidaSelected.id,
              ubicacion_articulo: this.articuloSelected.ubicacion_articulo,
              platillo:
                this.articuloSelected.platillo +
                "(" +
                this.medidaSelected.nombre_medida +
                ")",
              precio: this.medidaSelected.precio,
              cantidad_articulo: 1,
              selected: 0,
            };
            this.listaParaOrdenar.push(obj);
          }
        }

        this.showDialogAdd = false;
        this.showDialog = false;

        this.medidaSelected.selected = false;
        console.log(this.articuloSelected.medidas[0]);
        this.medidaSelected = this.articuloSelected.medidas[0];
        this.medidaSelected.selected = true;
      }
      this.saveToCookie();
      this.nPedidos = this.listaParaOrdenar.length;
    },
    saveToCookie() {
      var json_str = JSON.stringify(this.listaParaOrdenar);
      document.cookie = "listaCompraEKS=" + json_str;
    },
    primeraMayuscula(text) {
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    },
    titleCase(texto) {
      const re = /(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(?:([a-záéíóúüñ])|([A-ZÁÉÍÓÚÜÑ]))|([A-ZÁÉÍÓÚÜÑ]+)/gu;
      return texto.replace(
        re,
        (
          m,
          caracterPrevio,
          minuscInicial,
          mayuscInicial,
          mayuscIntermedias
        ) => {
          const locale = ["es", "gl", "ca", "pt", "en"];
          if (mayuscIntermedias)
            return mayuscIntermedias.toLocaleLowerCase(locale);
          return (
            caracterPrevio +
            (minuscInicial
              ? minuscInicial.toLocaleUpperCase(locale)
              : mayuscInicial)
          );
        }
      );
    },
    loadImgArticulo(articulo) {
      
      if (articulo.ubicacion_articulo === "") {
        //alert("sin imagen");
      }
    },
    loadImgError(articulo) {
     // alert();
      articulo.ubicacion_articulo_min = require("../assets/img/image-not-found.png");
      articulo.ubicacion_articulo = require("../assets/img/image-not-found.png");
      //articulo.ubicacion_articulo = "https://pruebasgerard.com/menudigital/categorias/Volcanes.1593472406.jpg";
      //alert(articulo.ubicacion_articulo);
    },
    closeDialog() {
      this.showDialog = false;
      this.nPedidos = this.listaParaOrdenar.length;
    },
    closeLista() {
      this.showLista = false;
      this.nPedidos = this.listaParaOrdenar.length;
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
        //alert();
        var arr = JSON.parse(lista);
        this.listaParaOrdenar = arr;

        this.nPedidos = this.listaParaOrdenar.length;
      }
    },
    verLista() {
      this.showLista = true;
      this.nPedidos = this.listaParaOrdenar.length;
    },
    openDialog(articulo) {
      console.log("hola");
      console.log(articulo);
      if (articulo.medidas.length === 0) {
      } else {
        articulo.medidas[0].selected = 1;
        this.medidaSelected = articulo.medidas[0];
      }

      this.articuloSelected = articulo;
      if (
        articulo.detalle_imagen === "null" ||
        articulo.detalle_imagen === ""
      ) {
        console.log(articulo.ubicacion_articulo);
        if (
          articulo.ubicacion_articulo === null
        ) {
          this.imagenAMostrar = require("../assets/img/image-not-found.png");;
        } else {
          this.imagenAMostrar = articulo.ubicacion_articulo;
        }
      } else {
        this.imagenAMostrar = articulo.detalle_imagen;
      }
      this.showDialog = true;
    },
    goToHome() {
      //this.$router.push("/");
      this.$router.go(-1);
    },
    goBack() {
      this.$router.go(-1);
      if (window.stop !== undefined) {
        window.stop();
      } else if (document.execCommand !== undefined) {
        document.execCommand("Stop", false);
      }
      //this.$router.push("/home/" + this.$route.params.id);
    },
  },
  mounted() {
    var d = new Date();
    this.nombre_categoria = this.$route.query.nombre_categoria;
    this.img_categoria = this.$route.query.img_categoria;
    var lista = "";
    var id_unidad = "";
    var id_unidad_eks = "id_unidad_eks" + "=";
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
      //alert();
      var arr = JSON.parse(lista);
      this.listaParaOrdenar = arr;

      this.nPedidos = this.listaParaOrdenar.length;
    }
    const baseURI =
      this.$baseURL + "/menudigital/index.php/articulo/articulos_categoria";
    this.$http
      .get(
        baseURI,
        {
          params: {
            sucursal: localStorage.getItem("id_unidad_eks"),
            id_marca: this.$id_marca,
            categoria: this.$route.query.categoria,
            hora_solicitud: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(),
            fecha_solicitud: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
            agent: navigator.userAgent,
            token:
              "e9840b0b4143fc82ef6d8bdb36c96a8dd1cd501be8f3c6f0f3887a80bd70e3fd7b4c9205d524cb1a5502a6325e38e09ab4b8de58d0f0c39f6019aaba682ec8b7",
          },
        },
        { "Access-Control-Allow-Origin": "*" }
      )
      .then((res) => {
        if (res.data.status === "OK") {
          console.log(navigator.appVersion);
          this.descripcion_categoria = res.data.categoria.descripcion;
          this.categorias = res.data.categoria;

          res.data.categoria.subcategoria.map((item, index) => {
            console.log(item.articulos[index]);
            //item.articulos[index].articulos.map((itemSub) => {
            //console.log(item.articulos);
            console.log("entro");
            //});
          });
          //Object.assign(item, {key3: "value3"});

          this.sending = false;
        }

        if (res.data.status.toUpperCase() === "ERROR") {
          this.alertMessage = res.data.respuesta;
          this.showSnackbar = true;
          this.sending = false;
          //this.$router.push("/");
        }
      });
  },

  created() {
    window.addEventListener("resize", this.getWindowTam);

    //window.addEventListener('orientationchange', () => alert('hello'), false);
  },
};
</script>

<style>
body {
  background: #2f2f30 0% 0% no-repeat padding-box;
  opacity: 1;
  font-family: FontMain;
  /*height: 100vh;*/
}

.degradado {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: block;
  height: 60px;
  z-index: 1;
  background: rgba(0, 0, 0, 0);
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 0.66) 51%,
    rgba(0, 0, 0, 0.71) 55%,
    rgba(0, 0, 0, 0.79) 71%,
    rgba(0, 0, 0, 0.77) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(50%, rgba(0, 0, 0, 0.65)),
    color-stop(51%, rgba(0, 0, 0, 0.66)),
    color-stop(55%, rgba(0, 0, 0, 0.71)),
    color-stop(71%, rgba(0, 0, 0, 0.79)),
    color-stop(100%, rgba(0, 0, 0, 0.77))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 0.66) 51%,
    rgba(0, 0, 0, 0.71) 55%,
    rgba(0, 0, 0, 0.79) 71%,
    rgba(0, 0, 0, 0.77) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 0.66) 51%,
    rgba(0, 0, 0, 0.71) 55%,
    rgba(0, 0, 0, 0.79) 71%,
    rgba(0, 0, 0, 0.77) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 0.66) 51%,
    rgba(0, 0, 0, 0.71) 55%,
    rgba(0, 0, 0, 0.79) 71%,
    rgba(0, 0, 0, 0.77) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 0.66) 51%,
    rgba(0, 0, 0, 0.71) 55%,
    rgba(0, 0, 0, 0.79) 71%,
    rgba(0, 0, 0, 0.77) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=0 );
}

.degradado_left {
  position: fixed;
  bottom: 0%;
  width: 5%;
  right: 0;
  display: block;
  height: 75%;
  z-index: 2;
  background: rgba(0, 0, 0, 0);
  background: -moz-linear-gradient(
    left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 22%,
    rgba(0, 0, 0, 0.36) 39%,
    rgba(0, 0, 0, 0.49) 53%,
    rgba(0, 0, 0, 0.5) 55%,
    rgba(0, 0, 0, 0.55) 71%,
    rgba(0, 0, 0, 0.56) 73%,
    rgba(0, 0, 0, 0.68) 87%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(22%, rgba(0, 0, 0, 0.2)),
    color-stop(39%, rgba(0, 0, 0, 0.36)),
    color-stop(53%, rgba(0, 0, 0, 0.49)),
    color-stop(55%, rgba(0, 0, 0, 0.5)),
    color-stop(71%, rgba(0, 0, 0, 0.55)),
    color-stop(73%, rgba(0, 0, 0, 0.56)),
    color-stop(87%, rgba(0, 0, 0, 0.68)),
    color-stop(97%, rgba(0, 0, 0, 0.71)),
    color-stop(100%, rgba(0, 0, 0, 0.85))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 22%,
    rgba(0, 0, 0, 0.36) 39%,
    rgba(0, 0, 0, 0.49) 53%,
    rgba(0, 0, 0, 0.5) 55%,
    rgba(0, 0, 0, 0.55) 71%,
    rgba(0, 0, 0, 0.56) 73%,
    rgba(0, 0, 0, 0.68) 87%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 22%,
    rgba(0, 0, 0, 0.36) 39%,
    rgba(0, 0, 0, 0.49) 53%,
    rgba(0, 0, 0, 0.5) 55%,
    rgba(0, 0, 0, 0.55) 71%,
    rgba(0, 0, 0, 0.56) 73%,
    rgba(0, 0, 0, 0.68) 87%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 22%,
    rgba(0, 0, 0, 0.36) 39%,
    rgba(0, 0, 0, 0.49) 53%,
    rgba(0, 0, 0, 0.5) 55%,
    rgba(0, 0, 0, 0.55) 71%,
    rgba(0, 0, 0, 0.56) 73%,
    rgba(0, 0, 0, 0.68) 87%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 22%,
    rgba(0, 0, 0, 0.36) 39%,
    rgba(0, 0, 0, 0.49) 53%,
    rgba(0, 0, 0, 0.5) 55%,
    rgba(0, 0, 0, 0.55) 71%,
    rgba(0, 0, 0, 0.56) 73%,
    rgba(0, 0, 0, 0.68) 87%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=1 );
}

.icon_scroll_bottom {
  color: #eee !important;
  bottom: 60px;
  left: 48%;
  position: fixed;
  opacity: 0.5;
}

.icon_scroll_right {
  position: absolute;
  color: #eee !important;
  top: 0;
  z-index: 2;
  right: 0;
  bottom: 25%;
  opacity: 0.5;
}

.md-card.md-theme-default {
  background-color: #f5f4f400 !important;
}

.card-medidas {
  padding-top: 6px;
  margin: 3px;
  padding-left: 5px !important;
  padding-right: 5px !important;
  margin-top: 15px;
}

.card-medidas:hover {
  /*border: 1px solid #f58220;
  border-radius: 5px;*/
}

.card-medidas > div > h3,
.card-medidas > p {
  text-align: center;
  font-weight: normal;
  color: #fff;
  margin-bottom: 3px;
  font-size: 100%;
  text-align: center !important;
}

.card-medidas > div > h3 {
  width: 90% !important;
  line-height: 1.1;
}

.card-medidas > p {
  margin-top: 7px !important;
  font-size: 15px;
}

.card-medidas > p > span {
  font-size: 12px;
}

.content_title_medida {
  display: flex;
  justify-content: center;
  align-items: center;
  /*height: 25px;*/
  height: 34%;
}

.card-medidas > div > h3 {
  /*margin-bottom: 10px !important;*/
  margin: 0;
  text-align: left;
  width: 100%;
  /*height: 30px;*/
}

.card-medidas > p {
  margin-top: 5px;
  position: relative;
  text-align: left;
}

.simbologia_legal {
  margin: 0;
  position: absolute;
  bottom: 0;
  right: 0.4px;
  background-color: #f58220;
  width: auto;
  padding: 4px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-weight: bold;
}

.info_imagen {
  font-size: 9px;
  left: 0.4px;
  top: 0;
  margin: 0;
  padding-top: 4px;
  padding-left: 15px;
  background-color: rgba(0, 0, 0, 0.329);
  width: fit-content;
  color: #eee;
  border-top-left-radius: 20px;
  padding-right: 10px;
  font-weight: 200 !important;
  font-family: FontMain;
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
  height: calc(30%);
  z-index: 1;
}

.btnMenuRight {
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box !important;
  border-radius: 25px !important;
  opacity: 1 !important;
  position: fixed;
  top: 14px;
  right: 5px;
  /*z-index: 5 !important;*/
}

.btnMenuReturn {
  background-color: #00000000 !important;
  border-radius: 25px !important;
  opacity: 1 !important;
  position: fixed;
  top: 15px;
  left: 0;
  box-shadow: none;
}

.btnCancel {
  color: #fff !important;
  box-shadow: 2px 2px 2px #00000080;
  border-radius: 24px;
  opacity: 1;
}

.btnConfirm {
  color: #fff !important;
  box-shadow: 2px 2px 2px #00000080;
  border-radius: 24px;
  opacity: 1;
}

.nombre_categoria {
  position: fixed;
  top: 0px;
  left: 50%;
  width: 240px;
  margin-left: -120px;
  color: #fff;
  font-family: FontMain !important;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2.5vh;

  /*background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
  background: transparent
    linear-gradient(
      180deg,
      var(--unnamed-color-191919) 0%,
      var(--unnamed-color-00000000) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent linear-gradient(180deg, #191919 0%, #000000 100%) 0%
    0% no-repeat padding-box;*/
  box-shadow: 0px 1px 0px #5b5b5b;
  border-radius: 24px;
  opacity: 1;
}

.productos {
  position: fixed;
  top: calc(34% + 55px);
  width: 100%;
  height: calc(100% - 40%);
  overflow-y: auto;
  padding-bottom: 60px;
  padding-top: 12px;
  /*Pendiente
  background:linear-gradient( 181deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.06) -5%, rgba(0, 0, 0, 0.73) 79% );
  background: linear-gradient(181deg, #2f2f30 0%, #2f2f30 60%, #0f0f0f 95%);*/
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
  width: fit-content;
}

.img_producto {
  object-fit: cover;
  height: 145px !important;
  width: 145px !important;
  object-position: center;
  border-radius: 25px !important;
}

.card_producto {
  height: 145px !important;
  width: 144px !important;
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

.card-producto > div {
  box-shadow: none !important;
}

.content-layout-producto {
  /*overflow: auto;*/
  height: 54% !important;
  overflow: auto !important;
  padding-bottom: 18px !important;
}

.content-layout-producto > div {
  margin-bottom: 50px !important;
  padding-bottom: 18px !important;
}

.header_title {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

.price {
  color: #eee;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #f58220;
  width: 46%;
}

.title_producto {
  color: #eee !important;
  font-size: 13px !important;
  opacity: inherit !important;
  position: absolute;
  width: 100%;
  text-align: center;
  left: 0;
  bottom: -40px;
  white-space: break-spaces;
  height: 38px;

  display: grid;

  line-height: normal;
  /*align-items: center;
  vertical-align: middle;*/

  font-family: FontMain;
}

.subcategoria {
  height: 30px;
  text-align: left;
  width: auto;
  height: 210px;
  padding: 10px;
  white-space: nowrap;
  overflow-x: auto;
  font-family: FontMain;
  position: relative;
}

.menu_home_bottom {
  position: fixed;
  z-index: 2;
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
  background-color: #f58220 !important;
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
  position: relative;
}

.dialog_producto_detalle {
  transition-duration: inherit;
  overflow: auto;
}

.dialog_producto_detalle > div {
  background: inherit !important;
  width: 92% !important;
  padding: 10px;
  max-height: fit-content;
  box-shadow: none;
  position: relative;
  height: auto !important;
  transition: inherit;
}

.dialog_producto_add > div {
  width: 75% !important;
  background-color: rgba(41, 41, 41, 0) !important;
  box-shadow: no;
  height: auto;
  border: 15px !important;
}

.dialog_producto_add > div > div {
  border: none !important;
}

.dialog_producto_add {
  background-color: rgba(41, 41, 41, 0.753) !important;
}

.imagen_prod_detalle {
  position: relative;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 34vh;
  display: block;
  border-top-left-radius: 24px;
  border-top-right-radius: 23px;
}

.title_platillo_detalle {
  /*color: #f58220 !important;*/
  padding-left: 20px;
  font-weight: normal;
  width: 78%;
  font-size: 21px;
  position: relative;
  padding-right: 20px;
}

.title_platillo_detalle_list {
  color: #f58220 !important;
  padding-left: 20px;
  font-weight: 400;
  font-size: 21px;
  position: relative;
  padding-right: 20px;
  text-align: center;
  width: 100%;
}

.txt_advertencia {
  color: #fff;
  text-align: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
}

.tam_platillo {
  color: #f58220 !important;
  font-size: 60%;
  position: relative;
  top: 0px;
  margin-left: 0px;
}

.tam_platillo_medida {
  font-size: 60%;
  position: relative;
  margin-left: 1px;
  bottom: 0px;
  font-weight: 400;
}

.desc_platillo_detalle {
  color: #eee;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.2;
  margin-bottom: 0 !important;
  white-space: pre-line;
}

.card-extras {
  margin-top: 0px;
}

.text_extra {
  color: #eee;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.2;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 0 !important;
  white-space: pre-line;
  text-align: left !important;
}

.terminos_platillo_detalle {
  margin-top: 10px !important;
  font-size: 12px;
  color: #8b8b8b;
  padding-left: 20px;
  padding-right: 20px;
  white-space: pre-line;
  line-height: 1.3;
  max-height: 18vh;
  overflow: auto;
}

.content-medidas {
  max-height: 25vh;
  overflow-y: auto;
  padding-left: 20px;
}

.indicacion_platillo_detalle {
  margin-top: 10px;
  color: #f58220 !important;
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
  border: solid 2px #f58220;
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
}

.content_add_prod {
  /*background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000042;*/
  border-radius: 15px;
  opacity: 1;
}

.content_add_prod > div {
  width: fit-content;
  margin-left: auto !important;
  margin: auto !important;
}

.btn_add_orden {
  background-color: #f58220 !important;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 45px;
  margin-top: 30px;
  display: block;
  padding-left: 15px !important;
  padding-right: 15px !important;
  border-radius: 25px;
  margin-bottom: 4vh;
  margin-top: 2vh;
  font-weight: bold;
}

.btn_close {
  width: 25px !important;
  height: 25px !important;
  position: absolute;
  right: 1px;
  border-radius: 100% !important;
  z-index: 10;
  top: 0 !important;
  width: 100%;
  padding-left: 2px !important;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 0px;
  /*background-color: #f58220 !important;*/
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: inherit !important;
}

.btn_close > div > div > i {
  color: rgb(0, 0, 0) !important;
}

.icon_home {
  width: 28px;
  height: 28px;
}

.numero_prods {
  position: absolute;
  color: #fff;
  top: 0 !important;
  background-color: orange;
  border-radius: 100%;
  margin: 0;
  right: 0;
}

.content_experiencias_detalles {
  display: block;
  position: absolute;
  right: 12px;
}

.icon_experiencia {
  /*position: absolute;*/
  right: 12px;
  border-radius: 0;
  width: auto;
  margin-top: 0px;
  height: 48px;
  margin-left: 5px;
}

.icon_experiencia > img {
  width: auto;
      height: 52px; 
}

.txt_decimal {
  font-size: 70%;
  position: absolute;
  top: -1.5px;
}

.precio_detalle {
  font-weight: bold !important;
}

.ic_back {
  font-size: 35px !important;
}

.content_medida {
  color: #eee;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  display: inline-flex;
}

.desc_medida {
  width: auto;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5px;
  padding-top: 5px;
  background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000042;
  border-radius: 3px;
  opacity: 1;
  padding-left: 3px;
  padding-right: 3px;
}

.select_medida {
  border: 1px solid #fff;
}

.desc_categoria {
  white-space: pre-line;
  position: absolute;
  text-align: right;
  font-size: 11px;
  bottom: 0;
  right: 0;
  padding: 10px;
  width: 100%;
  margin: 0;
  color: #eee;
  background: rgba(0, 0, 0, 0);
  background: -moz-linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.09) 22%,
    rgba(0, 0, 0, 0.15) 30%,
    rgba(0, 0, 0, 0.25) 39%,
    rgba(0, 0, 0, 0.28) 42%,
    rgba(0, 0, 0, 0.39) 53%,
    rgba(0, 0, 0, 0.41) 55%,
    rgba(0, 0, 0, 0.49) 64%,
    rgba(0, 0, 0, 0.48) 71%,
    rgba(0, 0, 0, 0.48) 72%,
    rgba(0, 0, 0, 0.48) 73%,
    rgba(0, 0, 0, 0.47) 77%,
    rgba(0, 0, 0, 0.55) 87%,
    rgba(0, 0, 0, 0.57) 89%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(10%, rgba(0, 0, 0, 0)),
    color-stop(22%, rgba(0, 0, 0, 0.09)),
    color-stop(30%, rgba(0, 0, 0, 0.15)),
    color-stop(39%, rgba(0, 0, 0, 0.25)),
    color-stop(42%, rgba(0, 0, 0, 0.28)),
    color-stop(53%, rgba(0, 0, 0, 0.39)),
    color-stop(55%, rgba(0, 0, 0, 0.41)),
    color-stop(64%, rgba(0, 0, 0, 0.49)),
    color-stop(71%, rgba(0, 0, 0, 0.48)),
    color-stop(72%, rgba(0, 0, 0, 0.48)),
    color-stop(73%, rgba(0, 0, 0, 0.48)),
    color-stop(77%, rgba(0, 0, 0, 0.47)),
    color-stop(87%, rgba(0, 0, 0, 0.55)),
    color-stop(89%, rgba(0, 0, 0, 0.57)),
    color-stop(97%, rgba(0, 0, 0, 0.71)),
    color-stop(100%, rgba(0, 0, 0, 0.85))
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.09) 22%,
    rgba(0, 0, 0, 0.15) 30%,
    rgba(0, 0, 0, 0.25) 39%,
    rgba(0, 0, 0, 0.28) 42%,
    rgba(0, 0, 0, 0.39) 53%,
    rgba(0, 0, 0, 0.41) 55%,
    rgba(0, 0, 0, 0.49) 64%,
    rgba(0, 0, 0, 0.48) 71%,
    rgba(0, 0, 0, 0.48) 72%,
    rgba(0, 0, 0, 0.48) 73%,
    rgba(0, 0, 0, 0.47) 77%,
    rgba(0, 0, 0, 0.55) 87%,
    rgba(0, 0, 0, 0.57) 89%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.09) 22%,
    rgba(0, 0, 0, 0.15) 30%,
    rgba(0, 0, 0, 0.25) 39%,
    rgba(0, 0, 0, 0.28) 42%,
    rgba(0, 0, 0, 0.39) 53%,
    rgba(0, 0, 0, 0.41) 55%,
    rgba(0, 0, 0, 0.49) 64%,
    rgba(0, 0, 0, 0.48) 71%,
    rgba(0, 0, 0, 0.48) 72%,
    rgba(0, 0, 0, 0.48) 73%,
    rgba(0, 0, 0, 0.47) 77%,
    rgba(0, 0, 0, 0.55) 87%,
    rgba(0, 0, 0, 0.57) 89%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.09) 22%,
    rgba(0, 0, 0, 0.15) 30%,
    rgba(0, 0, 0, 0.25) 39%,
    rgba(0, 0, 0, 0.28) 42%,
    rgba(0, 0, 0, 0.39) 53%,
    rgba(0, 0, 0, 0.41) 55%,
    rgba(0, 0, 0, 0.49) 64%,
    rgba(0, 0, 0, 0.48) 71%,
    rgba(0, 0, 0, 0.48) 72%,
    rgba(0, 0, 0, 0.48) 73%,
    rgba(0, 0, 0, 0.47) 77%,
    rgba(0, 0, 0, 0.55) 87%,
    rgba(0, 0, 0, 0.57) 89%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.09) 22%,
    rgba(0, 0, 0, 0.15) 30%,
    rgba(0, 0, 0, 0.25) 39%,
    rgba(0, 0, 0, 0.28) 42%,
    rgba(0, 0, 0, 0.39) 53%,
    rgba(0, 0, 0, 0.41) 55%,
    rgba(0, 0, 0, 0.49) 64%,
    rgba(0, 0, 0, 0.48) 71%,
    rgba(0, 0, 0, 0.48) 72%,
    rgba(0, 0, 0, 0.48) 73%,
    rgba(0, 0, 0, 0.47) 77%,
    rgba(0, 0, 0, 0.55) 87%,
    rgba(0, 0, 0, 0.57) 89%,
    rgba(0, 0, 0, 0.71) 97%,
    rgba(0, 0, 0, 0.85) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=1 );
}

.content_card_prod {
  margin-top: 8px;
}

.content-layout-producto {
  position: fixed;
  width: 400px;
  left: 50%;
  margin-left: -45% !important;
}

.content_producto {
  display: inline;
}

.layout-producto {
  margin-bottom: 40px;
  width: fit-content !important;
  min-width: inherit !important;
  max-width: inherit !important;
  display: contents;
  margin-left: 10px !important;
}

ul#menu {
  list-style-type: none;
  margin: 20px 0px;
  padding: 0px;
}
ul#menu li {
  float: left;
}
ul#menu li {
  display: block;
  margin: 5px;
  padding: 15px;
  border: 1px solid #1a1a1a;
  background-color: #b3b3b3;
  text-decoration: none;
  color: #333;
  font-size: 110%;
}

@media (min-width: 320px) and (max-width: 400px) {
  .imagen_prod_detalle {
    height: 32vh;
  }

  .btn_close {
    right: 1%;
    top: 9%;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .nombre_categoria {
    font-size: 15px;
    top: 4px;
    left: 50%;
    width: 230px;
    margin-left: -120px;
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

  .title_platillo_detalle {
    font-size: 16px;
    padding-right: 0px;
  }

  .terminos_platillo_detalle {
    margin-bottom: 0;
    font-size: 95%;
    max-height: 14vh;
  }

  .desc_platillo_detalle {
    font-size: 95%;
    max-height: 25vh;
    overflow: auto;
  }

  .card_producto {
    height: 120px !important;
    width: 120px !important;
  }

  .card-medidas {
    padding-top: 0px;
  }

  .img_producto {
    height: 121px !important;
  }

  .title_producto.title_producto {
    font-size: 12px !important;
  }

  .content-layout-producto {
    position: fixed !important;
    width: 320px !important;
    left: 50% !important;
    margin-left: -150px !important;
  }

  .card-medidas > p {
    margin-top: 20px !important;
    font-size: 93%;
  }
}

@media (min-width: 400px) and (max-width: 498px) {
  .content-layout-producto {
    position: fixed !important;
    width: 320px !important;
    left: 50% !important;
    margin-left: -150px !important;
  }

  .card-medidas > p {
    margin-top: 14px !important;
    font-size: 15px;
  }
}

@media (min-width: 601px) {
  .md-dialog-fullscreen {
    transform: translate(0) !important;
  }
}

@media (min-width: 600px) and (max-width: 767px) {
  .dialog_producto_detalle > div {
    width: 67% !important;
  }
}

@media (min-width: 500px) and (max-width: 700px) {
  .content-layout-producto {
    position: fixed !important;
    width: 480px !important;
    left: 50% !important;
    margin-left: -225px !important;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .imagen_prod_detalle {
    height: 43vh;
  }

  .item_contain_img {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
}

@media (min-width: 701px) and (max-width: 900px) {
  .content-layout-producto {
    position: fixed !important;
    width: 480px !important;
    left: 50% !important;
    margin-left: -225px !important;
  }
}

@media (min-width: 901px) and (max-width: 1200px) {
  .content-layout-producto {
    position: fixed !important;
    width: 800px !important;
    left: 50% !important;
    margin-left: -400px !important;
  }
}

@media (min-width: 1201px) {
  .content-layout-producto {
    position: fixed !important;
    width: 950px !important;
    left: 50% !important;
    margin-left: -460px !important;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .dialog_producto_detalle > div {
    width: 55% !important;
  }

  .imagen_prod_detalle {
    height: 46vh;
  }

  .dialog_producto_add > div {
    width: 35% !important;
  }

  .title_platillo_detalle {
    width: 90%;
    padding-right: 20px;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .dialog_producto_detalle > div {
    width: 45.5% !important;
  }

  .imagen_prod_detalle {
    height: 46vh !important;
  }
  .dialog_producto_add > div {
    width: 28% !important;
  }

  .title_platillo_detalle {
    width: 90%;
    padding-right: 20px;
  }
}

@media (min-width: 1281px) {
  .dialog_producto_detalle > div {
    width: 42% !important;
  }

  .imagen_prod_detalle {
    height: 48vh;
  }

  .dialog_producto_add > div {
    width: 28% !important;
  }
}

/**/
.dialog_customToks > div {
  /*background: transparent linear-gradient(180deg, #2f2f30 0%, #262628 100%) 0%
    0% no-repeat padding-box;
    border: 2px solid #F58220;
    background: inherit ;*/
}

.dialog_customBF > div > .content_detalle {
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
  border: 2px solid #e9bf7d;
  background-color: inherit !important;
}

.dialog_customBF > div {
  background: inherit;
}

.dialog_customElFarolito > div > .content_detalle {
  background: transparent linear-gradient(180deg, #cf1a33 0%, #ad182d 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #fff;
}
</style>
