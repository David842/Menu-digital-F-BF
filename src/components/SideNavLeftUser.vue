<template>
  <div>
    <div
      id="sidenavleftuser"
      class="full-control sidenav "
      :class="{ openSideNavLefUser: clickMenu }"
      @click="onClickSide($event)"
    >
      <div class="list md-scrollbar" @click="onClickSide2($event)"  v-bind:style="styles.dataSideNavLeftUser.bgColor">
        <md-toolbar class="md-transparent toolbar_user" md-elevation="0">
          <!--<md-card class="md-primary card-info-user" md-theme="green-card">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title title_user">¡Hola, Buenos Dias!</div>
              </md-card-header-text>

              <md-card-media>
                <img
                  class="img_avatar_left"
                  src="../assets/img/icon_user.png"
                  alt="Avatar"
                />
              </md-card-media>
            </md-card-header>
          </md-card>-->
        </md-toolbar>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-100">
            <md-list :md-expand-single="expandSingle" >
              
                <md-list-item class="item_list_user" @click="openFormaPagos">
                  <!--<md-icon class="icon_side">credit_card</md-icon>-->
                  <svg
                    class="icon_side"
                    version="1.2"
                    baseProfile="tiny"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 469.3 469.3"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path v-bind:style="styles.fiillColorPrimary"
                            d="M448,236.6v-66c0-22.4-17.4-40.6-39.3-42.3l-61.3-107c-5.7-9.9-14.8-17-25.8-19.9c-10.9-2.9-22.3-1.4-32.1,4.3L79.6,128
				H42.7C19.1,128,0,147.1,0,170.7v256c0,23.5,19.1,42.7,42.7,42.7h362.7c23.5,0,42.7-19.1,42.7-42.7v-66
				c12.4-4.4,21.3-16.1,21.3-30v-64C469.3,252.8,460.4,241.1,448,236.6z M383.9,128h-93l69.7-40.6L383.9,128z M350.1,68.9L248.6,128
				h-42.1l133.1-77.5L350.1,68.9z M300.3,24.2c4.8-2.8,10.5-3.6,15.8-2.1c5.4,1.5,10,5,12.8,9.9l0,0l-164.9,96H122L300.3,24.2z
				 M426.7,426.7c0,11.8-9.6,21.3-21.3,21.3H42.7c-11.8,0-21.3-9.6-21.3-21.3v-256c0-11.8,9.6-21.3,21.3-21.3h362.7
				c11.8,0,21.3,9.6,21.3,21.3v64h-64c-35.3,0-64,28.7-64,64s28.7,64,64,64h64L426.7,426.7L426.7,426.7z M448,330.7
				c0,5.9-4.8,10.7-10.7,10.7h-74.7c-23.5,0-42.7-19.1-42.7-42.7c0-23.5,19.1-42.7,42.7-42.7h74.7c5.9,0,10.7,4.8,10.7,10.7V330.7z"
                          />
                          <path v-bind:style="styles.fiillColorPrimary"
                            d="M362.7,277.3c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3C384,286.9,374.4,277.3,362.7,277.3z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>

                  <span class="md-list-item-text">Formas de pago</span>
                </md-list-item>
              

              

            </md-list>
          </div>

          <!--<div class="md-layout-item md-size-20 ">-->
          <md-button
            type="button"
            class="md-raised md-accent btnCloseSideRight btnCloseSideLeftUser"
            @click="close"
          >
            <md-icon class="icon_close_side" v-bind:style="styles.dataSideNavLeftUser.colorBtnCloseSide">keyboard_arrow_left</md-icon>
          </md-button>
          <!--</div>-->
        </div>
      </div>
    </div>

  <FormaDePago :jsonConfig="jsonConfig" @closeFormaPagos="closeFormaPagos" v-if="showFormaPagos"/>
    
  </div>
</template>

<script>
export default {
  name: "SideNavLeftUser",
  props: {
    showSideLeftUser: Boolean,
    jsonConfig: Object
  },
  components:{
    //Configuracion: () => import("./Configuracion.vue"),
    FormaDePago: () => import("./FormaDePago.vue"),
  },
  created() {
    this.$parent.$on("update", this.setValue);
    var NOMBREUSER = "nombreUser_et=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }

      if (c.indexOf(NOMBREUSER) === 0) {
        //return c.substring(name.length, c.length);
        //alert(c.substring(name.length, c.length));
        this.nameUser = c.substring(NOMBREUSER.length, c.length);
        break;
      }
    }
  },
  data() {
    return {
      styles: this.jsonConfig,
      expandNews: false,
      expandSingle: false,
      clickMenu: this.showSideLeftUser,
      showFormaPagos: false,
      clickChildSide: false,
      nameUser: null,
      showConfiguracion: false,
    };
  },
  methods: {
    /*openConfiguracion(){
      this.showConfiguracion = true;
    },
    closeConfiguration(){
      this.showConfiguracion = false;
    },*/
    openFormaPagos(){
      this.showFormaPagos = true;
    },
    closeFormaPagos(){
      this.showFormaPagos = false;
    },
    setValue(value) {
      //alert(value);
      this.clickMenu = true;
    },
    onClickMenu() {
      this.clickMenu = true;
    },
    close() {
      this.clickMenu = false;
    },
    onClickSide(event) {
      if (this.clickChildSide) {
        //alert(event.currentTarget.id);
      } else {
        //alert("solo side");
        this.clickMenu = false;
      }
      this.clickChildSide = false;
    },
    onClickSide2(event) {
      this.clickChildSide = true;
      //alert(event.currentTarget.id + " - " + this.clickChildSide);
    },
    logOut() {
      document.cookie =
        "tokenUser_et=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC";
      this.$router.push("/");
    },
  },
};
</script>

<style>
.sublist-menu
  > .md-list-item
  > .md-list-item-default
  > .md-list-item-content
  > .md-list-item
  > .md-list-item-expand
  > .md-list-item-content {
  padding-right: 0px;
  padding-left: 45px;
}

.md-list {
  background-color: #282828 !important;
}

.md-icon.md-theme-default.md-icon-image svg {
  /*display: none;*/
  fill: #ffffff !important ;
}

.title-sublist > div {
  color: #eee !important;
}

.divider_custom {
  margin-top: 70px !important;
  background-color: var(
    --md-theme-default-divider,
    #F58220
  ) !important;
  width: 100% !important;
}


</style>

<style lang="scss" scoped>
$list-width: 320px;

.full-control {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
}

.list {
  width: $list-width;
}

.full-control > .md-list {
  width: $list-width;
  max-width: 100%;
  height: 400px;
  display: inline-block;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
  vertical-align: top;
}

.control {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.sidenav {
  position: fixed;
  top: 0;
  height: 100vh;
  background-color: white;
  z-index: 2;
}

.sidenav > div {
  height: 100vh;
  background-color: white;
}

.btnMenuSide {
  display: none;
}

.toolbar_user {
  margin-top: 15px;
  min-height: 30px;
}

.card-info-user {
  background-color: inherit;
  box-shadow: none;
  width: 100%;
}

.card-info-user > div {
  height: 55px;
}

.card-info-user > div > div > .md-title {
  color: white !important;
}

.card-info-user > div > div > .md-subhead {
  color: white;
  font-weight: bold !important;
}

.sublist-menu > li > div > div > li {
  width: 100%;
}

.md-scrollbar {
  overflow: auto;
}

.btnCloseSideLeftUser {
  position: absolute !important;
  left: 240px !important;
  top: 60%;
}

.btnCloseSideRight {
  /*top: 65%;*/
  left: 0;
  width: 30px !important;
  min-width: 0;
  padding: 0 !important;
  background-color: inherit !important;
  box-shadow: none !important;
}

.md-button .md-ripple {
  display: contents !important;
}

.title_user {
  font-size: 15px !important;
  margin-top: 0 !important;
  margin-left: 0 !important;
}

.img_avatar_left {
  height: 30px;
  width: 30px;
  float: right;
}

.icon_close_side {
  color: #F58220 !important;
  font-size: 40px !important;
}

.icon_side {
  color: #F58220 !important;
  margin-left: 10px !important;
  margin-right: 10px !important;
  width: 25px;
  height: 25px;
}

.openSideNavLefUser > div > div > div > ul {
  background-color: inherit !important;
}

@media (min-width: 320px) and (max-width: 480px) {
  .sidenav {
    -moz-transform: translate(-50px, 0px);
    -webkit-transform: translate(-50px, 0px);
    -o-transform: translate(-50px, 0px);
    -ms-transform: translate(-50px, 0px);
    transform: translate(-500px, 0px);
    transition: all 1s;
    /*transition: all 1s;
    /*}margin-left: 100%;*/
  }

  .openSideNavLefUser {
    transform: translate(0px, 0px);
    z-index: 6;
    width: 100%;
    background-color: #00000061;
  }

  .openSideNavLefUser > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828 !important;
  }

  .btnMenuSide {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    min-width: 40px;
  }

  .list {
    width: 280px;
  }

  .card-info-user > div {
    padding: 10px;
    padding-top: 0;
    margin-bottom: 0 !important;
  }

  .card-info-user > div > div {
    margin-left: 0px;
  }

  .openSideNavLefUser > div,
  .sidenav > div {
    border-bottom-right-radius: 20px !important;
    border-top-right-radius: 20px !important;
  }

  .md-icon-image svg {
    display: none !important;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .sidenav {
    -moz-transform: translate(-50px, 0px);
    -webkit-transform: translate(-50px, 0px);
    -o-transform: translate(-50px, 0px);
    -ms-transform: translate(-50px, 0px);
    transform: translate(-500px, 0px);
    transition: all 1s;
  }

  .openSideNavLefUser {
    transform: translate(0px, 0px);
    z-index: 6;
    width: 100%;
    background-color: #00000061;
  }

  .openSideNavLefUser > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828;
    /*border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;*/
  }

  .btnMenuSide {
    display: block;
    position: fixed;
    top: 0;
    min-width: 40px;
    left: 0;
  }

  .list {
    width: 280px;
  }

  .card-info-user > div {
    padding: 10px;
  }

  .card-info-user > div > div {
    margin-left: 0px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .sidenav {
    -moz-transform: translate(-50px, 0px);
    -webkit-transform: translate(-50px, 0px);
    -o-transform: translate(-50px, 0px);
    -ms-transform: translate(-50px, 0px);
    transform: translate(-500px, 0px);
    transition: all 1s;
  }

  .openSideNavLefUser {
    transform: translate(0px, 0px);
    z-index: 6;
    width: 100%;
    background-color: #00000061;
  }

  .openSideNavLefUser > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }

  .btnMenuSide {
    display: block;
    position: fixed;
    top: 0;
    min-width: 40px;
    left: 0;
  }

  .list {
    width: 280px;
  }

  .card-info-user > div {
    padding: 10px;
  }

  .card-info-user > div > div {
    margin-left: 0px;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .sidenav {
    -moz-transform: translate(-50px, 0px);
    -webkit-transform: translate(-50px, 0px);
    -o-transform: translate(-50px, 0px);
    -ms-transform: translate(-50px, 0px);
    transform: translate(-500px, 0px);
    transition: all 1s;
  }

  .openSideNavLefUser {
    transform: translate(0px, 0px);
    z-index: 6;
    width: 100%;
    background-color: #00000061;
  }

  .openSideNavLefUser > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828;
    border-bottom-right-radius: 20px !important;
    border-top-right-radius: 20px;
  }
}

@media (min-width: 1281px) {
  .sidenav {
    -moz-transform: translate(-50px, 0px);
    -webkit-transform: translate(-50px, 0px);
    -o-transform: translate(-50px, 0px);
    -ms-transform: translate(-50px, 0px);
    transform: translate(-500px, 0px);
    transition: all 1s;
  }

  .openSideNavLefUser {
    transform: translate(0px, 0px);
    z-index: 6;
    width: 100%;
    background-color: #00000061;
  }

  .openSideNavLefUser > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
}
</style>
