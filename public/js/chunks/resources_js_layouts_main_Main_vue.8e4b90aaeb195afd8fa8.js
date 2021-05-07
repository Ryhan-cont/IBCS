(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layouts_main_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Body.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Body.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: []
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Footer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Footer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Header.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: [],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.width = window.innerWidth - this.$store.state.menuWidthAdj;
  },
  methods: {
    toggleMenu: function toggleMenu() {
      if (this.$store.state.toggleMenu == true) {
        this.$store.commit('TOGGLE_MENU', false);
      } else {
        this.$store.commit('TOGGLE_MENU', true);
      }
    },
    logout: function logout() {
      console.log('logout');
    }
  },
  watch: {
    '$store.state.menuWidthAdj': function $storeStateMenuWidthAdj() {
      this.$store.commit('HEADER_WIDTH', window.innerWidth - this.$store.state.menuWidthAdj);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menubar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menubar */ "./resources/js/layouts/main/Menubar.vue");
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Body */ "./resources/js/layouts/main/Body.vue");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./resources/js/layouts/main/Header.vue");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./resources/js/layouts/main/Footer.vue");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller.js */ "./resources/js/layouts/main/controller.js");
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    'layout-body': _Body__WEBPACK_IMPORTED_MODULE_1__.default,
    'layout-header': _Header__WEBPACK_IMPORTED_MODULE_2__.default,
    'layout-menubar': _Menubar__WEBPACK_IMPORTED_MODULE_0__.default,
    'layout-footer': _Footer__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    return {
      menuWidth: 230,
      menuFullScreen: false,
      menuStatus: null,
      menuStatusMemory: true,
      mobileBreakPoint: 800
    };
  },
  created: function created() {
    window.addEventListener('resize', this.resizeControll);
    this.setup();
  },
  mounted: function mounted() {
    this.changeRouteTitle(this.$route.meta.pageTitle);
  },
  methods: {
    setup: _controller_js__WEBPACK_IMPORTED_MODULE_4__.setup,
    resizeControll: _controller_js__WEBPACK_IMPORTED_MODULE_4__.resizeControll,
    slideMenu: _controller_js__WEBPACK_IMPORTED_MODULE_4__.slideMenu,
    floatMenu: _controller_js__WEBPACK_IMPORTED_MODULE_4__.floatMenu,
    toggleMenu: _controller_js__WEBPACK_IMPORTED_MODULE_4__.toggleMenu,
    changeRouteTitle: function changeRouteTitle(title) {
      document.title = title || 'IBCS';
    }
  },
  watch: {
    '$store.state.toggleMenu': function $storeStateToggleMenu(val) {
      this.toggleMenu(val);
    },
    $route: function $route() {
      this.changeRouteTitle(this.$route.meta.pageTitle);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Menubar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Menubar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['menuWidth', 'menuStatus', 'menuFullScreen'],
  data: function data() {
    return {
      width: 0
    };
  },
  mounted: function mounted() {
    this.width = this.$store.state.menuWidthAdj;
  },
  methods: {
    toggleMenu: function toggleMenu() {
      if (this.$store.state.toggleMenu == true) {
        this.$store.commit('TOGGLE_MENU', false);
      } else {
        this.$store.commit('TOGGLE_MENU', true);
      }
    }
  },
  watch: {
    '$store.state.menuWidthAdj': function $storeStateMenuWidthAdj(val) {
      this.width = this.$store.state.menuWidthAdj;
    },
    menuFullScreen: function menuFullScreen(val) {
      console.log(this.menuWidth);

      if (this.menuFullScreen == true) {
        this.width = this.menuWidth;
      } else {
        this.width = 0;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/layouts/main/controller.js":
/*!*************************************************!*\
  !*** ./resources/js/layouts/main/controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setup": () => (/* binding */ setup),
/* harmony export */   "resizeControll": () => (/* binding */ resizeControll),
/* harmony export */   "slideMenu": () => (/* binding */ slideMenu),
/* harmony export */   "floatMenu": () => (/* binding */ floatMenu),
/* harmony export */   "toggleMenu": () => (/* binding */ toggleMenu)
/* harmony export */ });
function setup() {
  if (window.innerWidth > this.mobileBreakPoint) {
    this.menuStatus = this.menuStatusMemory;
    this.$store.commit('MENU_WIDTH_ADJ', this.menuWidth);
    this.$store.commit('TOGGLE_MENU', this.menuStatusMemory);
    this.$store.commit('HEADER_WIDTH', window.innerWidth - this.$store.state.menuWidthAdj);
  } else {
    this.menuStatus = false;
    this.$store.commit('MENU_WIDTH_ADJ', 0);
    this.$store.commit('TOGGLE_MENU', false);
    this.$store.commit('HEADER_WIDTH', window.innerWidth);
  }
}

function resizeControll() {
  this.$store.commit('HEADER_WIDTH', window.innerWidth - this.$store.state.menuWidthAdj);

  if (window.innerWidth > this.mobileBreakPoint) {
    if (this.menuStatusMemory == true) {
      this.slideMenu('show');
    }
  } else {
    this.slideMenu('hide');

    if (this.menuFullScreen) {
      this.floatMenu('hide');
    }
  }
}

function slideMenu(act) {
  if (act == 'show') {
    if (this.menuStatus == false) {
      this.$store.commit('TOGGLE_MENU', true);
      this.menuStatus = true;
      var timer = setInterval(function () {
        var menuWidth = this.$store.state.menuWidthAdj + 5;

        if (menuWidth > this.menuWidth) {
          this.$store.commit('MENU_WIDTH_ADJ', this.menuWidth);
          clearInterval(timer);
        } else {
          this.$store.commit('MENU_WIDTH_ADJ', menuWidth);
        }
      }.bind(this), 5);
    }
  }

  if (act == 'hide') {
    if (this.menuStatus == true) {
      var _timer = setInterval(function () {
        var menuWidth = this.$store.state.menuWidthAdj - 5;

        if (menuWidth < 0) {
          this.$store.commit('MENU_WIDTH_ADJ', 0);
          this.menuStatus = false;
          this.$store.commit('TOGGLE_MENU', false);
          clearInterval(_timer);
        } else {
          this.$store.commit('MENU_WIDTH_ADJ', menuWidth);
        }
      }.bind(this), 5);
    }
  }
}

function floatMenu(act) {
  if (act == 'show') {
    this.menuStatus = true;
    this.menuFullScreen = true;
  }

  if (act == 'hide') {
    this.menuStatus = false;
    this.menuFullScreen = false;
  }
}

function toggleMenu(status) {
  if (window.innerWidth > this.mobileBreakPoint) {
    if (status == true) {
      this.slideMenu('show');
      this.menuStatusMemory = true;
    } else {
      this.slideMenu('hide');
      this.menuStatusMemory = false;
    }
  } else {
    status == true ? this.floatMenu('show') : this.floatMenu('hide');
  }
}



/***/ }),

/***/ "./resources/js/layouts/main/Body.vue":
/*!********************************************!*\
  !*** ./resources/js/layouts/main/Body.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Body_vue_vue_type_template_id_70a4b0c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Body.vue?vue&type=template&id=70a4b0c4& */ "./resources/js/layouts/main/Body.vue?vue&type=template&id=70a4b0c4&");
/* harmony import */ var _Body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Body.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/Body.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Body_vue_vue_type_template_id_70a4b0c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Body_vue_vue_type_template_id_70a4b0c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/Body.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/Footer.vue":
/*!**********************************************!*\
  !*** ./resources/js/layouts/main/Footer.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_77114dbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=77114dbd& */ "./resources/js/layouts/main/Footer.vue?vue&type=template&id=77114dbd&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Footer_vue_vue_type_template_id_77114dbd___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_77114dbd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/Header.vue":
/*!**********************************************!*\
  !*** ./resources/js/layouts/main/Header.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_cf789ca2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=cf789ca2& */ "./resources/js/layouts/main/Header.vue?vue&type=template&id=cf789ca2&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/Header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Header_vue_vue_type_template_id_cf789ca2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_cf789ca2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/Main.vue":
/*!********************************************!*\
  !*** ./resources/js/layouts/main/Main.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=0aa7995b& */ "./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/Menubar.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/main/Menubar.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menubar_vue_vue_type_template_id_0e001522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menubar.vue?vue&type=template&id=0e001522& */ "./resources/js/layouts/main/Menubar.vue?vue&type=template&id=0e001522&");
/* harmony import */ var _Menubar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menubar.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/Menubar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Menubar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Menubar_vue_vue_type_template_id_0e001522___WEBPACK_IMPORTED_MODULE_0__.render,
  _Menubar_vue_vue_type_template_id_0e001522___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/Menubar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/Body.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/main/Body.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Body.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Body.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/main/Footer.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/main/Footer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/main/Header.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/main/Header.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/main/Menubar.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/main/Menubar.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menubar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menubar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Menubar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menubar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/main/Body.vue?vue&type=template&id=70a4b0c4&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/main/Body.vue?vue&type=template&id=70a4b0c4& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Body_vue_vue_type_template_id_70a4b0c4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Body_vue_vue_type_template_id_70a4b0c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Body_vue_vue_type_template_id_70a4b0c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Body.vue?vue&type=template&id=70a4b0c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Body.vue?vue&type=template&id=70a4b0c4&");


/***/ }),

/***/ "./resources/js/layouts/main/Footer.vue?vue&type=template&id=77114dbd&":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/main/Footer.vue?vue&type=template&id=77114dbd& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_77114dbd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_77114dbd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_77114dbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=77114dbd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Footer.vue?vue&type=template&id=77114dbd&");


/***/ }),

/***/ "./resources/js/layouts/main/Header.vue?vue&type=template&id=cf789ca2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/main/Header.vue?vue&type=template&id=cf789ca2& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_cf789ca2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_cf789ca2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_cf789ca2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=cf789ca2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Header.vue?vue&type=template&id=cf789ca2&");


/***/ }),

/***/ "./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=0aa7995b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&");


/***/ }),

/***/ "./resources/js/layouts/main/Menubar.vue?vue&type=template&id=0e001522&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/main/Menubar.vue?vue&type=template&id=0e001522& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menubar_vue_vue_type_template_id_0e001522___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menubar_vue_vue_type_template_id_0e001522___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menubar_vue_vue_type_template_id_0e001522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menubar.vue?vue&type=template&id=0e001522& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Menubar.vue?vue&type=template&id=0e001522&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Body.vue?vue&type=template&id=70a4b0c4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Body.vue?vue&type=template&id=70a4b0c4& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "layout--main-body",
      style: {
        marginLeft: _vm.$store.state.menuWidthAdj + "px",
        paddingTop: _vm.$store.state.headerHeight + "px"
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Footer.vue?vue&type=template&id=77114dbd&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Footer.vue?vue&type=template&id=77114dbd& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "layout--main-footer" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Header.vue?vue&type=template&id=cf789ca2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Header.vue?vue&type=template&id=cf789ca2& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "layout--main-header",
      style: {
        marginLeft: _vm.$store.state.menuWidthAdj + "px",
        height: _vm.$store.state.headerHeight + "px",
        width: _vm.$store.state.headeerWidth + "px"
      }
    },
    [
      _c("div", { staticStyle: { width: "100%", display: "flex" } }, [
        _c("div", {
          staticClass: "fas fa-bars btn-lg btn",
          on: {
            click: function($event) {
              return _vm.toggleMenu()
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticStyle: { flex: "1" } }),
        _vm._v(" "),
        _c(
          "div",
          {},
          [
            _c(
              "b-dropdown",
              {
                attrs: {
                  right: "",
                  text: "",
                  size: "sm",
                  variant: "outline-secondary"
                }
              },
              [
                _c(
                  "b-dropdown-item",
                  {
                    on: {
                      click: function($event) {
                        return _vm.logout()
                      }
                    }
                  },
                  [_vm._v("Log out")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "layout--main" },
    [
      _c("layout-menubar", {
        attrs: {
          menuWidth: _vm.menuWidth,
          menuStatus: _vm.menuStatus,
          menuFullScreen: _vm.menuFullScreen
        }
      }),
      _vm._v(" "),
      _c(
        "layout-body",
        [
          _c("layout-header"),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { flex: "auto", padding: "15px" } },
            [_c("router-view")],
            1
          ),
          _vm._v(" "),
          _c("layout-footer")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Menubar.vue?vue&type=template&id=0e001522&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Menubar.vue?vue&type=template&id=0e001522& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.menuStatus
    ? _c(
        "div",
        {
          staticClass: "layout--main-menubar",
          style: { right: _vm.menuFullScreen == true ? 0 : "auto" }
        },
        [
          _c(
            "div",
            {
              staticClass: "layout--main-left-container",
              style: { width: _vm.width + "px" }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "border-bottom px-2 py-3 font-weight-bold text-truncate",
                  style: { height: _vm.$store.state.headerHeight + "px" }
                },
                [_vm._v("\n            IBCS-PRIMAX\n        ")]
              ),
              _vm._v(" "),
              _c("div")
            ]
          ),
          _vm._v(" "),
          _c("div", {
            staticStyle: {
              flex: "auto",
              "background-color": "rgba(0, 0, 0, 0.1)"
            },
            on: {
              click: function($event) {
                return _vm.toggleMenu()
              }
            }
          })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);