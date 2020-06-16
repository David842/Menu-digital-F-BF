<template>
  <div class="bienvenido">
    <Splash
      v-if="splashVisible"
      @goMenu="goMenu"
      @openSideLeft="openSideLeft"
      @openSideRightUser="openSideRightUser"
    />
    <SideNavLeftUser :showSideLeftUser="showSideLeftUser" />
    <SideNavRigthContactos :showSideRigthContactos="showSideRigthContactos" />
  </div>
</template>

<script>
// @ is an alias to /src
import Splash from "@/components/Splash.vue";

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
    Splash,
    SideNavLeftUser : () => import("@/components/SideNavLeftUser.vue"),
    SideNavRigthContactos : () => import("@/components/SideNavRigthContactos.vue"),
  },
  data() {
    return {
      showSideLeftUser: false,
      showSideRigthContactos: false,
      splashVisible: true,
    };
  },
  methods: {
    goMenu() {
      //this.splashVisible = false;
      this.$router.push("/home/1");
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
  mounted() {
    
  },
};
</script>

<style>
@font-face {
  font-family: AvenirNextLTPro-Regular;
  src: url(../assets/fonts/AvenirNextLTPro-Regular.ttf);
}
body {
  /*height: 116%;*/
}

#app {
  font-family: AvenirNextLTPro-Regular;
}
</style>
