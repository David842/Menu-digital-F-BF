<template>
  <md-dialog class="modal_add_comunicado" :md-active="this.verComunicado">
    <md-button
      @click="closeComunicados"
      class="md-raised md-accent btnCloseComunicado"
      ><md-icon>close</md-icon></md-button
    >
    <!--<md-dialog-title>Agregar comunicado</md-dialog-title>-->
    <swiper ref="mySwiper" class="swiper" :options="swiperOption">
      <swiper-slide
        v-bind:style="{
          'background-image': 'url(\'' + $baseURL + comunicado.imagen + '\')',
        }"
        v-for="(comunicado, item) in comunicados"
        :key="item"
        ><a
          v-if="comunicado.link != ''"
          class="link_comunicado"
          target="_blank"
          :href="comunicado.link"
        ></a
      ></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!--md-card class="md-layout-item md-size-90 md-small-size-90">
      <md-card-content>
        <div class="md-layout md-layout-comunicado-add md-gutter">
          
          <div class="md-layout-item md-size-50 md-xsmall-size-100"></div>
        </div>
      </md-card-content>
    </md-card-->
  </md-dialog>
</template>

<script>
// import style
import "swiper/swiper-bundle.min.css";

export default {
  computed: {
    swiper() {
      return this.$refs.awesomeSwiper.swiper;
    },
  },
  props: {
    verComunicado: Boolean,
    comunicados: Array,
  },
  data() {
    return {
      showComunicados: this.verComunicado,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },
      }
    };
  },
  mounted() {
    //this.getComunicados();
  },
  methods: {
    closeComunicados() {
      //this.showComunicados = false
      this.verComunicado = false;
    },
  },
};
</script>

<style>
.modal_add_comunicado > div {
  height: 100% !important;
  width: 50%;
  background-color: inherit !important;
  border-radius: 10px !important;
}

.swiper-pagination-bullet-active {
  background: var(--color-primary) !important;
}

@media (min-width: 320px) and (max-width: 731px) {
  .modal_add_comunicado > div {
    background-size: 100vh !important;
    width: 80%;
    height: 90% !important;
  }
}
</style>

<style lang="scss" scoped>
.swiper {
  height: 100%;
  width: 100%;
  display: flex;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  background-color: #0000007e;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100% !important;
}

.img_comunicado {
  object-fit: cover !important;
  height: 100%;
  width: 300px;
}

.link_comunicado {
  width: 100%;
  height: 100%;
}

.btnCloseComunicado {
  position: absolute;
  z-index: 2;
  top: 0;
  right: -5px;
  width: 40px !important;
  height: 40px !important;
  border-radius: 100%;
  min-width: 0px !important;
  background-color: var(--color-primary) !important;
  font-family: Cocogoose-Pro-trial;
}
</style>
