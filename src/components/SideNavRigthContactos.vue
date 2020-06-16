<template>
  <div>
    <div
      id="sidenav-main"
      class="full-control sidenav "
      :class="{ openSideNavContactos: clickMenu }"
      @click="onClickSide($event)"
    >
      <div class="list md-scrollbar" @click="onClickSide2($event)">
        <md-toolbar
          class="md-transparent toolbar_user tool_bar_title"
          md-elevation="0"
        >
          <md-card class="md-primary card-info-user" md-theme="green-card">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title title_side">Comparte tu experiencia</div>
              </md-card-header-text>
            </md-card-header>
          </md-card>
        </md-toolbar>

        <div class="md-layout md-gutter content-redes">
          <div class="md-layout-item md-size-100">
            <md-list :md-expand-single="expandSingle">
              <a target="_blanck" href="https://www.facebook.com/ToksMx/?ref=br_rs">
                <md-list-item>
                  <!-- Generator: Adobe Illustrator 23.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                  <svg
                    version="1.1"
                    class="icon_side"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <path
                          class="primary_color_bg"
                          d="M452,0H60C26.9,0,0,26.9,0,60v392c0,33.1,26.9,60,60,60h392c33.1,0,60-26.9,60-60V60C512,26.9,485.1,0,452,0z M472,452
			c0,11-9,20-20,20H338V309h61.8l10.2-62h-72v-43c0-17,13-30,30-30h41v-62h-41c-50.9,0-92,41.3-92,92.2V247h-60v62h60v163H60
			c-11,0-20-9-20-20V60c0-11,9-20,20-20h392c11,0,20,9,20,20V452z"
                        />
                      </g>
                    </g>
                  </svg>

                  <span class="md-list-item-text">Facebook</span>
                </md-list-item>
              </a>
              <a target="_blanck" href="https://twitter.com/toksmx?lang=es">
                <md-list-item :md-expand-single="expandSingle">
                  <svg
                    class="icon_side"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;"
                    xml:space="preserve"
                  >
                    <path
                      class="primary_color_bg"
                      d="M193,417.9c-35,0-76.8-8-121.4-33.3c-1.3-0.8-2.5-1.7-3.6-2.8c-4.4-4.7-8.3-12.9-6.1-21.6c1.1-4.4,4.8-12.3,16.9-16.3
	c2-0.7,4-0.9,6.1-0.7c0.3,0,25,2,49.4-4.3c-1.4-1-2.8-2.1-4.2-3.2c-24.1-19.2-27.8-38.4-26.3-51.7c-10.4-12.1-29.3-37.9-25.7-60.9
	c0.8-5,2.8-11.2,7.8-17c-1.6-4-3.4-9-5-14.4c-6.1-20.6-6.6-38.2-1.5-52.3c4.6-12.9,14-22.7,27-28.2c6.1-2.6,13.1-0.9,17.3,4.1
	c0.5,0.5,44.9,51.9,104.5,62C230.5,131,269.6,94,316.8,94c0.3,0,0.6,0,0.8,0c17.6,0.2,42.1,2.3,60.2,17.9c7.6-1.4,20.1-4.2,29.3-9.1
	c6.8-3.6,14.5-3.9,21.3-0.9c10.4,4.6,15,15.3,11.2,25.9c-0.4,1-0.8,2.1-1.3,3.3c0.2,0.1,0.5,0.2,0.7,0.4c5.8,3.1,9.7,7.9,11,13.5
	c0.8,3.3,1.3,9.9-3.8,17c-0.3,0.4-0.7,0.9-1,1.3l-29.9,33.3c0,10.7-1.1,33.1-9.1,60.5c-10.1,34.6-33.6,84.1-88.1,124
	c-1.2,0.9-28.9,20.6-73,30.8C230.4,415.4,212.8,417.9,193,417.9L193,417.9z M115.2,372.5c40.2,16.4,81.5,19.8,123.1,10.2
	c38.3-8.9,61.9-25.7,62.2-25.8c91.1-66.6,84.9-163.7,84.8-164.6c-0.3-4.1,1.1-8.1,3.8-11.2l18.1-20.1c-1.9-0.9-3.7-2.2-5.2-3.9
	c-4.1-4.8-4.8-11.7-1.6-17.1c0.5-0.9,1-1.9,1.6-2.9c-14.1,4.2-26.8,5.8-27.5,5.9c-5,0.6-9.9-1.3-13.1-5.1
	c-7.9-9.2-21.9-13.5-44-13.7c-0.2,0-0.4,0-0.6,0c-31.8,0-58,25.2-58.5,56.4c-0.1,3.7,0.2,7.3,0.9,10.9c0.8,4.4-0.5,9-3.4,12.4
	s-7.3,5.3-11.8,5.2c-63.5-2-113.5-44.4-133.6-64.3c-1.1,1.4-2,3.1-2.6,4.9c-6,16.8,5.4,45.4,9.9,54.1c3.8,7.3,1,16.2-6.2,20.1
	c-3.2,1.7-3.5,3.1-3.6,4.1c-1.5,9.7,12.4,30.3,23.1,41.4c3.8,4,5.1,9.7,3.5,14.9c-7.2,22.4,38.7,42.5,39.2,42.7
	c5.1,2.1,8.7,6.9,9.2,12.4c0.5,5.5-2,10.9-6.7,14C157.1,365.7,133.8,370.7,115.2,372.5z M426.7,158.4L426.7,158.4
	C426.7,158.4,426.7,158.4,426.7,158.4z"
                    />
                    <path
                      class="primary_color_bg"
                      d="M497,512H15c-8.3,0-15-6.7-15-15V15C0,6.7,6.7,0,15,0h482c8.3,0,15,6.7,15,15v482C512,505.3,505.3,512,497,512z M30,482h452
	V30H30V482z"
                    />
                  </svg>

                  <span class="md-list-item-text">Twitter</span>
                </md-list-item>
              </a>

              <a target="_blanck" href="https://www.instagram.com/toksmx/?hl=es-la">
                <md-list-item :md-expand-single="expandSingle">
                  <svg
                    class="icon_side"
                    version="1.2"
                    baseProfile="tiny"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 511 511"
                    xml:space="preserve"
                  >
                    <path
                      class="primary_color_bg"
                      d="M510.5,150.2c-1.2-27.2-5.6-45.8-11.9-62c-6.5-17.2-16.5-32.5-29.5-45.3c-12.8-13-28.3-23.1-45.2-29.4
	c-16.3-6.3-34.8-10.7-62-11.9C334.5,0.3,325.8,0,256.4,0s-78.1,0.3-105.3,1.5c-27.2,1.2-45.8,5.6-62,11.9
	C72,19.9,56.6,29.8,43.8,42.9c-13,12.8-23.1,28.3-29.4,45.2c-6.3,16.3-10.7,34.8-11.9,62c-1.3,27.4-1.6,36-1.6,105.4
	s0.3,78.1,1.5,105.3c1.2,27.2,5.6,45.8,11.9,62c6.5,17.2,16.6,32.5,29.5,45.3c12.8,13,28.3,23.1,45.2,29.4
	c16.3,6.3,34.8,10.7,62,11.9c27.2,1.2,35.9,1.5,105.3,1.5s78.1-0.3,105.3-1.5c27.2-1.2,45.8-5.6,62-11.9
	c34.3-13.3,61.5-40.4,74.8-74.8c6.3-16.3,10.7-34.8,11.9-62c1.2-27.3,1.5-35.9,1.5-105.3S511.7,177.5,510.5,150.2z M464.5,358.9
	c-1.1,25-5.3,38.4-8.8,47.4c-8.6,22.3-26.3,39.9-48.5,48.5c-9,3.5-22.6,7.7-47.4,8.8c-27,1.2-35,1.5-103.2,1.5s-76.4-0.3-103.2-1.5
	c-25-1.1-38.4-5.3-47.4-8.8c-11.1-4.1-21.2-10.6-29.3-19.1c-8.5-8.3-15-18.3-19.1-29.3c-3.5-9-7.7-22.6-8.8-47.4
	c-1.2-27-1.5-35-1.5-103.2s0.3-76.4,1.5-103.2c1.1-25,5.3-38.4,8.8-47.4C61.6,94,68.1,84,76.7,75.8c8.3-8.5,18.3-15,29.3-19.1
	c9-3.5,22.6-7.7,47.4-8.8c27-1.2,35-1.5,103.2-1.5c68.3,0,76.4,0.3,103.2,1.5c25,1.1,38.4,5.3,47.4,8.8
	c11.1,4.1,21.2,10.6,29.3,19.1c8.5,8.3,15,18.3,19.1,29.4c3.5,9,7.7,22.6,8.8,47.4c1.2,27,1.5,35,1.5,103.2S465.7,331.9,464.5,358.9
	z"
                    />
                    <path
                      class="primary_color_bg"
                      d="M256.4,124.3c-72.5,0-131.3,58.8-131.3,131.3S184,386.8,256.4,386.8c72.5,0,131.3-58.8,131.3-131.3S328.9,124.3,256.4,124.3
	z M256.4,340.7c-47,0-85.2-38.1-85.2-85.2s38.1-85.2,85.2-85.2c47,0,85.2,38.1,85.2,85.2S303.5,340.7,256.4,340.7z"
                    />
                    <path
                      class="primary_color_bg"
                      d="M423.6,119.1c0,16.9-13.7,30.6-30.6,30.6c-16.9,0-30.6-13.7-30.6-30.6c0-16.9,13.7-30.6,30.6-30.6
	C409.8,88.4,423.6,102.2,423.6,119.1z"
                    />
                  </svg>

                  <span class="md-list-item-text">Instagram</span>
                </md-list-item>
              </a>

              <md-list-item md-expand>
                <svg
                  class="icon_side"
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

                <span class="md-list-item-text">Contáctanos via mail</span>

                <md-list slot="md-expand">
                  <a href="mailto:contacto@toks.com.mx">
                    <md-list-item class="md-inset title-sublist list-number"
                      >contacto@toks.com.mx</md-list-item
                    >
                  </a>
                </md-list>
              </md-list-item>

              <md-list-item md-expand>
                <svg
                  class="icon_side"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      class="primary_color_bg"
                      d="M368,512c-16.5,0-32.9-2.9-48.9-8.7c-70.6-25.6-136.1-67.4-189.5-120.8S34.4,263.6,8.7,193c-8.2-22.7-10.7-46.1-7.2-69.6
		c3.2-22,11.8-43.4,24.7-61.8c13-18.5,30.2-33.9,50-44.5C97.2,5.7,120.2,0,144.4,0c7.5,0,14.1,5.3,15.6,12.6l25.1,117.2
		c1.1,5.3-0.5,10.8-4.3,14.7l-42.9,42.9c40.5,80.5,106.2,146.2,186.6,186.6l42.9-42.9c3.8-3.8,9.4-5.5,14.7-4.3l117.2,25.1
		c7.4,1.6,12.6,8.1,12.6,15.6c0,24.3-5.7,47.2-17.1,68.3c-10.6,19.7-26,37-44.5,50c-18.4,12.9-39.8,21.4-61.8,24.7
		C381.7,511.5,374.8,512,368,512L368,512z M131.6,32.7c-32,3.5-60.4,20.3-79.2,47.2C31.2,110.2,26.2,147.4,38.8,182
		C88.1,317.8,194.2,423.9,330,473.2c34.6,12.6,71.9,7.6,102.1-13.6c26.9-18.9,43.7-47.3,47.2-79.2L384,359.9l-44.8,44.8
		c-4.8,4.8-12,6-18.1,3.2c-95.2-44.7-172.2-121.8-217-217c-2.9-6.1-1.6-13.3,3.2-18.1l44.8-44.8L131.6,32.7z"
                    />
                    <path
                      class="primary_color_bg"
                      d="M496,272c-8.8,0-16-7.2-16-16c0-123.5-100.5-224-224-224c-8.8,0-16-7.2-16-16s7.2-16,16-16c68.4,0,132.7,26.6,181,75
		s75,112.6,75,181C512,264.8,504.8,272,496,272L496,272z"
                    />
                    <path
                      class="primary_color_bg"
                      d="M432,272c-8.8,0-16-7.2-16-16c0-88.2-71.8-160-160-160c-8.8,0-16-7.2-16-16s7.2-16,16-16c105.9,0,192,86.1,192,192
		C448,264.8,440.8,272,432,272z"
                    />
                    <path
                      class="primary_color_bg"
                      d="M368,272c-8.8,0-16-7.2-16-16c0-52.9-43.1-96-96-96c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c70.6,0,128,57.4,128,128
		C384,264.8,376.8,272,368,272z"
                    />
                  </g>
                </svg>

                <span class="md-list-item-text">Télefonos</span>

                <md-list slot="md-expand">
                  <a href="tel:55 2122 5727">
                    <md-list-item class="md-inset title-sublist list-number"
                      >
                      <div class="md-layout md-gutter">
                        <div class="md-layout-item text_desc_tel">
                          D.F y área metropilitana
                        </div>
                        <div class="md-layout-item text_tel">55 2122 5727</div>
                      </div>
                    </md-list-item>
                  </a>

                  <a href="tel:80 0713 9500">
                    <md-list-item class="md-inset title-sublist list-number"
                      >
                      <div class="md-layout md-gutter">
                        <div class="md-layout-item text_desc_tel">
                          D.F y área metropilitana
                        </div>
                        <div class="md-layout-item text_tel">80 0713 9500</div>
                      </div>
                    </md-list-item>
                  </a>
                </md-list>
              </md-list-item>
            </md-list>
          </div>

          <div class="md-layout-item md-size-15 ">
            <md-button
              type="button"
              class="md-raised md-accent btnCloseSideRight"
              @click="close"
            >
              <md-icon class="icon_close_side">keyboard_arrow_right</md-icon>
            </md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavRigthContactos",
  props: {
    msg: String,
    showSideRigthContactos: Boolean,
  },
  created() {
    this.$parent.$on("updateNavRight", this.setValue);
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
      expandNews: false,
      expandSingle: false,
      clickMenu: this.showSideRigthContactos,
      clickChildSide: false,
      nameUser: null,
    };
  },
  methods: {
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

.card-info-user > div {
  padding-bottom: 0 !important;
}

.toolbar_user {
  margin-top: 15px;
}

.tool_bar_title {
  height: 40px;
  min-height: 40px !important;
}


.list-number.md-inset .md-list-item-content{
  padding-left: 30px !important;
  background: transparent linear-gradient(180deg, #2F2F30 0%, #262628 100%) 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000042;
border-radius: 2px;
opacity: 1;
}

.text_desc_tel{
  font-size: 10px;
}

.text_tel{
  font-size: 13px;
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

.card-info-user {
  background-color: inherit;
  box-shadow: none;
  width: 100%;
}

.card-info-user > div {
  height: 25px;
  padding-top: 0 !important;
  margin-bottom: 0px !important;
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

.btnCloseSideRight {
  position: absolute !important;
  top: 58%;
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

.title_user,
.title_side {
  font-size: 18px !important;
  margin-top: 5px !important;
  text-align: left;
}

.title_side {
  padding-bottom: 0 !important;
  margin-bottom: 10px;
}

.icon_side {
  color: #f58220 !important;
  margin-left: 10px !important;
  margin-right: 10px !important;
  width: 25px;
  height: 25px;
}

.divider_custom {
  margin-top: 70px !important;
  background-color: var(--md-theme-default-divider, #f58220) !important;
  width: 100% !important;
}

.icon_close_side {
  color: #f58220 !important;
}

.content-redes {
  margin-top: 10px;
}

.md-icon {
  font-size: 48px !important;
}

@media (min-width: 320px) and (max-width: 480px) {
  .sidenav {
    /*-moz-transform: translate(-50px, 0px);
    -webkit-transform: translate(-50px, 0px);
    -o-transform: translate(-50px, 0px);
    -ms-transform: translate(-50px, 0px);
    transform: translate(-500px, 0px);*/
    /*transition: all 1s;*/
    transition: all 1s;
    margin-left: 100%;
  }

  .openSideNavContactos {
    transform: translate(-280px, 0px);
    z-index: 6;
    width: 100%;
    background-color: #00000061;
  }

  .openSideNavContactos > div,
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
    margin-bottom: 0;
  }

  .card-info-user > div > div {
    margin-left: 0px;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .sidenav {
    /*-moz-transform: translate(300%, 0px);
    -webkit-transform: translate(300%, 0px);
    -o-transform: translate(300%, 0px);
    -ms-transform: translate(300%, 0px);
    transform: translate(300%, 0px);
    transition-timing-function: ease;*/
    transition: all 1s;
    margin-left: 100%;
  }

  .openSideNavContactos {
    transform: translate(-280px, 0px);
    margin-left: 100%;
    z-index: 26;
    /*width: 100%;*/
    background-color: #00000000;
    transition: all 1s;
  }

  .openSideNavContactos > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
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
    /*-moz-transform: translate(300%, 0px);
    -webkit-transform: translate(300%, 0px);
    -o-transform: translate(300%, 0px);
    -ms-transform: translate(300%, 0px);
    transform: translate(300%, 0px);
    transition-timing-function: ease;*/
    transition: all 1s;
    margin-left: 100%;
  }

  .openSideNavContactos {
    transform: translate(-280px, 0px);
    margin-left: 100%;
    z-index: 26;
    /*width: 100%;*/
    background-color: #00000000;
    transition: all 1s;
  }

  .openSideNavContactos > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .sidenav {
    transition: all 1s;
    margin-left: 100%;
  }

  .openSideNavContactos {
    transform: translate(-280px, 0px);
    margin-left: 100%;
    z-index: 26;
    /*width: 100%;*/
    background-color: #00000000;
    transition: all 1s;
  }

  .openSideNavContactos > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
}

@media (min-width: 1281px) {
  .sidenav {
    transition: all 1s;
    margin-left: 100%;
  }

  .openSideNavContactos {
    transform: translate(-280px, 0px);
    margin-left: 100%;
    z-index: 26;
    /*width: 100%;*/
    background-color: #00000000;
    transition: all 1s;
  }

  .openSideNavContactos > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
  .sidenav {
    transition: all 1s;
    margin-left: 100%;
  }

  .openSideNavContactos {
    transform: translate(-280px, 0px);
    margin-left: 100%;
    z-index: 26;
    /*width: 100%;*/
    background-color: #00000000;
    transition: all 1s;
  }

  .openSideNavContactos > div,
  .sidenav > div {
    height: 100vh;
    background-color: #282828;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
}
</style>
