<template>
  <div class="configuracion">
    <p class="nombre_seccion">
      hola
    </p>
  </div>
</template>

<script>
export default {
  name: "Configuracion",
  props: {
    showConfiguracion: Boolean,
  },
  data() {
    return {
      clickCloseConf: null,
      
    };
  },
  components: {
    Carousel3d,
    Slide,
    Controls,
    SideNav,
  },
};
</script>

<style>

</style>
