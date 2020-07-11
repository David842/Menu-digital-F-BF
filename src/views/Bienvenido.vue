<template>
  <div class="bienvenido">
    <Splash
      v-if="splashVisible"
      @goMenu="goMenu"
      @openSideLeft="openSideLeft"
      @openSideRightUser="openSideRightUser"
      :jsonConfig="jsonConfig"
    />
    <SideNavLeftUser :jsonConfig="jsonConfig" :showSideLeftUser="showSideLeftUser" />
    <SideNavRigthContactos :jsonConfig="jsonConfig" :showSideRigthContactos="showSideRigthContactos" />
  </div>
</template>

<script>
// @ is an alias to /src
//import Splash from "@/components/Splash.vue";
//import json from '../assets/config/elfarolito.json'
//import json from '../assets/config/toks.json'
 //import json from '../assets/config/toks.json'

export default {
  name: "Bienvenido",
  watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Menú Toks';
            }
        },
    },
  components: {
    Splash: () => import("@/components/Splash.vue"),
    SideNavLeftUser : () => import("@/components/SideNavLeftUser.vue"),
    SideNavRigthContactos : () => import("@/components/SideNavRigthContactos.vue"),
  },
  data() {
    return {
      showSideLeftUser: false,
      showSideRigthContactos: false,
      splashVisible: true,
      jsonConfig: this.$json,
    };
  },
  methods: {
    goMenu() {
      //this.splashVisible = false;
      this.$router.push({path:"/home/" + this.$id_marca});
    },
    openSideLeft() {
      this.showSideLeftUser = true;
      //this.showSideRigthContactos = false;
      this.$emit("update", true);
    },
    openSideRightUser(){
      
      this.showSideRigthContactos = true;
      this.$emit("updateNavRight", true);
    }
  },
  created() {
    
  },
};
</script>

<style>
@font-face {
  font-family: FontMain;
  src: url(../assets/fonts/Geogtq-Md.otf);
  /*src: url(../assets/fonts/avenir-next-lt-pro.otf);*/
  /*src: url(../assets/fonts/BebasNeue-Regular.otf);*/
  font-display:swap;
}
body {
  /*height: 116%;*/
}

#app {
  font-family: FontMain;
}
</style>
